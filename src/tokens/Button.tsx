import React from 'react'
import { cn } from '../utils/cn'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.HTMLAttributes<HTMLButtonElement>;

function Button({ className, ...props }: ButtonProps) {
    return (
        <button className={cn(
            "px-4 py-1 transition-all flex all-center cursor-pointer text-xl rounded",
            {
                "[&:not(:disabled)]:hover:bg-blue-900 border border-blue-700 bg-blue-700 text-white": props.type === "submit",
            },
            (props.disabled && "opacity-50 cursor-default hover:bg"),
            className
            )} {...props} />
    )
}

export default Button
