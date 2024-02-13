import { useCallback, useEffect, useState } from "react";
import { useAsync } from "react-unique-hooks";

export type StorageSense<T> = [id: number, value: T];

function useStorage<T>(key: string, initialValue: StorageSense<T>): [value: StorageSense<T>, add: (data: T) => void, update: (data: T) => void, loading: boolean] {

    const [data, loading] = useAsync(() => chrome.storage.sync.get(key), [key]);

    const [value, setValue] = useState<StorageSense<T>>(initialValue);

    useEffect(() => {
        const val = data?.[key] as StorageSense<T> | undefined;

        console.log(val);

        val && setValue(val);
    }, [data, key]);

    const updateStorage = (data: T) => {
        chrome.storage.sync.set({ [key]: [value[0], data] as StorageSense<T> });
    }

    const addToStorage = (data: T) => {
        chrome.storage.sync.set({ [key]: [value[0] + 1, data] as StorageSense<T> });
    }

    const changeListener = useCallback((changes: { [key: string]: chrome.storage.StorageChange }) => {
        const dataChanged = changes?.[key];
        dataChanged && setValue(dataChanged.newValue);
    }, [key]);

    useEffect(() => {
        chrome.storage.sync.onChanged.addListener(changeListener);

        return () => {
            chrome.storage.sync.onChanged.removeListener(changeListener);
        }
    }, [changeListener]);

    return [value, addToStorage, updateStorage, loading];
}

export default useStorage
