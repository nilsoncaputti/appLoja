import React, { useEffect } from 'react';
import './styles.scss';
import Product from './Produto';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../Redux/Produtos/produtos.acao';

const mapState = ({ productsData }) => ({
    products: productsData.products
});

const ProductsResultados = ({ }) => {
    const dispatch = useDispatch();
    const { products } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        )
    }, []);

    if (!Array.isArray(products)) return null;
    if (products.length < 1) {
        return (
            <div className="SearchPage">
                <p>
                    PRODUTO NÃO ENCONTRADO!!!
                </p>
            </div>
        );
    }

    return (
        <div className="produtos">
            <h1>
                PÁGINA PESQUISAR PRODUTOS
            </h1>
            { products.map((products, pos) => {
                const { productThumbnail, productName, productPrice } = products;

                if (!productThumbnail || !productName || typeof productPrice === 'indefinido') return null;

                const configProduct = {
                    productThumbnail,
                    productName,
                    productPrice
                };

                return (

                    <Product{...configProduct} />

                );
            })}
        </div>
    );
};

export default ProductsResultados;