import { motion } from "framer-motion"
import useInterval from "../hooks/useInterval";
import React, { useState } from "react";
import moment from "moment";

function LayerDateTime(): React.JSX.Element {
    const [timeRef, setTimeRef] = useState(moment());

    useInterval(() => {
        setTimeRef(moment());
    }, 1000);

    return (
        <motion.div
            initial={{ scale: 1.25, translateX: 100, opacity: 0 }}
            animate={{ scale: 1, translateX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="self-start flex flex-nowrap items-center gap-2 my-5 p-1 pr-5 rounded-l-[48px] rounded-r-xl overflow-hidden bg-black/30"
        >
            <div className="w-16 h-16 relative rounded-full bg-theme-cvr">
                <span className="clock-hand __h" style={{ "--r": timeRef.hours() * 30 } as React.CSSProperties} />
                <span className="clock-hand __m" style={{ "--r": timeRef.minutes() * 6 } as React.CSSProperties} />
                <span className="clock-hand __s" style={{ "--r": timeRef.seconds() * 6 } as React.CSSProperties} />
                <span className="clock-hand__d" />
            </div>
            <div className="flex flex-col ">
                <div className="flex font-medium gap-2 items-end">
                    <span className="text-4xl font-sono">
                        <span>{timeRef.format("hh")}</span>
                        <span className="animate-pulse duration-1000">:</span>
                        <span>{timeRef.format("mm")}</span>
                    </span>
                    <span className="text-theme-hlg text-2xl">{timeRef.format("A")}</span>
                </div>
                <div className="text-theme-blg text-sm font-bold">{timeRef.format("MMM D • dddd")}</div>
            </div>
        </motion.div>
    )
}

export default LayerDateTime
