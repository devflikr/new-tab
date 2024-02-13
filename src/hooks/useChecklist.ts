import React, { useState } from 'react'
import useStorage from './useStorage';
import { sync_check_list } from '../config';

function useChecklist(): CheckList {

    const [mode, setMode] = useState(false);

    const [[lastId, list], add, update] = useStorage<CheckListTaskStorage[]>(sync_check_list, [0, []]);

    const pushWithId = (task: CheckListTask) => {
        add([...list, [lastId, task.task, task.status ? 1 : 0]]);
    }

    const toggleTask = (id: number) => {
        update(list.map(task => {
            if (task[0] === id) task[2] = !task[2] ? 1 : 0;

            return task;
        }));
    }

    console.log([lastId, list]);

    return {
        isCompleted: mode,
        showCompleted: setMode,
        pushTask: pushWithId,
        toggleTask: toggleTask,
        list: {
            active: list.filter(t => !t[2]).map(([id, task]) => ({ id, task, status: false })),
            checked: list.filter(t => t[2]).map(([id, task]) => ({ id, task, status: true })),
        },
    };
}

export default useChecklist


export type CheckList = {
    isCompleted: boolean;
    showCompleted: React.Dispatch<React.SetStateAction<boolean>>;
    list: {
        active: CheckListTask[];
        checked: CheckListTask[];
    },
    toggleTask: (id: number) => void;
    pushTask: (task: CheckListTask) => void;
}

export type CheckListTask = {
    id: number;
    task: string;
    status: boolean;
}

export type CheckListTaskStorage = [id: number, task: string, status: 0 | 1];

export type CheckListPassable = {
    list: CheckListTask[];
    toggleTask: (id: number) => void;
}