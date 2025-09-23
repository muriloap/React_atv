import Textfield from '../Textfield';
import styles from './styles.module.css'

type Props = {
    label: string;
    type: "text" | "number";
    multiline?: boolean;
    onChange?(texto: string): void;
    text?: string;
}

export default function CadastroProduto() {
    return (
        <form action="">
            <Textfield label='Produto que deseja cadastrar:' type={'text'} />
            <Textfield label='Imagem do Produto' type={'file'} />
            <Textfield label='Valor do Produto' type={'text'} />
        </form>
    );
}