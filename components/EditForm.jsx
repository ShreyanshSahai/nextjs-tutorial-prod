import { editTask } from "@/utils/actions";
import React from "react";

const EditForm = async ({ task }) => {
    const { id, content, completed } = task;
    return (
        <form
            className="bordered border-base-300 rounded max-w-sm"
            action={editTask}
        >
            <div className="p-12">
                <input type="hidden" value={id} name="id"></input>
                <input
                    type="text"
                    defaultValue={content}
                    className="input input-bordered rounded-lg"
                    name="content"
                ></input>
                <div className="flex justify-start items-center my-8">
                    <label className="mx-7">Completed</label>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        name="completed"
                    ></input>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-block max-w-sm"
                >
                    Edit
                </button>
            </div>
        </form>
    );
};

export default EditForm;
