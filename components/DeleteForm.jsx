"use client";

import { deleteTask } from "@/utils/actions";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
    const { pending } = useFormStatus();

    return (
        <button className="btn btn-error rounded-2xl" disabled={pending}>
            {pending ? "Deleting" : "Delete"}
        </button>
    );
};

const DeleteForm = ({ id }) => {
    return (
        <form action={deleteTask}>
            <input type="hidden" value={id} name="id"></input>
            <SubmitBtn></SubmitBtn>
        </form>
    );
};

export default DeleteForm;
