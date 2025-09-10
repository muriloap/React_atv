import Image from "next/image";
import styles from "./page.module.css";
import "./page.css";
import ProductCard from "@/components/ProductCard";
import Produto from "@/models/Produto";
import produtos from "@/mocks/produtos";
import ProductList from "@/components/ProductList";
import Header from "@/components/Header";


export default function Home() {

    return (
    <>
    <Header/>
    <h1>Produtos</h1>
    <ProductList produtos={produtos} />
    </>
    )
}
