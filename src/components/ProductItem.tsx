import { FC } from 'react'
import { IProduct } from '../store/models/IProduct'
import { NavLink } from 'react-router-dom'

interface ProductItemProps {
    product: IProduct
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
    return (
        <div>
            
            {product.title}
            <NavLink to={`${product.id}`}>
                <img style={{width: '400px', height: '400px'}} src={product.image} alt="" />
            </NavLink>
        </div>
    )
}