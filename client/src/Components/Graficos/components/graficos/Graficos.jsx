import React, { useEffect, useState } from 'react'
import API from '../../../API/API.patrimonio';
import Chart from 'react-google-charts'


import './Graficos.css'
const Graficos = () => {
  const [total, setTotal] = useState()
    const [data, setData] = useState({
      computador: Number,
      monitor: Number,
      telefone: Number,
      switch: Number,
      servidor: Number,
      notebook: Number,
      impressora: Number,
    });

    useEffect(() => {
        API().get("/patrimonios").then((response) => {
            const data = JSON.parse(JSON.stringify(response.data))
            const items = data
            setData({
              computador: items[0].computador, 
              impressora: items[1].impressora, 
              monitor: items[2].monitor,
              notebook: items[3].notebook,  
              servidor: items[4].servidor, 
              switch: items[5].switch, 
              telefone: items[6].telefone, 
            })
            console.log(data)
        });
      }, []);
      console.log(data)

const dataTeste = [
  ["Patrimonios", "Quantidade"],
  ["Computador", data.computador],
  ["Notebook", data.notebook],
  ["Impressora", data.impressora],
  ["Telefone", data.telefone],
  ["Switch", data.switch],
  ["Monitor", data.monitor],
  ["Servidor", data.servidor]
];
const options = {
  title: "Grafico de relação de patrimonio",
  pieHole: 0.4,
};
  return (
    <div className="graphs">
      <div className="graficos">
      <Chart
        chartType="PieChart"
        data={dataTeste}
        options={options}
        width="100%"
        height="300px"
        legendToggle
        />
      </div>
    </div>
  )
}

export default Graficos