"use client";

import { saveTask } from "@/utils/actions";
import React, { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const initialState = { message: null };

const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className="btn btn-primary join-item"
            disabled={pending}
        >
            {pending ? "Creating.." : "Create"}
        </button>
    );
};

const TaskForm = () => {
    const [state, formAction] = useFormState(saveTask, initialState);

    useEffect(() => {
        if (state.message === "success") {
            toast.success("Saved Successfully");
            return;
        }
        if (state.message === "error") {
            toast.error("Error encountered");
        }
    }, [state]);
    return (
        <form action={formAction} className="mb-8 max-w-lg px-4">
            {/* <p className="my-5 text-lg">{state.message}</p> */}
            <div className="join w-full">
                <input
                    className="input input-bordered w-full join-item"
                    placeholder="Enter task..."
                    name="content"
                    type="text"
                    required
                ></input>
                <SubmitBtn></SubmitBtn>
            </div>
        </form>
    );
};

export default TaskForm;
