import {ComboProducts, Product, ProductType} from 'constants/dataBase/interfces'
// @ts-ignore
import styles from './ProductCard.module.scss'

export interface IProductCardTypeProps {
    productType: string
    setIsModalOpen: Function
}

// export interface IComboProductCardProps extends IProductCardTypeProps{
// 	product:ComboProducts
// }

export interface IProductCardProps extends IProductCardTypeProps {
    product: Product | ComboProducts
}

export const ProductCard: React.FC<IProductCardProps> = ({
                                                             productType,
                                                             setIsModalOpen,
                                                             product
                                                         }: IProductCardProps) => {
    // if(productType==='combo' && product.realPrice)console.log(typeof product.realPrice)
    return (
        <div
            className={styles.card}
            onClick={() => {
                setIsModalOpen(true)
            }}
        >
            <div className={styles.card_body}>
                <img
                    src={product.img}
                    alt={product.title}
                    className={styles.card_img}
                    width='221'
                />
                <h3 className={styles.card_title}>{product.title}</h3>
                <p className={styles.card_text}>
                    {product.description}
                </p>
            </div>
            <div className={styles.card_footer}>
                {productType === 'combo' && product.realPrice
                    ?
                    <p className={styles.card_price}>
                        <span>от {`${product.price / 1000} 000`} сум</span><br/>
                        <span>от {`${product.realPrice / 1000} 000`} сум</span>
                    </p>
                    :
                    <p className={styles.card_price}>от {`${product.price / 1000} 000`} сум</p>
                }
                <div className={styles.card_button_wrapper}>
                    <button className={styles.card_button} type='button'>
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    )
}
