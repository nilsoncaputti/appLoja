import React from 'react';
import Botao from './../../Formularios/Botao';
/*import './../styles.scss';*/

const Product = ({
    productThumbnail,
    productName,
    productPrice
}) => {
    if (!productThumbnail || !productName || typeof productPrice === 'indefinido') return null;

    const configAddCarbtn = {
        type: 'button'
    }

    return (
        <div className="product">
            <div className="thumb">
                <img src={productThumbnail} alt={productName} />
            </div>

            <div className="details">
                <ul>
                    <li>
                        <span className="name">
                            {productName}
                        </span>
                    </li>

                    <li>
                        <span className="price">
                            R$ {productPrice}
                        </span>
                    </li>

                    <li>
                        <div className="botaoAdd">
                            <Botao {...configAddCarbtn}>
                                Adicionar ao Carrinho
                            </Botao>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Product;