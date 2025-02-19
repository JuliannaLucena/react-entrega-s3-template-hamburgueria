import style from "./style.module.scss"

export const ProductCard = ({ product }) => {
    return(
        <li className={style.li}>
            <img src={product.img} alt={product.name} />
            <div className={style.itensLi}>
                <h3 className="title1">{product.name}</h3>
                <span className="paragraphy1">{product.category}</span>
                <span className="title2">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="btn">Adicionar</button>
            </div>
        </li>
    )
}