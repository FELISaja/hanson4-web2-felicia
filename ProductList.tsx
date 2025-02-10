import React from 'react'
import Product from './Product'

const ProductList: React.FC = () => {
    const product: Product[] = [
        {
            name: 'Laptop',
            description: 'High-performance laptop for  work and play',
            price: '$999',
            imageUrl: 'https://www.google.com/imgres?q=unsplash%20laptop&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1496181133206-80ce9b88a853%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flaptop&docid=7PT6bk_SGNxAlM&tbnid=pl1CnQ4omcByKM&vet=12ahUKEwj4jZzngLiLAxWY1jgGHTnuF6QQM3oECB0QAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwj4jZzngLiLAxWY1jgGHTnuF6QQM3oECB0QAA',

        
        }
    ]
    return (
        <div>ProductList</div>
    )
}

const ProductList: React.FC = () => {
    const product: Product[] = [
        {
            name: '',
            description: '',
            price: '$999',
            imageUrl: '',
        }
    ]
    return (
        <div>ProductList</div>
    )
}

const ProductList: React.FC = () => {
    const product: Product[] = [
        {
            name: 'Tablet',
            description: 'a central processing unit, memory, display, and back and front cameras',
            price: '$89',
            imageUrl: 'https://unsplash.com/photos/black-ipad-hLgYtX0rPgw',
        }
    ]
    return (
        <div>ProductList</div>
    )
}

const ProductList: React.FC = () => {
    const product: Product[] = [
        {
            name: 'Keyboard',
            description: 'ergonomic mechanical keyboard, featuring ultra-responsive key switches, customizable RGB lighting, and a sleek design perfect for both work and gaming',
            price: '$30',
            imageUrl: 'https://unsplash.com/photos/silver-and-white-computer-keyboard-PXaQXThG1FY',
        }
    ]
    return (
        <div>ProductList</div>
    )
}

const ProductList: React.FC = () => {
    const product: Product[] = [
        {
            name: 'lipstick',
            description: 'luxurious, long-lasting lipstick, boasting a vibrant array of shades designed to flatter every skin tone.',
            price: '$12',
            imageUrl: 'https://unsplash.com/photos/five-assorted-color-lipsticks-mzstXkKH8DI',
        }
    ]
    return(
        // <> == fragments
        <>
            <h1>Product List</h1>
            {
                products.map((product, index) =>{
                    // ... == spread syntax
                    return <Product key={index} {...product}/>
                    // gini juga bisa
                    // return <Product key={index} name={product.name} price={product.price} description={product.description} imageUrl={product.imageUrl}  />
                }) 
            }
        </>
    )
}
export default ProductList;