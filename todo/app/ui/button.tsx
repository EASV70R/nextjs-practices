"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

interface ButtonProps {
    type: "button" | "submit" | "reset";
    text: string | ReactNode;
    onClick?: () => void;
    actionButton?: boolean;
}

export default function Button({type, text, onClick, actionButton} : ButtonProps) {
    return (
        <>
            <button onClick={onClick}
            type={type}
            className={clsx(actionButton && "bg-red-500 rounded-full p-2 text-white", "bg-red-500 px-2 text-white")}>
                {text}
            </button>
        </>
    );
}