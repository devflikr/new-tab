import React, { useEffect } from "react";
import usePopup from "./usePopup";
import { cn } from "../../utils/cn";
import { X } from "lucide-react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";


export type PopupProps = React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div"> & {
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

    return (
        <AnimatePresence>
            {id && popups[id] && <motion.section
                className="fixed bg-black/60 inset-0 flex justify-center items-center overflow-hidden p-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                <span className="absolute inset-0" onClick={() => closePopup(id)} />
                <motion.div
                    initial={{ scale: 0.6 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        "bg-theme-bg w-80 max-w-full rounded-lg shadow-lg shadow-black/30 overflow-auto relative z-10",
                        className
                    )} {...props}>
                    <header className="p-3 flex flex-row-reverse justify-between items-center">
                        <div className="round-button hover:text-red-500" onClick={() => closePopup(id)}><X /></div>
                        <span className="text-lg font-medium">{title}</span>
                    </header>
                    <div className="p-3">{children}</div>
                </motion.div>
            </motion.section>}
        </AnimatePresence>
    );
}

export default Popup;