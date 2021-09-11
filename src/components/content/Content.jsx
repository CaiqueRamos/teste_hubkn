import React, { Component, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Table } from 'reactstrap';
import classnames from 'classnames';
import "./Content.css"

import Graphic from '../grafico/Graphic.jsx'

import Negocios from "../../db/dbJson/negocios.json"
import Performace from "../../db/dbJson/performace.json"


function Content() {

    const [activeTab, setActiveTab] = useState('1');
    const goal = 10;
    const playerGoal = 9;

    let meetingStatus;

    if (playerGoal >= 8) {
        meetingStatus = "semaphore green"
    } else if (playerGoal >= 6) {
        meetingStatus = "semaphore yellow"
    } else {
        meetingStatus = "semaphore red"
    }


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
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
                                                        <th >{detail.nome}</th>
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
                                            <th >Vendedor</th>
                                            <th >Negócios Fechados</th>
                                            <th>Valor Total</th>
                                            <th>Ticket Médio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Negocios.map((detail, index) => {
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