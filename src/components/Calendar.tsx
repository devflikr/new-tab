import { motion } from "framer-motion"
import useCalendar from "../hooks/useCalendar";
import { cn } from "../utils/cn";

function LayerCalendar(): React.JSX.Element {
    const calendar = useCalendar();

    const Weeks = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    return (
        <div className="relative p-5 self-center">
            <motion.div
                initial={{ scale: 0, rotateZ: -90, opacity: 0 }}
                animate={{ scale: 1, rotateZ: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="rounded-[64px] bg-theme-blk absolute inset-0"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
            >
                <div className="text-center text-theme-blg text-sm font-bold">{calendar.month}, {calendar.year}</div>
                <table className="text-xs table-fixed">
                    <thead className="text-theme-blg font-bold">
                        <tr>
                            {Weeks.map(week => <td key={week} className="p-1 text-center">{week}</td>)}
                        </tr>
                    </thead>
                    <tbody className="text-theme-txt">
                        {calendar.weeks.map((week) => <tr key={week.week}>
                            {week.days.map(day => <td className={cn("p-1 text-center", (day.now && "text-theme-clr"))} key={day.key}>{day.day}</td>)}
                        </tr>)}
                    </tbody>
                </table>
            </motion.div>
        </div>
    )
}



export default LayerCalendar
