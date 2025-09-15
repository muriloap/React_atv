'use client';
import Textfield from '@/components/Textfield'
import styles from './styles.module.css'


export default function Contato() {

    let nome = "";
    let email = "";
    let assunto = "";


    function botaoOnClick() {
        alert(`Nome: ${nome}, Email: ${email}, Assunto ${assunto}`)
        
    }
        function handleNomeChange(texto: string) {
            nome = texto
        }
        function handleEmailChange(texto: string) {
            email = texto
        }
        function handleAssuntoChange(texto: string) {
            assunto = texto
        }

    return (
        <>
        <div className={styles.div}>
            <h1 className={styles.h1}>CONTATO</h1>
            <form action="">
               <Textfield label='Nome' type='text' onChange={handleNomeChange}/>
               <Textfield label='E-mail' type='email' onChange={handleEmailChange}/>
               <Textfield label='Assunto' text="Mensagem do site" type='text' onChange={handleAssuntoChange}/>
               <Textfield label='Mensagem' type='text' multiline />
                <button onClick={botaoOnClick} className={styles.button}>Enviar</button>
            </form>
        </div>
        </>
    )
}