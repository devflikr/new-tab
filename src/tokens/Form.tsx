import React from 'react'

export type FormProps<T> = React.DOMAttributes<HTMLFormElement> & React.HTMLAttributes<HTMLFormElement> & {
    onUpdate?: (values: T) => void;
    onPost?: (values: T) => void;
}
function Form<T>({ onChange, onUpdate, onSubmit, onPost, ...props }: FormProps<T>) {
    const parseValues = (elements: HTMLFormControlsCollection) => {
        const blocks = [...elements] as HTMLInputElement[];

        const values: { [key: string]: unknown } = {};

        for (const block of blocks) {
            const name = block.getAttribute("name");
            if (name != null) {
                values[name] = block.value || block.files;
            }
        }

        return values;
    }
    return (
        <form
            onChange={(e) => {
                const form = (e.target as HTMLFormElement).form as HTMLFormElement;
                const values = parseValues(form.elements);

                onChange?.(e);
                onUpdate?.(values as T);
            }}
            onSubmit={(e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const values = parseValues(form.elements);

                onSubmit?.(e);
                onPost?.(values as T);
            }}
            {...props}
        />
    )
}

export default Form
