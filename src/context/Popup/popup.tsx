import React, { useEffect } from "react";
import usePopup from "./usePopup";
import { cn } from "../../utils/cn";
import { X } from "lucide-react";


export type PopupProps = React.HTMLAttributes<HTMLDivElement> & {
    title: React.ReactNode;
    id: string;
    open?: boolean;
}

function Popup({ title, id, open, children, className, ...props }: PopupProps): React.ReactNode {

    const { closePopup, popups, togglePopup } = usePopup();

    useEffect(() => {
        if (id) togglePopup(id, !!open);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, open]);

    if (!id || !popups[id]) return null;

    return (
        <section className="fixed bg-black/50 inset-0 flex justify-center items-center overflow-hidden p-5">
            <div className={cn(
                "bg-theme-bg w-80 max-w-full rounded-lg shadow-lg shadow-black overflow-auto",
                className
            )} {...props}>
                <header className="p-3 flex flex-row-reverse justify-between items-center">
                    <div className="button hover:text-red-500 rounded-full" onClick={() => closePopup(id)}><X /></div>
                    <span className="text-lg font-medium">{title}</span>
                </header>
                <div className="p-3">{children}</div>
            </div>
        </section>
    );
}

export default Popup;