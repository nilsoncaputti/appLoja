import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './../../componentes/Modal';
import FormularioInput from './../../componentes/Formularios/FormularioInput';
import FormSelect from './../../componentes/Formularios/FormSelect';
import Botao from './../../componentes/Formularios/Botao';
import { addProductStart, fetchProductsStart, deleteProductsStart } from './../../Redux/Produtos/produtos.acao';

const mapState = ({ productsData }) => ({
    products: productsData.products
});

const Admin = props => {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const [hideModal, setHideModal] = useState(true);
    const [productCategory, setProductCategory] = useState('mens');
    const [productName, setProductName] = useState('');
    const [productThumbnail, setProductThumbnail] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productDesc, setProductDesc] = useState('');

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        );
    }, []);

    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    };

    const resetarFormulario = () => {
        setHideModal(true);
        setProductCategory('mens');
        setProductName('');
        setProductThumbnail('');
        setProductPrice(0);
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(
            addProductStart({
                productCategory,
                productName,
                productThumbnail,
                productPrice
            })
        );

        resetarFormulario();
    };

    return (
        <div className="admin">
            <div className="callToActions">
                <ul>
                    <li>
                        <Botao onClick={() => toggleModal()}>
                            + Produtos
                        </Botao>
                    </li>
                </ul>
            </div>

            <Modal {...configModal}>
                <div className="addNewProductForm">
                    <form onSubmit={handleSubmit}>
                        <h2>
                            Adicionar Um Novo Produto
                        </h2>

                        <FormSelect
                            label="Categoria :"
                            options={[{
                                value: "Masculino",
                                name: "Masculino"
                            }, {
                                value: "Feminino",
                                name: "Feminino"
                            }]}
                            handleChange={e => setProductCategory(e.target.value)}
                        />

                        <FormularioInput
                            label="Nome :"
                            type="text"
                            value={productName}
                            handleChange={e => setProductName(e.target.value)}
                        />

                        <FormularioInput
                            label="URL Da Img :"
                            type="url"
                            value={productThumbnail}
                            handleChange={e => setProductThumbnail(e.target.value)}
                        />

                        <FormularioInput
                            label="Preco :"
                            type="number"
                            min="0.00"
                            max="10000.00"
                            step="0.01"
                            value={productPrice}
                            handleChange={e => setProductPrice(e.target.value)}
                        />

                        <br />

                        <Botao type="submit">
                            Salvar Produto
                        </Botao>

                    </form>
                </div>
            </Modal>

            <div className="manageProducts">
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th className="cad">
                                Cadastramento dos produtos
                            </th>
                        </tr>

                        <tr>
                            <td>
                                <table border="0" cellPadding="10" cellSpacing="0">
                                    <tbody>
                                        {products.map((product, index) => {
                                            const {
                                                productName,
                                                productThumbnail,
                                                productPrice,
                                                documentID
                                            } = product;
                                            return (
                                                <tr>
                                                    <td>
                                                        <img src={productThumbnail} />
                                                    </td>

                                                    <td>
                                                        {productName}
                                                    </td>

                                                    <td>
                                                        R$ {productPrice}
                                                    </td>

                                                    <td>
                                                        <Botao onClick={ () => dispatch(deleteProductsStart(documentID) ) }>
                                                            Deletar
                                                        </Botao>
                                                    </td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;