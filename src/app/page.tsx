'use client';
import styles from "./page.module.css";
import "./page.css";
import ProductCard from "@/components/ProductCard";
import Produto from "@/models/Produto";
import produtos from "@/mocks/produtos";
import ProductList from "@/components/ProductList";
import Header from "../components/Header";
import axios, { AxiosResponse } from 'axios';

export default function Home() {

    function sucesso(response: AxiosResponse) {
        alert(response.data[0].nome);
    }

    function falha() {
        alert();
    }

    axios.get("http://10.60.46.55:4000/api/produtos")
    .then(sucesso)
    .catch(falha)
    .finally()


    return (
    <>
    <h1>Produtos</h1>
    <ProductList produtos={produtos} />
    </>
    )
}