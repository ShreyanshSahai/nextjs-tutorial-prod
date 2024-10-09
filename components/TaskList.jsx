import Link from "next/link";
import React from "react";
import DeleteForm from "./DeleteForm";
import { getData } from "@/utils/actions";

const TaskList = async () => {
    const data = await getData();
    if (data && data.length === 0) {
        return (
            <div>
                <h1>
                    There are no tasks to show, please create one yourself....
                </h1>
            </div>
        );
    }
    return (
        <div>
            <ul className="mt-8">
                {data.map((d, index) => {
                    if (d.completed) {
                        return (
                            <li
                                className="px-4 py-4 mx-4 my-5 border border-base-800 flex items-center justify-between rounded-2xl shadow-lg shadow-base-300"
                                key={d.id}
                            >
                                <div className="flex-grow line-through">
                                    {d.content}
                                </div>
                                <div className="flex space-x-2">
                                    <Link
                                        className="btn btn-accent px-5 rounded-2xl mx-4"
                                        href={`tasks/${d.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <DeleteForm id={d.id} />
                                </div>
                            </li>
                        );
                    }
                    return (
                        <li
                            className="px-4 py-4 mx-4 my-5 border border-base-800 flex items-center justify-between rounded-2xl shadow-lg shadow-base-300"
                            key={d.id}
                        >
                            <div className="flex-grow">{d.content}</div>
                            <div className="flex space-x-2">
                                <Link
                                    className="btn btn-accent px-5 rounded-2xl mx-4"
                                    href={`tasks/${d.id}`}
                                >
                                    Edit
                                </Link>
                                <DeleteForm id={d.id} />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TaskList;
