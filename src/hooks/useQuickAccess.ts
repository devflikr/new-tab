import useStorage from './useStorage';
import { sync_quick_access } from '../config';

function useQuickAccess(): QuickAccess {

    const [[lastId, list], add] = useStorage<QuickAccessLinkStorage[]>(sync_quick_access, [0, []]);

    const pushWithId = (task: QuickAccessLink) => {
        add([...list, [lastId, task.name, task.link]]);
    }

    return {
        pushLink: pushWithId,
        list: list.map(([id, name, link]) => ({ id, name, link })),
    };
}

export default useQuickAccess


export type QuickAccess = {
    list: QuickAccessLink[],
    pushLink: (task: QuickAccessLink) => void;
}

export type QuickAccessLink = {
    id: number;
    name: string;
    link: string;
}

export type QuickAccessLinkStorage = [id: number, name: string, link: string];

export type QuickAccessPassable = {
    list: QuickAccessLink[];
    toggleTask: (id: number) => void;
}