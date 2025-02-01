import React from "react";
import menuItems from "../utils/NavbarLinks";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ children }) => {

    const location = useLocation();

    return (
        <div className="flex">
            <div className="min-w-62 h-screen bg-white shadow-lg p-4 flex flex-col justify-between">
                <div className="space-y-3">
                    {menuItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <Link
                                key={item.name} to={item.url}
                                className={`flex items-center gap-3 px-4 py-2 rounded-full w-full text-left font-medium transition
                                ${location.pathname === item.url ? "bg-gray-200 shadow-md" : "hover:bg-gray-100"}`}
                            >
                                <span className={`${location.pathname === item.url ? item.color : "text-gray-600"}`}>
                                    <IconComponent className="w-5 h-5" />
                                </span>
                                <span className={`${location.pathname === item.url ? "text-blue-500" : "text-black"}`}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>

            </div>
            <div className="h-screen w-2.5 bg-gray-300" />

            <div className="flex flex-col" >
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
