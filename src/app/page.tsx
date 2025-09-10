import Image from "next/image";
import styles from "./page.module.css";
import "./page.css";
import ProductCard from "@/components/ProductCard";
import Produto from "@/models/Produto";
import produtos from "@/mocks/produtos";
import ProductList from "@/components/ProductList";
import Header from "@/components/Header";
import Menu from "@/components/Menu";


export default function Home() {

    return (
    <>
    <Header/>
    <Menu/>
    <h1>Produtos</h1>
    <ProductList produtos={produtos} />
    </>
    )
}
