import { Switch, Route, useRouteMatch , Redirect } from 'react-router-dom';
import React, { useEffect } from 'react';
import Paginahome from './paginas/Paginahome';
import './default.scss';
import Registrar from './paginas/Registrar';
import LayoutPrincipal from './layouts/LayoutPrincipal';
import LayoutPaginaHome from './layouts/LayoutPaginaHome';
import Recoperar from './paginas/Recoperar';
import { checarUsuarioSessao } from './Redux/Usuario/usuario.acao';
import {useDispatch } from 'react-redux';
import Painel from './paginas/Painel';
import ComAuth from './hocomp/comAuth';
import Login from './paginas/Login';
import Admin from './paginas/Admin';
import AdminComAuth from './hocomp/AdminComAuth';
import AdminToobar from './componentes/AdminitradorToobar';
import Search from './paginas/Pesquisar';
import AdminLayout from './layouts/AdminLayout';
import DashBoardLayout from './layouts/DashboardLayout';

const  App = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checarUsuarioSessao());

    }, []);

    return (
        <div className="App">

            <AdminToobar/>

            <Switch>
                    <Route exact path="/" 
                        render={()=>(
                            <LayoutPaginaHome>
                                <Paginahome />
                            </LayoutPaginaHome>
                        )}
                    />
        
                    <Route path="/pesquisar" 
                        render={() =>(
                            <LayoutPrincipal>
                                <Search/>
                            </LayoutPrincipal>
                        )}
                    />

                    <Route path="/registrar" 
                        render={() =>(
                            <LayoutPrincipal>
                                <Registrar />
                            </LayoutPrincipal>
                        )}
                    />
        
                    <Route path="/login"
                        render={() =>(
                            <LayoutPrincipal>
                                <Login />
                            </LayoutPrincipal>
                        )}
                    /> 

                    <Route path="/recoperar"
                        render={() =>(
                            <LayoutPrincipal>
                                <Recoperar />
                            </LayoutPrincipal>
                        )}
                    /> 

                    <Route path="/painel"
                        render={() =>(
                            <ComAuth>
                                <LayoutPrincipal>
                                    <Painel />
                                </LayoutPrincipal>
                            </ComAuth>
                        )}
                    />

                    <Route path="/admin"
                        render={() =>(
                            <AdminComAuth>
                                <AdminLayout>
                                    <Admin />
                                </AdminLayout>
                            </AdminComAuth>
                        )}
                    />              
                </Switch>
        </div>
        );
  }
  
export default App;