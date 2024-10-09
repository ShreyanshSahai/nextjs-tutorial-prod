import prisma from "@/utils/db";
import React from "react";

const prismaHandler = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdOn: "desc",
        },
    });
};

const PrismaPage = async () => {
    const tasks = await prismaHandler();
    return (
        <div>
            <h1 className="text-7xl text-purple-400 mb-10">Prisma Example</h1>
            <ul className=" max-w-4xl">
                {tasks.map((task) => {
                    return (
                        <li
                            key={task.id}
                            className="text-3xl menu menu-title px-6 py-3 border shadow-lg rounded-2xl my-3 text-blue-400"
                        >
                            {task.content}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PrismaPage;
