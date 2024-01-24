import { sync_to_do_tasks } from '../config';
import { ToDoTask } from '../types/tasks';
import useStorage from './useStorage';

function useToDoTasks(): [tasks: ToDoTask[], push: (element: ToDoTask) => void, toggleTask: (id: number) => void] {

    const [[lastId, tasks], update] = useStorage<ToDoTask[]>(sync_to_do_tasks, [0, []]);

    const pushWithId = (task: ToDoTask) => {
        update([...tasks, { ...task, id: lastId }]);
    }

    const toggleTask = (id: number) => {
        update(tasks.map(task => {
            if (task.id === id) task.done = !task.done;

            return task;
        }));
    }

    return [tasks, pushWithId, toggleTask];
}

export default useToDoTasks;
