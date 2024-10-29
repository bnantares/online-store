import { FC } from 'react'
import { IProduct } from '../store/models/IProduct'
import { NavLink } from 'react-router-dom'

interface ProductItemProps {
    product: IProduct
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
    return (
        <div>
            <img style={{width: '400px', height: '400px'}} src={product.image} alt="" />
            {product.title}
            <NavLink to={`${product.id}`}>
                Смотреть подробнее
            </NavLink>
        </div>
    )
}