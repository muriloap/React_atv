import Textfield from '@/components/Textfield'
import styles from './styles.module.css'


export default function Contato() {
    return (
        <>
            <h1>Contato</h1>
            <form action="">
               <Textfield label='Nome' type='text'/>
               <Textfield label='E-mail' type='email'/>
               <Textfield label='Assunto' type='text'/>
               <Textfield label='Mensagem' type='text' multiline />
                <button>Enivar</button>
            </form>
        </>
    )
}