'use client';
import { ChangeEvent, useState } from 'react';
import styles from './styles.module.css'

type Props = {
    label: string;
    type: "text" | "email";
    multiline?: boolean;
    onChange?(): void;
}

export default function Textfield(props: Props) {

    const [texto, setTexto] = useState("");
    
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setTexto(e.target.value)
    }

    return (
        <div className={styles.root}>
        <label>
        {props.label}: 
        {(props.multiline) ? (
            <textarea/>
        ) : (
            <input onChange={handleChange} type={props.type} placeholder={props.label} />
        )}
        {texto}
        </label>
        </div>
    );
}