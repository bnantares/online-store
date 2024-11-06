import { FC } from 'react'
import { IProduct } from '../store/models/IProduct'
import { NavLink } from 'react-router-dom'

interface ProductItemProps {
    product: IProduct
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
    return (
        <div>
            <div>{product.title}</div>
            <NavLink to={`${product.id}`}>
                <img style={{width: '300px', height: '300px'}} src={product.image} alt="" />
            </NavLink>
        </div>
    )
}