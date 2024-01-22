import { useState } from "react";
import useInterval from "../hooks/useInterval"
import moment from "moment";

function DateTimeWeather() {

    const [timeRef, setTimeRef] = useState(moment());

    useInterval(() => {
        setTimeRef(moment());
    }, 1000);

    return (
        <div className="flex flex-col">
            <div className="flex items-center font-medium">
                <span className="text-7xl -mr-3">
                    <span>{timeRef.format("hh")}</span>
                    <span className="animate-pulse duration-1000">:</span>
                    <span>{timeRef.format("mm")}</span>
                </span>
                <span className="-rotate-90 text-theme-txt text-4xl">{timeRef.format("A")}</span>
            </div>
            <div className="text-theme-txt font-semibold">{timeRef.format("dddd • MMMM DD, YYYY")}</div>
        </div>
    )
}

export default DateTimeWeather
