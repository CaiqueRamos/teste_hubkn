import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Col, Table } from 'reactstrap';
import classnames from 'classnames';
import "./Content.css"

import Graphic from '../grafico/Graphic.jsx'

import Negocios from "../../db/dbJson/negocios.json"
import Performace from "../../db/dbJson/performace.json"

import Close from "../../dist/img/close.png"


function Content() {

    const [activeTab, setActiveTab] = useState('1');
    const [close, setClose] = useState('none');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const closeModal = () => {
        if (close == "none") {
            setClose('flex')
        } else {
            setClose('none')
        }

    }

    return (
        <div className="content--tabela">
            <Nav tabs className="tab--navigation">
                <NavItem className="item--action">
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        <span className="tab">Performace</span>
                    </NavLink>
                </NavItem>
                <NavItem className="item--action">
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        <span className="tab">Negocio</span>
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <div className="first--table">
                        <div className="field--one">
                            <Col sm="12">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Vendedor</th>
                                            <th>Ligações</th>
                                            <th>Tempo por Chamada (min)</th>
                                            <th>E-mails enviados</th>
                                            <th>Reuniões agendadas</th>
                                            <th >Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            Performace.map((detail, index) => {
                                                return (
                                                    <tr>
                                                        <th >{/* Exemplo de modal, ainda precisa ser att e corrigido pro funcionamento individual
                                                            de cada vendedor, atualmente esta um geral para todos */}
                                                            <div className="person" onClick={closeModal}>
                                                                {detail.nome}
                                                                {/* <div className="call--modal" > + </div><b></b> */}
                                                            </div>
                                                            <div className="out--modal" style={{ display: close }}>
                                                                <div className="modal">
                                                                    <div className="modal--person">
                                                                        <img src="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png" />
                                                                        <h1>Vendedor</h1>
                                                                        <span>Campo Grande / MS</span> <br />
                                                                        <span>67 9 9151-0214</span>
                                                                    </div>
                                                                    <div className="modal--content" >
                                                                        <div className="close" onClick={closeModal}>
                                                                            <img src={Close} />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h1>Observações de vendas</h1>
                                                                            <ul>
                                                                                <li>Cliente testOne nao possui endereço</li>
                                                                                <li>testOne nao quer pagar o valor total</li>
                                                                                <li>Erro no Contato do TestTwo</li>
                                                                                <li>testOne nao quer pagar o valor total</li>
                                                                                <li>Erro no Contato do TestTwo</li>
                                                                                <li>Erro no Contato do TestTwo</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th >{detail.ligacoes}</th>
                                                        <th >{detail.tempoDeChamada}</th>
                                                        <th >{detail.emailsEnviados}</th>
                                                        <th >{detail.ReunioesAgendadas}</th>
                                                        <th scope="row">
                                                            {
                                                                detail.ReunioesAgendadas >= 8 &&
                                                                <div className="semaphore green"></div>
                                                            }{
                                                                detail.ReunioesAgendadas <= 5 &&
                                                                <div className="semaphore red"></div>
                                                            }{
                                                                detail.ReunioesAgendadas >= 6 && detail.ReunioesAgendadas <= 7 &&
                                                                <div className="semaphore yellow"></div>
                                                            }
                                                        </th>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </Table>

                            </Col>

                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className="first--table">
                        <div className="field--one">
                            <Col sm="12">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Vendedor</th>
                                            <th>Negócios Fechados</th>
                                            <th>Valor Total</th>
                                            <th>Ticket Médio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Negocios.map((detail) => {
                                                return (
                                                    <tr>
                                                        <th >{detail.nome}</th>
                                                        <th >{detail.negocioFechado}</th>
                                                        <th >{detail.valorTotal}</th>
                                                        <th >{detail.ticketMedio}</th>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </div>
                        <div className="graphic">
                            <Graphic />
                        </div>
                    </div>
                </TabPane>
            </TabContent>
        </div >
    );

}

export default Content;