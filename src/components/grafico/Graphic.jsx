import React, { useState } from 'react';
import { Chart } from "react-google-charts";

import Negocios from "../../db/dbJson/negocios.json"

const VendedorOne = Negocios[0];
const VendedorTwo = Negocios[1];
const VendedorThree = Negocios[2];
const VendedorFour = Negocios[3];

function Graphic() {
  const [optionsBar, setOptionsBar] = useState({
    title: 'Análise de Vendas'
  });
  const [dataBar, setDataBar] = useState([
    ['Vendedor ', 'Valor Total', 'Ticket Médio'],
    [VendedorOne.nome, VendedorOne.valorTotal, VendedorOne.ticketMedio],
    [VendedorTwo.nome, VendedorTwo.valorTotal, VendedorTwo.ticketMedio],
    [VendedorThree.nome, VendedorThree.valorTotal, VendedorThree.ticketMedio],
    [VendedorFour.nome, VendedorFour.valorTotal, VendedorFour.ticketMedio],
  ])
  return (

    <Chart
      chartType="BarChart"
      data={dataBar}
      options={optionsBar}
    />

  );
}

export default Graphic;
