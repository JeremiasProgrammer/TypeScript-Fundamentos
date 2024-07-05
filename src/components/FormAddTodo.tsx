import { ChangeEvent, useState } from "react";

interface Props {
    addTodo: (text: string) => void;
}

const FormAddTodo = ({ addTodo }: Props) => {
    const [text, setText] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedText = text.trim();
        if (!trimmedText) return;
        addTodo(trimmedText);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">
                Todo
                <input
                    type="text"
                    id="todo"
                    placeholder="Ingrese Todo"
                    value={text}
                    onChange={handleChange}
                />
                <button type="submit">Add Todo</button>
            </label>
        </form>
    );
};
export default FormAddTodo;
