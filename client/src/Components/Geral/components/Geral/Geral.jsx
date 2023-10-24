import React, { useEffect, useState } from "react";

import "./Geral.css";
import computer from "../../../Assets/categorias/computer.png";
import notebook from "../../../Assets/categorias/notebook png.png";
import impressora from "../../../Assets/categorias/impressora png.png";
import monitor from "../../../Assets/categorias/monitor png.png";
import telefone from "../../../Assets/categorias/telefone png.png";
import switchI from "../../../Assets/categorias/switch png.png";
import server from "../../../Assets/categorias/server png.png";

import API from '../../../API/API'
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineSave,
} from "react-icons/ai";

import { FiAlertTriangle, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";


import { useForm } from "react-hook-form";

const Geral = () => {
  const [patrimonios, setPatrimonio] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [singlePatrimonio, setSinglePatrimonio] = useState();

  const [selector, setSelector] = useState("informação");

  const [isActiveInfo, setIsActiveInfo] = useState(false);
  const [isActiveHardware, setIsActiveHardware] = useState(false);
  const [isActiveLocal, setIsActiveLocal] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  // Função para filtrar os dados de patrimônio com base na categoria selecionada
  const filterPatrimonios = (patrimonios) => {
    // Se a categoria selecionada for "Todos", retorna todos os patrimônios
    if (categoriaSelecionada === "Todos") return patrimonios;
    // Caso contrário, retorna apenas os patrimônios da categoria selecionada
    return patrimonios.filter((patrimonio) => patrimonio.categoria === categoriaSelecionada);
  };


  useEffect(() => {
    API().get("/patrimonio/:id").then(
      (response) => {
        setPatrimonio(response.data);
      }
    );
  }, []);

  useEffect(() => {
    API().get("/all").then((response) => {
      setPatrimonio(response.data);
    });
  }, []);

  const [formData, setFormData] = useState({
    // Geral
    host_name: "",
    marca: "",
    modelo: "",
    // Impressora
    tipo_impressora: "",
    // Monitor
    tamanho: "",
    tipo_monitor: "",
    formato: "",
    categoria: "",
    // hardware
    cpu: "",
    gpu: "",
    memoriaRam: "",
    memoriaRamDDR: "",
    hard_disk: "",
    // Switch
    portas: "",
    poe: "",
    gerenciavel: "",
    // Servidor
    hard_disk_2: "",
    sistema_operacional: "",
    power_suply: "",
    acesso_remoto: "",
    //Geral
    local: "",
    departamento: "",
    estado: "",
  });
  //Handle the formData
  const { handleSubmit } = useForm({
    initialValues: formData,
  });
  const Close = () => {
    setIsVisible(false);
    setIsEditable(false);
    setSelector("informação");
    setIsActiveInfo(true);
    setIsActiveHardware(false);
    setIsActiveLocal(false);
  };
  const informação = () => {
    setSelector("informação");

    setIsActiveInfo(true);
    setIsActiveHardware(false);
    setIsActiveLocal(false);
  };
  const hardware = () => {
    setSelector("hardware");

    setIsActiveInfo(false);
    setIsActiveHardware(true);
    setIsActiveLocal(false);
  };

  const local = () => {
    setSelector("local");

    setIsActiveInfo(false);
    setIsActiveHardware(false);
    setIsActiveLocal(true);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  const Update = () => {
    // Geral
    const host_name = formData.host_name || singlePatrimonio.host_name;
    const modelo = formData.modelo || singlePatrimonio.modelo;
    const marca = formData.marca || singlePatrimonio.marca;
    // Impressora
    const tipo_impressora = formData.tipo_impressora || singlePatrimonio.tipo_impressora;
    // Monitor e Notebook
    const tipo_monitor = formData.tipo_monitor || singlePatrimonio.tipo_monitor;
    const formato = formData.formato || singlePatrimonio.formato;
    const tamanho = formData.tamanho || singlePatrimonio.tamanho;
    // Hardware
    const cpu = formData.cpu || singlePatrimonio.cpu;
    const gpu = formData.gpu || singlePatrimonio.gpu;
    const memoriaRam = formData.memoriaRam || singlePatrimonio.memoriaRam;
    const memoriaRamDDR = formData.memoriaRamDDR || singlePatrimonio.memoriaRamDDR;
    const hard_disk = formData.hard_disk || singlePatrimonio.hard_disk;
    // Servidor
    const hard_disk_2 = formData.hard_disk_2 || singlePatrimonio.hard_disk_2;
    const power_suply = formData.power_suply || singlePatrimonio.power_suply;
    const acesso_remoto = formData.acesso_remoto || singlePatrimonio.acesso_remoto;
    const sistema_operacional = formData.sistema_operacional || singlePatrimonio.sistema_operacional;
    //switch
    const portas = formData.portas || singlePatrimonio.portas;
    const poe = formData.poe || singlePatrimonio.poe;
    const gerenciavel = formData.gerenciavel || singlePatrimonio.gerenciavel;
    //Local
    const local = formData.local || singlePatrimonio.local;
    const departamento = formData.departamento || singlePatrimonio.departamento;
    const estado = formData.estado || singlePatrimonio.estado;

    // Informação
    switch (selector && singlePatrimonio.categoria) {
        case "informação" && "computador":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            host_name: host_name,
            modelo: modelo,
            marca: marca,
          },
          window.location.reload()
        );
        break;
        case "informação" && "notebook":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            host_name: host_name,
            modelo: modelo,
            marca: marca,
          },
          window.location.reload()
        );
        break;
        case "informação" && "impressora":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            host_name: host_name,
            modelo: modelo,
            marca: marca,
            tipo_impressora: tipo_impressora,
          },
          window.location.reload()
        );
        break;
        case "informação" && "monitor":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            host_name: host_name,
            modelo: modelo,
            marca: marca,
            tipo_monitor: tipo_monitor,
            formato: formato,
            tamanho: tamanho,
          },
          window.location.reload()
        );
        break;
        case "informação" && "telefone":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            host_name: host_name,
            modelo: modelo,
            marca: marca,
          },
          window.location.reload()
        );
        break;
        case "informação" && "switch":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            host_name: host_name,
            modelo: modelo,
            marca: marca,
          },
          window.location.reload()
        );
        break;
        case "informação" && "servidor":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            host_name: host_name,
            modelo: modelo,
            marca: marca,
          },
          window.location.reload()
        );
        break;
        
            break;
    }
    // Hardware
    switch(selector && singlePatrimonio.categoria) {
        case "hardware" && "computador":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            cpu: cpu,
            gpu: gpu,
            memoriaRam: memoriaRam,
            memoriaRamDDR:  memoriaRamDDR,
            hard_disk: hard_disk
          },
          window.location.reload()
        );
        break;
        case "hardware" && "notebook":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            tamanho: tamanho,
            cpu: cpu,
            gpu: gpu,
            memoriaRam: memoriaRam,
            memoriaRamDDR:  memoriaRamDDR,
            hard_disk: hard_disk
          },
          window.location.reload()
        );
        break;
        case "hardware" && "monitor":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            tamanho: tamanho,
            tipo_monitor: tipo_monitor,
            formato: formato
          },
          window.location.reload()
        );
        break;
        case "hardware" && "servidor":
          API().post(
            `/update/${singlePatrimonio.patrimonio}`,
            {
              patrimonio: singlePatrimonio.patrimonio,
              cpu: cpu,
              gpu: gpu,
              memoriaRam: memoriaRam,
              memoriaRamDDR:  memoriaRamDDR,
              hard_disk: hard_disk,
              hard_disk_2: hard_disk_2,
              power_suply: power_suply,
              sistema_operacional: sistema_operacional,
              acesso_remoto: acesso_remoto
            },
            window.location.reload()
          );
          break;
        case "hardware" && "switch":
          API().post(`/update/${singlePatrimonio.patrimonio}`,
              {
                patrimonio: singlePatrimonio.patrimonio,
                poe: poe,
                portas: portas,
                gerenciavel: gerenciavel
              },
              window.location.reload()
            );
            break;
    }
    // Local
    switch (selector) {
      case "local":
        API().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            local: local,
            estado: estado,
            departamento: departamento
          },
          window.location.reload()
        );

        break;
    

    }
  };

  return (
    <div className="listingSection">
      {/* Filtro de opções de categorias */}
        <select onChange={(event) => setCategoriaSelecionada(event.target.value)}>
          <option value="Todos">Todos</option>
          <option value="monitor">Monitores</option>
          <option value="computador">Computadores</option>
          <option value="servidor">Servidores</option>
          <option value="switch">Switches</option>
          <option value="telefone">Telefones</option>
          <option value="impressora">Impressoras</option>
        </select>
      <div className="flex">
        <div className="secContainer flex">  
        {patrimonios &&
        filterPatrimonios(patrimonios).map((patrimonio, index) => (
          <div className="singleItem" key={index}>
            <h5>{patrimonio.host_name}</h5>
            <button
              onClick={() => {
                setIsVisible(true);
                setIsEditable(true);
                setSinglePatrimonio(patrimonio);
              }}
            >
              <AiOutlineEye className="icon" />
            </button>
            <> 
              {
                patrimonio.categoria === "computador" ? (
                  <img src={computer} alt="Image Name" />
                ) :patrimonio.categoria === "notebook" ? (
                  <> 
                  <img src={notebook} alt="Image Name" />
                  </>
                ) : patrimonio.categoria === "impressora" ? (
                  <> 
                  <img src={impressora} alt="Image Name" />
                  </>
                ) : patrimonio.categoria === "monitor" ? (
                  <> 
                  <img src={monitor} alt="Image Name" />
                  </>
                ) : patrimonio.categoria === "telefone" ? (
                  <> 
                  <img src={telefone} alt="Image Name" />
                  </>
                ) : patrimonio.categoria === "switch" ? (
                  <> 
                  <img src={switchI} alt="Image Name" />
                  </>
                ) : patrimonio.categoria === "server" ? (
                  <> 
                  <img src={server} alt="Image Name" />
                  </>
                ) :null
              }
            </>
            <Link
              onClick={() => {
                setIsEditable(false);
                setIsVisible(true);
              }}
            >
              <h3>{patrimonio.patrimonio}</h3>
            </Link>
          </div>
        ))}
        </div>
        {isVisible && (
          <div className="modal" style={{ zIndex: 100 }}>
            <div className="modal-content">
              <div className="modal-top">
                <h1>{singlePatrimonio.host_name}</h1>
                <button onClick={Close}>
                  <AiOutlineEyeInvisible className="icon" />
                </button>
              </div>
              {isEditable ? (
                <div className="modal-item">
                  <table>
                    <tbody>
                      <tr>
                        <th>
                          <button
                            className="selector"
                            id="informacao"
                            onClick={informação} >
                            <h3 className={isActiveInfo ? "active" : ""}>
                              <strong>Informações |</strong>
                            </h3>
                          </button>
                        </th>
                        {singlePatrimonio.categoria !== "telefone" &&
                        singlePatrimonio.categoria !== "impressora" ? (
                          <>
                            <th>
                              <button className="selector" onClick={hardware}>
                                <h3 className={isActiveHardware ? "active" : ""} >
                                  <strong>Hardware |</strong>
                                </h3>
                              </button>
                            </th>
                          </>
                        ) : null}
                        <th>
                          <button
                            className="selector"
                            id="local"
                            onClick={local}
                          >
                            
                            <h3 className={isActiveLocal ? "active" : ""}>
                              <strong>Local </strong>
                            </h3>
                          </button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  {/* Seletor de informação */}
                  {selector === "informação" &&
                  singlePatrimonio.categoria === "computador" ? (
                    <>
                      <h2>Informações</h2>
                      <h3>
                        
                        <strong> Patrimonio: </strong>
                        {singlePatrimonio.patrimonio}
                      </h3>
                      <h3>
                        
                        <strong> Categoria: </strong>
                        {singlePatrimonio.categoria}
                      </h3>
                      <h3>
                        
                        <strong> Número de série: </strong>
                        {singlePatrimonio.serial_number}
                      </h3>
                      <h3>
                        
                        <strong> Marca: </strong>
                        {singlePatrimonio.marca}
                      </h3>
                      <h3>
                        
                        <strong> Modelo: </strong>
                        {singlePatrimonio.modelo}
                      </h3>
                    </>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "notebook" ? (
                    <>
                      <h2>Informações</h2>
                      <h3>
                        
                        <strong> Patrimonio: </strong>
                        {singlePatrimonio.patrimonio}
                      </h3>
                      <h3>
                        
                        <strong> Categoria: </strong>
                        {singlePatrimonio.categoria}
                      </h3>
                      <h3>
                        
                        <strong> Número de série: </strong>
                        {singlePatrimonio.serial_number}
                      </h3>
                      <h3>
                        
                        <strong> Marca: </strong>
                        {singlePatrimonio.marca}
                      </h3>
                      <h3>
                        
                        <strong> Modelo: </strong>
                        {singlePatrimonio.modelo}
                      </h3>
                      <h3>
                        
                        <strong> Tamanho: </strong>
                        {singlePatrimonio.tamanho}
                      </h3>
                    </>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "impressora" ? (
                    <>
                      <h2>Informações</h2>
                      <h3>
                        
                        <strong> Patrimonio: </strong>
                        {singlePatrimonio.patrimonio}
                      </h3>
                      <h3>
                        
                        <strong> Categoria: </strong>
                        {singlePatrimonio.categoria}
                      </h3>
                      <h3>
                        
                        <strong> Número de série: </strong>
                        {singlePatrimonio.serial_number}
                      </h3>
                      <h3>
                        
                        <strong> Marca: </strong>
                        {singlePatrimonio.marca}
                      </h3>
                      <h3>
                        
                        <strong> Modelo: </strong>
                        {singlePatrimonio.modelo}
                      </h3>
                      <h3>
                        
                        <strong> Tipo: </strong>
                        {singlePatrimonio.tipo_impressora}
                      </h3>
                    </>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "monitor" ? (
                    <>
                      <h2>Informações</h2>
                      <h3>
                        
                        <strong> Patrimonio: </strong>
                        {singlePatrimonio.patrimonio}
                      </h3>
                      <h3>
                        
                        <strong> Categoria: </strong>
                        {singlePatrimonio.categoria}
                      </h3>
                      <h3>
                        
                        <strong> Número de série: </strong>
                        {singlePatrimonio.serial_number}
                      </h3>
                      <h3>
                        
                        <strong> Marca: </strong>
                        {singlePatrimonio.marca}
                      </h3>
                      <h3>
                        
                        <strong> Modelo: </strong>
                        {singlePatrimonio.modelo}
                      </h3>
                    </>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "telefone" ? (
                    <>
                      <h2>Informações</h2>
                      <h3>
                        
                        <strong> Patrimonio: </strong>
                        {singlePatrimonio.patrimonio}
                      </h3>
                      <h3>
                        
                        <strong> Categoria: </strong>
                        {singlePatrimonio.categoria}
                      </h3>
                      <h3>
                        
                        <strong> Número de série: </strong>
                        {singlePatrimonio.serial_number}
                      </h3>
                      <h3>
                        
                        <strong> Marca: </strong>
                        {singlePatrimonio.marca}
                      </h3>
                      <h3>
                        
                        <strong> Modelo: </strong>
                        {singlePatrimonio.modelo}
                      </h3>
                      {/* Colocar no hardware que nao possui hardware*/}
                    </>
                  ) : null}
                  {/* Seletor de Hardware */}
                  {selector === "hardware" &&
                  singlePatrimonio.categoria === "computador" ? (
                    <>
                      <h2>
                        <strong>Hardware</strong>
                      </h2>
                      <h3>
                        <strong>CPU:</strong> {singlePatrimonio.cpu}
                      </h3>
                      <h3>
                        <strong>GPU:</strong> {singlePatrimonio.gpu}
                      </h3>
                      <h3>
                        <strong>Memoria:</strong> {singlePatrimonio.memoriaRam}
                        {singlePatrimonio.memoriaRamDDR}
                      </h3>
                      <h3>
                        <strong>Hard Disk:</strong> {singlePatrimonio.hard_disk}
                      </h3>
                    </>
                  ) : selector === "hardware" &&
                    singlePatrimonio.categoria === "notebook" ? (
                    <>
                      <h2>
                        <strong>Hardware</strong>
                      </h2>
                      <h3>
                        <strong>Tamanho:</strong> {singlePatrimonio.tamanho}
                      </h3>
                      <h3>
                        <strong>CPU:</strong> {singlePatrimonio.cpu}
                      </h3>
                      <h3>
                        <strong>GPU:</strong> {singlePatrimonio.gpu}
                      </h3>
                      <h3>
                        <strong>Memoria:</strong> {singlePatrimonio.memoriaRam}
                        {singlePatrimonio.memoriaRamDDR}
                      </h3>
                      <h3>
                        <strong>Hard Disk:</strong> {singlePatrimonio.hard_disk}
                      </h3>
                    </>
                  ) : selector === "hardware" &&
                    singlePatrimonio.categoria === "monitor" ? (
                    <>
                      <h2>
                        <strong>Hardware</strong>
                      </h2>
                      <h3>
                        <strong>Tamanho:</strong> {singlePatrimonio.tamanho}
                      </h3>
                      <h3>
                        <strong>Tipo:</strong> {singlePatrimonio.tipo_monitor}
                      </h3>
                      <h3>
                        <strong>Formato:</strong> {singlePatrimonio.formato}
                      </h3>
                    </>
                  ) : selector === "hardware" &&
                    singlePatrimonio.categoria === "switch" ? (
                    <>
                      <h2>
                        <strong>Hardware</strong>
                      </h2>
                      <h3>
                        <strong>Portas:</strong> {singlePatrimonio.portas}
                      </h3>
                      <h3>
                        <strong>POE:</strong> {singlePatrimonio.poe}
                      </h3>
                      <h3>
                        <strong>Geranciavel:</strong>
                        {singlePatrimonio.gerenciavel}
                      </h3>
                    </>
                  ) : selector === "hardware" &&
                    singlePatrimonio.categoria === "servidor" ? (
                    <>
                      <h2>
                        <strong>Hardware</strong>
                      </h2>
                      <h3>
                        <strong>CPU:</strong> {singlePatrimonio.cpu}
                      </h3>
                      <h3>
                        <strong>GPU:</strong> {singlePatrimonio.gpu}
                      </h3>
                      <h3>
                        <strong>Memoria:</strong> {singlePatrimonio.memoriaRam}
                        {singlePatrimonio.memoriaRamDDR}
                      </h3>
                      <h3>
                        <strong>Hard Disk I:</strong>
                        {singlePatrimonio.hard_disk}
                      </h3>
                      <h3>
                        <strong>Hard Disk II:</strong>
                        {singlePatrimonio.hard_disk}
                      </h3>
                      <h3>
                        <strong>Energia:</strong> {singlePatrimonio.power_suply}
                      </h3>
                      <h3>
                        <strong>Sistema Operacional:</strong>
                        {singlePatrimonio.sistema_operacional}
                      </h3>
                      <h3>
                        <strong>Acesso remoto:</strong>
                        {singlePatrimonio.acesso_remoto}
                      </h3>
                    </>
                  ) : null}
                  {/* Seletor de Local */}
                  {selector === "local" ? (
                    <>
                      <h2>
                        <strong>Local</strong>
                      </h2>
                      <h3>
                        <strong>Local:</strong> {singlePatrimonio.local}
                      </h3>
                      <h3>
                        <strong>Departamento:</strong>
                        {singlePatrimonio.departamento}
                      </h3>
                      <h3>
                        <strong>Estado:</strong> {singlePatrimonio.estado}
                      </h3>
                    </>
                  ) : null}
                </div>
              ) : (
                <div className="modal-item">
                  {selector === "informação" &&
                  singlePatrimonio.categoria === "computador" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Informações de cadastro</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <label htmlFor="host_name">Host Name: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="host_name"
                                id="host_name"
                                placeholder={singlePatrimonio.host_name}
                                value={formData.host_name}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    host_name: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="patrimonio">Patrimonio: </label>
                            </th>
                            <td>
                              <input
                                type="number"
                                name="patrimonio"
                                id="patrimonio"
                                placeholder={singlePatrimonio.patrimonio}
                                value={singlePatrimonio.patrimonio}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="serial_number">
                                Serial Number:
                              </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="serial_number"
                                id="serial_number"
                                value={singlePatrimonio.serial_number}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="marca">Marca: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="marca"
                                id="marca"
                                placeholder={singlePatrimonio.marca}
                                value={formData.marca}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    marca: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="modelo">Modelo:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="modelo"
                                id="modelo"
                                placeholder="Modelo"
                                value={formData.modelo}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    modelo: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="ategoria">Categoria: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="modelo"
                                id="modelo"
                                placeholder="Modelo"
                                value={singlePatrimonio.categoria}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "impressora" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Informações de cadastro</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <label htmlFor="host_name">Host Name: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="host_name"
                                id="host_name"
                                placeholder={singlePatrimonio.host_name}
                                value={formData.host_name}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    host_name: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="patrimonio">Patrimonio: </label>
                            </th>
                            <td>
                              <input
                                type="number"
                                name="patrimonio"
                                id="patrimonio"
                                placeholder={singlePatrimonio.patrimonio}
                                value={singlePatrimonio.patrimonio}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="serial_number">
                                Serial Number:
                              </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="serial_number"
                                id="serial_number"
                                value={singlePatrimonio.serial_number}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="marca">Marca: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="marca"
                                id="marca"
                                placeholder={singlePatrimonio.marca}
                                value={formData.marca}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    marca: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="modelo">Modelo:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="modelo"
                                id="modelo"
                                placeholder="Modelo"
                                value={formData.modelo}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    modelo: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>

                          <tr>
                            <th>
                              <label htmlFor="tipo">Tipo: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="tipo_impressora"
                                id="modelo"
                                placeholder={singlePatrimonio.tipo_impressora}
                                value={formData.tipo_impressora}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    tipo_impressora: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "notebook" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Informações de cadastro</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <label htmlFor="host_name">Host Name: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="host_name"
                                id="host_name"
                                placeholder="Host Name"
                                value={formData.host_name}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    host_name: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="patrimonio">Patrimonio: </label>
                            </th>
                            <td>
                              <input
                                type="number"
                                name="patrimonio"
                                id="patrimonio"
                                placeholder={singlePatrimonio.patrimonio}
                                value={singlePatrimonio.patrimonio}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="serial_number">
                                Serial Number:
                              </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="serial_number"
                                id="serial_number"
                                value={singlePatrimonio.serial_number}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="marca">Marca: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="marca"
                                id="marca"
                                placeholder={singlePatrimonio.marca}
                                value={formData.marca}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    marca: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="modelo">Modelo:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="modelo"
                                id="modelo"
                                placeholder="Modelo"
                                value={formData.modelo}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    modelo: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="ategoria">Categoria: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="modelo"
                                id="modelo"
                                placeholder="Modelo"
                                value={singlePatrimonio.categoria}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "telefone" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Informações de cadastro</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <label htmlFor="host_name">Host Name: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="host_name"
                                id="host_name"
                                placeholder={singlePatrimonio.host_name}
                                value={formData.host_name}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    host_name: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="patrimonio">Patrimonio: </label>
                            </th>
                            <td>
                              <input
                                type="number"
                                name="patrimonio"
                                id="patrimonio"
                                placeholder={singlePatrimonio.patrimonio}
                                value={singlePatrimonio.patrimonio}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="serial_number">
                                Serial Number:
                              </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="serial_number"
                                id="serial_number"
                                value={singlePatrimonio.serial_number}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="marca">Marca: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="marca"
                                id="marca"
                                placeholder={singlePatrimonio.marca}
                                value={formData.marca}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    marca: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="modelo">Modelo:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="modelo"
                                id="modelo"
                                placeholder={singlePatrimonio.modelo}
                                value={formData.modelo}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    modelo: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="Categoria">Categoria: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="categoria"
                                id="categoria"
                                placeholder="categoria"
                                value={singlePatrimonio.categoria}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "monitor" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Informações de cadastro</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <label htmlFor="host_name">Host Name: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="host_name"
                                id="host_name"
                                placeholder={singlePatrimonio.host_name}
                                value={formData.host_name}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    host_name: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="patrimonio">Patrimonio: </label>
                            </th>
                            <td>
                              <input
                                type="number"
                                name="patrimonio"
                                id="patrimonio"
                                placeholder={singlePatrimonio.patrimonio}
                                value={singlePatrimonio.patrimonio}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="serial_number">
                                Serial Number:
                              </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="serial_number"
                                id="serial_number"
                                value={singlePatrimonio.serial_number}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="marca">Marca: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="marca"
                                id="marca"
                                placeholder={singlePatrimonio.marca}
                                value={formData.marca}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    marca: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="modelo">Modelo:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="modelo"
                                id="modelo"
                                placeholder={singlePatrimonio.modelo}
                                value={formData.modelo}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    modelo: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="Categoria">Categoria: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="categoria"
                                id="categoria"
                                placeholder="categoria"
                                value={singlePatrimonio.categoria}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "servidor" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Informações de cadastro</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <label htmlFor="host_name">Host Name: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="host_name"
                                id="host_name"
                                placeholder={singlePatrimonio.host_name}
                                value={formData.host_name}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    host_name: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="patrimonio">Patrimonio: </label>
                            </th>
                            <td>
                              <input
                                type="number"
                                name="patrimonio"
                                id="patrimonio"
                                placeholder={singlePatrimonio.patrimonio}
                                value={singlePatrimonio.patrimonio}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="serial_number">
                                Serial Number:
                              </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="serial_number"
                                id="serial_number"
                                value={singlePatrimonio.serial_number}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="marca">Marca: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="marca"
                                id="marca"
                                placeholder={singlePatrimonio.marca}
                                value={formData.marca}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    marca: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="modelo">Modelo:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="modelo"
                                id="modelo"
                                placeholder={singlePatrimonio.modelo}
                                value={formData.modelo}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    modelo: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="Categoria">Categoria: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="categoria"
                                id="categoria"
                                placeholder="categoria"
                                value={singlePatrimonio.categoria}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : selector === "informação" &&
                    singlePatrimonio.categoria === "switch" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Informações de cadastro</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <label htmlFor="host_name">Host Name: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="host_name"
                                id="host_name"
                                placeholder={singlePatrimonio.host_name}
                                value={formData.host_name}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    host_name: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="patrimonio">Patrimonio: </label>
                            </th>
                            <td>
                              <input
                                type="number"
                                name="patrimonio"
                                id="patrimonio"
                                placeholder={singlePatrimonio.patrimonio}
                                value={singlePatrimonio.patrimonio}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="serial_number">
                                Serial Number:
                              </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="serial_number"
                                id="serial_number"
                                value={singlePatrimonio.serial_number}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="marca">Marca: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="marca"
                                id="marca"
                                placeholder={singlePatrimonio.marca}
                                value={formData.marca}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    marca: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="modelo">Modelo:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="modelo"
                                id="modelo"
                                placeholder={singlePatrimonio.modelo}
                                value={formData.modelo}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    modelo: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="Categoria">Categoria: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="categoria"
                                id="categoria"
                                placeholder="categoria"
                                value={singlePatrimonio.categoria}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : null}
                  {selector === "hardware" &&
                  singlePatrimonio.categoria === "computador" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Hardware</h1>
                      <table>
                        <tbody>
                          {singlePatrimonio.categoria === "notebook" ? (
                            <tr>
                              <th>
                                <label htmlFor="cpu">Tamanho:</label>
                              </th>
                              <td>
                                <input
                                  type="text"
                                  name="tamanho"
                                  id="tamanho"
                                  placeholder="tamanho"
                                  value={singlePatrimonio.tamanho}
                                  readOnly
                                />
                                <FiAlertTriangle className="icon icon-attention" />
                              </td>
                            </tr>
                          ) : null}
                          <tr>
                            <th>
                              <label htmlFor="cpu">CPU:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="cpu"
                                id="cpu"
                                placeholder={singlePatrimonio.cpu}
                                value={formData.cpu}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    cpu: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="gpu">GPU: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="gpu"
                                id="gpu"
                                placeholder={singlePatrimonio.gpu}
                                value={formData.gpu}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    gpu: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="memoriaRam">Memory RAM: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="memoriaRam"
                                id="memoriaRam"
                                placeholder="Memoria Ram"
                                value={formData.memoriaRam}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    memoriaRam: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="memoriaRamDDR">DDR: </label>
                            </th>

                            <td>
                              <input
                                type="text"
                                name="memoriaRamDDR"
                                id="memoriaRamDDR"
                                value={singlePatrimonio.memoriaRamDDR}
                                readOnly
                              />
                              <FiAlertTriangle className="icon icon-attention" />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="hard_disk">Hard Disk</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="hard_disk"
                                id="hard_disk"
                                placeholder={singlePatrimonio.hard_disk}
                                value={formData.hard_disk}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    hard_disk: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : selector === "hardware" &&
                    singlePatrimonio.categoria === "monitor" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Hardware</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <label htmlFor="tamanho">Tamanho:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="tamanho"
                                id="tamanho"
                                placeholder={singlePatrimonio.tamanho}
                                value={formData.tamanho}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    tamanho: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="tipo_monitor">
                                Tipo de monitor:
                              </label>
                            </th>
                            <td>
                              <select
                                name="tipo_monitor"
                                id="tipo_monitor"
                                className="appearance-select"
                                value={formData.tipo_monitor}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    tipo_monitor: e.target.value,
                                  });
                                }}
                              >
                                <option value=""></option>
                                <option value="smartTv"> SmartTv</option>
                                <option value="monitor"> Monitor</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="formato">Formato: </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="formato"
                                id="formato"
                                placeholder={singlePatrimonio.formato}
                                value={formData.formato}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    formato: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : null}
                  {selector === "local" ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h1>Local</h1>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <label htmlFor="local">Local:</label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="local"
                                id="local"
                                placeholder="Local"
                                value={formData.local}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    local: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="departamento">
                                Departamento:
                              </label>
                            </th>
                            <td>
                              <input
                                type="text"
                                name="departamento"
                                id="departamento"
                                placeholder="Departamento"
                                value={formData.departamento}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    departamento: e.target.value,
                                  });
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor="estado">Estado: </label>
                            </th>
                            <th>
                              <select
                                name="estado"
                                id="estado"
                                className="appearance-select"
                                value={formData.estado}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    estado: e.target.value,
                                  });
                                }}
                              >
                                <option value=""></option>
                                <option value="ativo"> Ativo</option>
                                <option value="manutenção">Manutenção</option>
                                <option value="reserva">Reserva</option>
                              </select>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  ) : null}
                </div>
              )}
              {isEditable ? (
                <div className="modal-bottom">
                  <button
                    onClick={() => {
                      setIsEditable(false);
                    }}
                  >
                    <FiEdit className="icon" />
                  </button>
                </div>
              ) : (
                <div className="modal-bottom">
                  <button
                    className="left-button"
                    onClick={() => {
                      setIsEditable(true);
                    }}
                  >
                    <AiOutlineClose className="icon" />
                  </button>
                  <button
                    className="right-button"
                    onClick={() => {
                      setIsEditable(true);
                      Update();
                    }}
                  >
                    <AiOutlineSave className="icon" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Geral;
