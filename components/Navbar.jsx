import React from "react";
import Link from "next/link";

const links = [
    { href: "/about", displayName: "About" },
    { href: "/client", displayName: "Client" },
    { href: "/drinks", displayName: "Drinks" },
    { href: "/prisma-example", displayName: "Prisma Example" },
    { href: "/tasks", displayName: "Tasks" },
];

const Navbar = () => {
    return (
        <div className="bg-base-300 py-4">
            <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
                <Link href="/" className="btn btn-primary">
                    Next JS
                </Link>
                <ul className="menu menu-horizontal md:ml-8">
                    {links.map((link) => {
                        return (
                            <li key={link.href}>
                                <Link
                                    className="capitalize mx-2"
                                    href={link.href}
                                >
                                    {link.displayName}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
