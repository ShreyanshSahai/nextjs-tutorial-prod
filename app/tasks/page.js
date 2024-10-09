import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import React from "react";

const TasksPage = () => {
    return (
        <div className="">
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default TasksPage;
