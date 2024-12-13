import { FC } from 'react'
import { IProduct } from '../store/models/IProduct'
import { NavLink } from 'react-router-dom'
import { Grid, Card, Image, Text } from '@mantine/core'

interface ProductItemProps {
    product: IProduct
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
    return (
        <Grid.Col span={3} style={{ maxWidth: 350, minHeight: 450, maxHeight: 550 }}>
            <NavLink to={`${product.id}`} style={{ textDecoration: 'none' }}>
            <Card
            >
                <Card.Section>
                    <Image
                        src={product.image}
                        h={260}
                        alt='No image'
                    />
                </Card.Section>
                <Text fw={500} size='lg' mt='md'>
                    {product.title}
                </Text>
                <Text mt='xs' c='dimmed' size='sm' truncate="end" lineClamp={3}>
                    {product.description}
                </Text>
            </Card>
            </NavLink>
        </Grid.Col>
    )
}