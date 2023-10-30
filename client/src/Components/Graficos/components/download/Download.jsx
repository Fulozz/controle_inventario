import React, { useEffect, useState } from 'react';
import APIPatrimonio from '../../../API/API.patrimonio';
import xlsx from 'json-as-xlsx';

const Download = () => {
  const [patrimonio, setPatrimonio] = useState([]);

  useEffect(() => {
    APIPatrimonio().get('/all').then((response) => {
      setPatrimonio(response.data);
    });
  }, []);

  const downloadFile = () => {
    let data = [
      {
        sheet: "PATRIMONIO",
        columns: [
          { label: "Patrimonio", value: "patrimonio" },
          { label: "Categoria", value: "categoria" },
        ],
        content: patrimonio,
      },
      //Computadores
      {
        sheet: "COMPUTADOR",
        columns: [
          { label: "Patrimonio", value: "patrimonio" },
          { label: "HOST NAME", value: "host_name" },
          { label: "MARCA", value: "marca" },
          { label: "MODELO", value: "modelo" },
          { label: "SERIAL NUMBER", value: "serial_number" },
          { label: "CPU", value: "cpu" },
          { label: "GPU", value: "gpu" },
          { label: "MEMÓRIA", value: "memoriaRam" },
          { label: "DDR", value: "memoriaRamDDR" },
          { label: "HARD DISK", value: "hard_disk" },
          { label: "LOCAL", value: "local" },
          { label: "DEPARTAMENTO", value: "departamento" },
          { label: "SITUAÇÃO", value: "estado" },
        ],
        content: patrimonio.filter((item) => item.categoria === "computador"),
      },
      //Notebook
      {
        sheet: "NOTEBOOK",
        columns: [
          { label: "Patrimonio", value: "patrimonio" },
          { label: "HOST NAME", value: "host_name" },
          { label: "MARCA", value: "marca" },
          { label: "MODELO", value: "modelo" },
          { label: "SERIAL NUMBER", value: "serial_number" },
          { label: "TAMANHO", value: "tamanho" },
          { label: "CPU", value: "cpu" },
          { label: "GPU", value: "gpu" },
          { label: "MEMÓRIA", value: "memoriaRam" },
          { label: "DDR", value: "memoriaRamDDR" },
          { label: "HARD DISK", value: "hard_disk" },
          { label: "LOCAL", value: "local" },
          { label: "DEPARTAMENTO", value: "departamento" },
          { label: "SITUAÇÃO", value: "estado" },
        ],
        content: patrimonio.filter((item) => item.categoria === "notebook"),
      },
      //Monitores
      {
        sheet: "MONITOR",
        columns: [
          { label: "Patrimonio", value: "patrimonio" },
          { label: "MARCA", value: "marca" },
          { label: "MODELO", value: "modelo" },
          { label: "SERIAL NUMBER", value: "serial_number" },
          { label: "TIPO", value: "tipo_monitor" },
          { label: "TAMANHO", value: "tamanho" },
          { label: "FORMATO", value: "formato" },
          { label: "LOCAL", value: "local" },
          { label: "DEPARTAMENTO", value: "departamento" },
          { label: "SITUAÇÃO", value: "estado" },
        ],
        content: patrimonio.filter((item) => item.categoria === "monitor"),
      },
      {
        sheet: "IMPRESSORA",
        columns: [
          { label: "Patrimonio", value: "patrimonio" },
          { label: "MARCA", value: "marca" },
          { label: "MODELO", value: "modelo" },
          { label: "SERIAL NUMBER", value: "serial_number" },
          { label: "TIPO", value: "tipo_impressora" },
          { label: "LOCAL", value: "local" },
          { label: "DEPARTAMENTO", value: "departamento" },
          { label: "SITUAÇÃO", value: "estado" },
        ],
        content: patrimonio.filter((item) => item.categoria === "impressora"),
      },
      {
        sheet: "TELEFONE",
        columns: [
          { label: "Patrimonio", value: "patrimonio" },
          { label: "MARCA", value: "marca" },
          { label: "MODELO", value: "modelo" },
          { label: "SERIAL NUMBER", value: "serial_number" },
          { label: "LOCAL", value: "local" },
          { label: "DEPARTAMENTO", value: "departamento" },
          { label: "SITUAÇÃO", value: "estado" },
        ],
        content: patrimonio.filter((item) => item.categoria === "telefone"),
      },
      {
        sheet: "SWITCH",
        columns: [
          { label: "Patrimonio", value: "patrimonio" },
          { label: "MARCA", value: "marca" },
          { label: "MODELO", value: "modelo" },
          { label: "SERIAL NUMBER", value: "serial_number" },
          { label: "PORTAS", value: "portas" },
          { label: "POE", value: "poe" },
          { label: "GERENCIAVEL", value: "gerenciavel" },
          { label: "LOCAL", value: "local" },
          { label: "DEPARTAMENTO", value: "departamento" },
          { label: "SITUAÇÃO", value: "estado" },
        ],
        content: patrimonio.filter((item) => item.categoria === "switch"),
      },
      
      {
        sheet: "SERVIDOR",
        columns: [
          { label: "Patrimonio", value: "patrimonio" },
          { label: "HOST NAME", value: "host_name" },
          { label: "MARCA", value: "marca" },
          { label: "MODELO", value: "modelo" },
          { label: "SERIAL NUMBER", value: "serial_number" },
          { label: "CPU", value: "cpu" },
          { label: "GPU", value: "gpu" },
          { label: "MEMÓRIA", value: "memoriaRam" },
          { label: "DDR", value: "memoriaRamDDR" },
          { label: "HARD DISK I", value: "hard_disk" },
          { label: "HARD DISK II", value: "hard_disk_2" },
          { label: "OS", value: "sistema_operacional" },
          { label: "POWER SUPLY", value: "power_suply" },
          { label: "REMOTE ACCESS CONTROLLER", value: "acesso_remoto" },
          { label: "LOCAL", value: "local" },
          { label: "DEPARTAMENTO", value: "departamento" },
          { label: "SITUAÇÃO", value: "estado" },
        ],
        content: patrimonio.filter((item) => item.categoria === "servidor"),
      },
    ];
    let settings = {
      fileName: `Patrimonio ${new Date().toLocaleDateString('pt-BR')}`,
    };
    xlsx(data, settings);
  };

  return (
    <button onClick={downloadFile} className='btn '>GERAR RELATÓRIO</button>
  );
};

export default Download;