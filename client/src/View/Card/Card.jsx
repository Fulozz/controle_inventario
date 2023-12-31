import React, { useState } from "react";

import {
  AiOutlineClose,
  AiOutlineEyeInvisible,
  AiOutlineSave,
} from "react-icons/ai";

import APIPatrimonio from "../../API/API.patrimonio";
import { FiAlertTriangle, FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";

import Info from "./notEditable/informacao_info/Info";
import Local from "./notEditable/local_info/Local";
import Hardware from "./notEditable/hardware_info/Hardware";

const Card = ({ singlePatrimonio, setIsVisible }) => {
  const isVisible = setIsVisible;
  const [selector, setSelector] = useState("informação");

  const [isEditable, setIsEditable] = useState(true);

  const [isActiveInfo, setIsActiveInfo] = useState(false);
  const [isActiveHardware, setIsActiveHardware] = useState(false);
  const [isActiveLocal, setIsActiveLocal] = useState(false);

  const Close = () => {
    setIsVisible(false);

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
  const onSubmit = (data) => {};
  const [formData, setFormData] = useState({
    // Geral
    host_name: "",
    marca: "",
    modelo: "",
    // Localização
    num_pa: "",
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
  const { handleSubmit } = useForm({
    initialValues: formData,
  });

  const Update = () => {
    // Geral
    const host_name = formData.host_name || singlePatrimonio.host_name;
    const modelo = formData.modelo || singlePatrimonio.modelo;
    const marca = formData.marca || singlePatrimonio.marca;
    // Localização
    const num_pa = formData.num_pa || singlePatrimonio.num_pa;
    // Impressora
    const tipo_impressora =
      formData.tipo_impressora || singlePatrimonio.tipo_impressora;
    // Monitor e Notebook
    const tipo_monitor = formData.tipo_monitor || singlePatrimonio.tipo_monitor;
    const formato = formData.formato || singlePatrimonio.formato;
    const tamanho = formData.tamanho || singlePatrimonio.tamanho;
    // Hardware
    const cpu = formData.cpu || singlePatrimonio.cpu;
    const gpu = formData.gpu || singlePatrimonio.gpu;
    const memoriaRam = formData.memoriaRam || singlePatrimonio.memoriaRam;
    const memoriaRamDDR =
      formData.memoriaRamDDR || singlePatrimonio.memoriaRamDDR;
    const hard_disk = formData.hard_disk || singlePatrimonio.hard_disk;
    // Servidor
    const hard_disk_2 = formData.hard_disk_2 || singlePatrimonio.hard_disk_2;
    const power_suply = formData.power_suply || singlePatrimonio.power_suply;
    const acesso_remoto =
      formData.acesso_remoto || singlePatrimonio.acesso_remoto;
    const sistema_operacional =
      formData.sistema_operacional || singlePatrimonio.sistema_operacional;
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
        APIPatrimonio().post(
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
        APIPatrimonio().post(
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
        APIPatrimonio().post(
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
        APIPatrimonio().post(
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
        APIPatrimonio().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            host_name: host_name,
            modelo: modelo,
            marca: marca,
            num_pa: num_pa
          },
          window.location.reload()
        );
        break;
      case "informação" && "switch":
        APIPatrimonio().post(
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
        APIPatrimonio().post(
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
    }
    // Hardware
    switch (selector && singlePatrimonio.categoria) {
      case "hardware" && "computador":
        APIPatrimonio().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            cpu: cpu,
            gpu: gpu,
            memoriaRam: memoriaRam,
            memoriaRamDDR: memoriaRamDDR,
            hard_disk: hard_disk,
            num_pa: num_pa,
          },
          window.location.reload()
        );
        break;
      case "hardware" && "notebook":
        APIPatrimonio().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            tamanho: tamanho,
            cpu: cpu,
            gpu: gpu,
            memoriaRam: memoriaRam,
            memoriaRamDDR: memoriaRamDDR,
            hard_disk: hard_disk,
            num_pa: num_pa,
          },
          window.location.reload()
        );
        break;
      case "hardware" && "monitor":
        APIPatrimonio().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            tamanho: tamanho,
            tipo_monitor: tipo_monitor,
            formato: formato,
            num_pa: num_pa,
          },
          window.location.reload()
        );
        break;
      case "hardware" && "servidor":
        APIPatrimonio().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            cpu: cpu,
            gpu: gpu,
            memoriaRam: memoriaRam,
            memoriaRamDDR: memoriaRamDDR,
            hard_disk: hard_disk,
            hard_disk_2: hard_disk_2,
            power_suply: power_suply,
            sistema_operacional: sistema_operacional,
            acesso_remoto: acesso_remoto,
          },
          window.location.reload()
        );
        break;
      case "hardware" && "switch":
        APIPatrimonio().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            poe: poe,
            portas: portas,
            gerenciavel: gerenciavel,
          },
          window.location.reload()
        );
        break;
    }
    // Local
    switch (selector) {
      case "local":
        APIPatrimonio().post(
          `/update/${singlePatrimonio.patrimonio}`,
          {
            patrimonio: singlePatrimonio.patrimonio,
            local: local,
            estado: estado,
            departamento: departamento,
          },
          window.location.reload()
        );

        break;
    }
  };
  return (
    <>
      {isVisible ? (
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
                          onClick={informação}
                        >
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
                              <h3 className={isActiveHardware ? "active" : ""}>
                                <strong>Hardware |</strong>
                              </h3>
                            </button>
                          </th>
                        </>
                      ) : null}
                      <th>
                        <button className="selector" id="local" onClick={local}>
                          <h3 className={isActiveLocal ? "active" : ""}>
                            <strong>Local </strong>
                          </h3>
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
                {/* Seletores de dados */}
                {selector === "informação" ? (
                  <Info patrimonio={singlePatrimonio} />
                ) : selector === "hardware" ? (
                  <Hardware patrimonio={singlePatrimonio} />
                ) : selector === "local" ? (
                  <Local patrimonio={singlePatrimonio} />
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
                        <tr>
                          <th>
                            <label htmlFor="num_pa">Número PA:</label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="num_pa"
                              id="num_pa"
                              placeholder={singlePatrimonio.num_pa}
                              value={formData.num_pa}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  num_pa: e.target.value,
                                });
                              }}
                            />
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
                        <tr>
                          <th>
                            <label htmlFor="num_pa">Número da PA: </label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="num_pa"
                              id="num_pa"
                              placeholder={singlePatrimonio.num_pa}
                              value={formData.num_pa}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  num_pa: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                ) : selector === "hardware" &&
                  singlePatrimonio.categoria === "notebook" ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Hardware</h1>
                    <table>
                      <tbody>
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
                        <tr>
                          <th>
                            <label htmlFor="num_pa">Número da PA: </label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="num_pa"
                              id="num_pa"
                              placeholder={singlePatrimonio.num_pa}
                              value={formData.num_pa}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  num_pa: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                ) : selector === "hardware" &&
                  singlePatrimonio.categoria === "servidor" ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Hardware</h1>
                    <table>
                      <tbody>
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
                        <tr>
                          <th>
                            <label htmlFor="hard_disk_2">Hard Disk 2</label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="hard_disk_2"
                              id="hard_disk_2"
                              placeholder={singlePatrimonio.hard_disk_2}
                              value={formData.hard_disk_2}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  hard_disk_2: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <label htmlFor="power_suply">Energia</label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="power_suply"
                              id="power_suply"
                              placeholder={singlePatrimonio.power_suply}
                              value={formData.power_suply}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  power_suply: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <label htmlFor="acesso_remoto">Acesso remoto</label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="acesso_remoto"
                              id="acesso_remoto"
                              placeholder={singlePatrimonio.acesso_remoto}
                              value={formData.acesso_remoto}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  acesso_remoto: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <label htmlFor="sistema_operacional">
                              Sistema Operacional
                            </label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="sistema_operacional"
                              id="sistema_operacional"
                              placeholder={singlePatrimonio.sistema_operacional}
                              value={formData.sistema_operacional}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  sistema_operacional: e.target.value,
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
                        <tr>
                          <th>
                            <label htmlFor="num_pa">Número da PA: </label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="num_pa"
                              id="num_pa"
                              placeholder={singlePatrimonio.num_pa}
                              value={formData.num_pa}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  num_pa: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                ) : singlePatrimonio.categoria === "switch" ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Hardware</h1>
                    <table>
                      <tbody>
                        <tr>
                          <th>
                            <label htmlFor="Portas">Portas:</label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="portas"
                              id="portas"
                              placeholder={singlePatrimonio.portas}
                              value={formData.portas}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  portas: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <label htmlFor="POE">POE:</label>
                          </th>
                          <td>
                            <select
                              name="poe"
                              id="poe"
                              className="appearance-select"
                              value={formData.poe}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  poe: e.target.value,
                                });
                              }}
                            >
                              <option value=""></option>
                              <option value="sim"> Sim</option>
                              <option value="nao"> Não</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <label htmlFor="gerenciavel">Gerenciavel: </label>
                          </th>
                          <td>
                            <select
                              name="gerenciavel"
                              id="gerenciavel"
                              className="appearance-select"
                              value={formData.gerenciavel}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  gerenciavel: e.target.value,
                                });
                              }}
                            >
                              <option value=""></option>
                              <option value="sim"> Sim</option>
                              <option value="nao"> Não</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <label htmlFor="num_pa">Número da PA: </label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="num_pa"
                              id="num_pa"
                              placeholder={singlePatrimonio.num_pa}
                              value={formData.num_pa}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  num_pa: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                ) : selector === "hardware" &&
                  singlePatrimonio.categoria === "servidor" ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Hardware</h1>
                    <table>
                      <tbody>
                        <tr>
                          <th>
                            <label htmlFor="portas">Portas:</label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="portas"
                              id="portas"
                              placeholder={singlePatrimonio.portas}
                              value={formData.portas}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  portas: e.target.value,
                                });
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <label htmlFor="gerenciavel">Gerenciavel:</label>
                          </th>
                          <td>
                            <select
                              name="gerenciavel"
                              id="gerenciavel"
                              className="appearance-select"
                              value={formData.gerenciavel}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  gerenciavel: e.target.value,
                                });
                              }}
                            >
                              <option value=""></option>
                              <option value="sim"> sim</option>
                              <option value="nao"> nao</option>
                            </select>
                          </td>
                        </tr>

                        <tr>
                          <th>
                            <label htmlFor="poe">POE:</label>
                          </th>
                          <td>
                            <input
                              type="text"
                              name="poe"
                              id="poe"
                              placeholder={singlePatrimonio.poe}
                              value={formData.poe}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  poe: e.target.value,
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
                            <label htmlFor="departamento">Departamento:</label>
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
      ) : null}
    </>
  );
};

export default Card;
