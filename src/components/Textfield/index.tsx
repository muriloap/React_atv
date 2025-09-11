import styles from './styles.module.css'

type Props = {
    label: string;
    type: "text" | "email";
    multiline?: boolean;
}

export default function Textfield(props: Props) {
    return (
        <>
        <label>
        {props.label}: 
        {(props.multiline) ? (
            <textarea/>
        ) : (
            <input type={props.type} placeholder='Nome' />
        )}
        </label>
        </>
    );
}