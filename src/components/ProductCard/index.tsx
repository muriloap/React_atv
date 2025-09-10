import styles from "./styles.module.css";

type Props = {
    nome: string;
    foto: string;
    preco: number;
}

export default function ProductCard(props: Props){

    const preco = 100;
    const foto = "/images/mouse.jpg"
    return(
        <li className="produto">
            <span className="nome">{props.nome}</span>
            <img src={props.foto} alt={props.nome} style={{width: "256px", height: "auto"}} /> 
            <span className="preco">R$ {props.preco}</span>
        </li>
    );
}