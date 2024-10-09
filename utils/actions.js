"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getData = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdOn: "desc",
        },
    });
};

export const saveTask = async (prevState, formData) => {
    let content = formData.get("content");
    const TASK = z.object({
        content: z
            .string()
            .min(5, "Min 5 characters required")
            .max(100, "Not more than 100 characters"),
    });
    try {
        TASK.parse({ content });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await prisma.task.create({
            data: {
                content,
            },
        });
        revalidatePath("/tasks");
        return { message: "success" };
    } catch (error) {
        return { message: "error" };
    }
};

export const deleteTask = async (formData) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    const id = formData.get("id");

    await prisma.task.delete({
        where: { id },
    });
    revalidatePath("/tasks");
};

export const getTask = async (id) => {
    return prisma.task.findFirst({
        where: { id },
    });
};

export const editTask = async (formData) => {
    const id = formData.get("id");
    const content = formData.get("content");
    const completed = formData.get("completed");
    await prisma.task.update({
        where: { id },
        data: {
            content,
            completed: completed === "on",
        },
    });
    redirect("/tasks");
};
