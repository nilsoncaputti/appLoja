import productsTypes from './produtos.tipos';

export const addProductStart = productData => ({
    type: productsTypes.ADICIONAR_NOVO_PRODUTO_COMECO,
    payload: productData
});

export const fetchProductsStart = () => ({
    type: productsTypes.FETCH_BUSCAR_PRODUTOS_COMECO
});

export const setProducts = products => ({
    type: productsTypes.SET_PRODUTOS,
    payload: products
});

export const deleteProductsStart = productID => ({
    type: productsTypes.DELETAR_PRODUTOS,
    payload: productID
});