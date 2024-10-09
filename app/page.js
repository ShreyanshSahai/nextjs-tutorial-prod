import Link from "next/link";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-7xl mb-5"> Next JS Turorial </h1>
            <Link href="/client" className="btn btn-accent">
                Get Started
            </Link>
        </div>
    );
};

export default HomePage;
