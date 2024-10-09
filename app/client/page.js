"use client";
import React, { useState } from "react";

const ClientPage = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 className="text-7xl mb-6 font-bold">{count}</h1>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>
            <button
                className="btn btn-primary mx-6"
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
};

export default ClientPage;
