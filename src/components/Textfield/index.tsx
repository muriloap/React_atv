import styles from './styles.module.css'
import { ChangeEvent, useState } from 'react';

type Props = {
    label: string;
    type: "text" | "email" | "file";
    multiline?: boolean;
    onChange?(texto: string): void;
    text?: string;
}

export default function Textfield(props: Props) {

    const [texto, setTexto] = useState(props.text);
    
    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value)
        if (props.onChange){
        props.onChange(e.target.value);
        }
    }

    function handleTextAreaChange(e: ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value)
        if (props.onChange){
        props.onChange(e.target.value);
        }
    }

    return (
        <div className={styles.root}>
        <label>
        {props.label}: 
        {(props.multiline) ? (
            <textarea className={styles.textarea}/>
        ) : (
            <input 
            className={styles.input}
            onChange={handleInputChange} 
            type={props.type} 
            placeholder={props.label}
            value={texto}/>
        )}
        </label>
        </div>
    );
}