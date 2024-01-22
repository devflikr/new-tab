export type FormContext<T> = {
    values: T;
    updateValue: (key: string, value: keyof T) => void;
}

export type FormContextArgument<T> = T | ((value: T) => T);