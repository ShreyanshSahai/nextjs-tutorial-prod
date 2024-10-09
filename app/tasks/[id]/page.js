import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";
import React from "react";

const EditPage = async ({ params }) => {
    const task = await getTask(params.id);
    return (
        <div className="mb-8">
            <Link href="/tasks" className="btn btn-accent">
                Back To Tasks
            </Link>
            <EditForm task={task}></EditForm>
        </div>
    );
};

export default EditPage;
