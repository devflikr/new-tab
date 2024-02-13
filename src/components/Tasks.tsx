import { motion } from "framer-motion"
import useChecklist, { CheckListPassable } from "../hooks/useChecklist"
import { cn } from "../utils/cn";

function LayerTasks() {
    const { showCompleted, isCompleted, list: { active: activeList, checked: checkedList }, pushTask, toggleTask } = useChecklist();
    return (
        <div className="flex-1 relative z-10 items-end w-60">
            <motion.div
                style={{ transformOrigin: "left bottom" }}
                initial={{ rotateY: -90, rotateZ: -15, height: 0, opacity: 0.5 }}
                animate={{ rotateY: 0, rotateZ: 0, height: "100%", opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full bg-theme-blk rounded-[32px] overflow-hidden flex py-5 flex-col gap-5"
            >
                <div className="flex items-center text-sm text-theme-blg font-bold">
                    <span className={cn("flex-1 text-center px-3 cursor-pointer py-1 hover:text-theme-ple transition-all", !isCompleted && "text-theme-ple")} onClick={() => showCompleted(false)}>Checklist</span>
                    <span className="border-l-2 border-dashed border-l-theme-cvr inline-flex h-full"></span>
                    <span className={cn("flex-1 text-center px-3 cursor-pointer py-1 hover:text-theme-ple transition-all", isCompleted && "text-theme-ple")} onClick={() => showCompleted(true)}>Completed</span>
                </div>
                <motion.div
                    animate={{
                        translateX: (isCompleted ? "-50%" : 0),
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 overflow-hidden flex flex-row flex-nowrap w-[200%]"
                >
                    <Card list={activeList} toggleTask={toggleTask} />
                    <Card list={checkedList} toggleTask={toggleTask} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default LayerTasks

function Card({ list, toggleTask }: CheckListPassable) {
    return (
        <div className="flex-1 relative">
            <motion.div
                initial={{ overflow: "hidden" }}
                animate={{ overflow: "auto" }}
                transition={{ delay: 1 }}
                className="absolute inset-0 overflow-auto no-scrollbar space-y-1 px-5"
            >
                {list.map(task => <div
                    key={task.id}
                    className={cn(
                        "bg-theme-slt p-1 rounded first-of-type:rounded-t-xl last-of-type:rounded-b-xl cursor-pointer hover:bg-theme-hvr transition-all",
                        task.status && "line-through",
                    )}
                    onClick={() => toggleTask(task.id)}
                >
                    {task.task}
                </div>)}
            </motion.div>
        </div>
    );
}
