import { CheckCheck, Plus, Square } from "lucide-react"
import Form from "../tokens/Form"
import useToDoTasks from "../hooks/useToDoTasks"
import { ToDoTask } from "../types/tasks";
import { cn } from "../utils/cn";

function ToDoTasks() {
    const [tasks, addTask, toggleTask] = useToDoTasks();
    return (
        <div className="p-3 w-80">
            <Form<ToDoTask> onSubmit={(e) => (e.target as HTMLFormElement).reset()} onPost={({ task }) => addTask({ task, done: false, id: -99 })}>
                <div className="flex items-center relative">
                    <input type="text" name="task" id="add-task" required placeholder="Add new task..." className="bg-transparent p-1 rounded-none outline-none focus:outline-none border-b-2 border-b-theme-hvr pr-16" />
                    <button type="submit" className="button border-none border-b-2 border-b-theme-hvr absolute right-0 top-1/2 -translate-y-1/2"><Plus /></button>
                </div>
            </Form>
            <ul className="space-y-1 py-2">
                {tasks.filter(task => !task.done).map((task) => <TaskBar key={task.id} toggle={toggleTask} {...task} />)}
                {tasks.filter(task => task.done).map((task) => <TaskBar key={task.id} toggle={toggleTask} {...task} />)}
            </ul>
        </div>
    )
}

export default ToDoTasks

export type TaskBarProps = ToDoTask & {
    toggle: (id: number) => void;
}

function TaskBar({ id, task, done, toggle }: TaskBarProps) {
    return (
        <li className={cn("transition-all bg-theme-bg/50 backdrop-blur hover:bg-theme-hvr/50 p-1 flex items-center gap-2 rounded first-of-type:rounded-t-xl last-of-type:rounded-b-xl cursor-pointer select-none group text-orange-500", (done && "line-through"))} onClick={() => toggle(id)}>
            <span className="w-5 group-hover:text-orange-600 text-white">{done ? <CheckCheck /> : <Square />}</span>
            <span className="flex-1 text-white">{task}</span>
        </li>
    );
}