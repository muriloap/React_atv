'use client'
import axios, { AxiosError, AxiosResponse } from "axios";
import Textfield from "../Textfield";
import styles from './styles.module.css'
import { useState } from "react";
import Produto from "@/models/Produto";

type Props = {
    onEnviando(): void;
    onEnviadoSucesso(): void;
    onEnviadoFalha(): void;
}

export default function Deletar(props:Props){
    const [nome, setNome] = useState('');
    const [fotoUrl, setFotoUrl] = useState('');
    const [preco, setPreco] = useState('');

    function sucesso(_res: AxiosResponse) {
        props.onEnviadoSucesso();
    }
    function falha(_error: AxiosError) {}

    function Del() {
            props.onEnviando();
            const produto: Produto = {
                nome, fotoUrl, preco: Number(preco),
                id: 0
            };
            const config = {
                headers: { 'Content-Type': 'application/json' },
                data: produto 
              };
            axios.delete( "https://produtos-server.onrender.com/api/produtos", config)
            .then(sucesso)
            .catch(falha)
    
            alert("Deletado com Sucesso")
    }
    
    return(
        <form className={styles.form}>
            <Textfield label="Nome" type="text" onChange={setNome}/>
            <Textfield label="FotoUrl" type="text" onChange={setFotoUrl}/>
            <Textfield label="Preço" type="text" onChange={setPreco}/>
            <button className={styles.button} type="button" onClick={Del}>Deletar</button>
        </form>
    
    )
}