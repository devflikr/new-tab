import React from 'react'

function Form({ ...props }: React.DOMAttributes<HTMLFormElement>) {

    return (
        <form onChange={(e) => {
            const form = (e.target as HTMLFormElement).form as HTMLFormElement;
            const blocks = [...form.elements] as HTMLInputElement[];

            const values: { [key: string]: unknown } = {};

            for (const block of blocks) {
                const name = block.getAttribute("name");
                if (name != null) {
                    values[name] = block.value || block.files;
                }
            }

            console.log(values);
        }} {...props}>

        </form>
    )
}

export default Form
