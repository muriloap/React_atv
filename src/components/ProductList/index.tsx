import styles from './styles.module.css'
import Produto from "@/models/Produto";
import ProductCard from "../ProductCard";

type Props = {
    produtos: Produto[]
}

    function mapear(produto: Produto) {
        return (
            <ProductCard 
            key={produto.id}
            nome={produto.nome}
            foto={produto.foto}
            preco={produto.preco}/>
        )
    }

export default function ProductList(props: Props) {

    return (
    <ul className="produtos">

        {props.produtos.map(mapear)}

    </ul>
  );
}