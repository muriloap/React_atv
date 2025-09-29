'use client';
import styles from "./page.module.css";
import "./page.css";
import ProductCard from "@/components/ProductCard";
import Produto from "@/models/Produto";
import produtos from "@/mocks/produtos";
import ProductList from "@/components/ProductList";
import Header from "../components/Header";
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import CadastroProduto from "@/components/CadastroProduto";
import Deletar from "@/components/Deletar";

export default function Home() {

    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function sucesso(res: AxiosResponse) {
        setProdutos(res.data);
    }

    function falha() {
        alert("FALHOU");
    }

    function todoCaso() {
        setIsLoading(false);
    }

    function loadProdutos() {
        setIsLoading(true);
        axios.get("https://produtos-server.onrender.com/api/produtos")
        .then(sucesso)
        .catch(falha)
        .finally(todoCaso)     
    }

    useEffect(loadProdutos, []);

    return (
    <>
    <h1>Produtos</h1>
    {(isLoading) && <Loading />}
    <ProductList produtos={produtos} />
    <CadastroProduto onEnviando={() => {}} onEnviadoSucesso={() => {}} onEnviadoFalha={ () => {}}/>
        <Deletar onEnviando={() => {}} onEnviadoSucesso={() => {}} onEnviadoFalha={ () => {}}/>
    </>
    )
}