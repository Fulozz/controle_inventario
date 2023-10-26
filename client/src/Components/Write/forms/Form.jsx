import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import API from '../../API/API.patrimonio'

const Form = () => {
  const URLocal = "http://localhost:3001/api/v1"
  const URL = "http://10.0.50.39:3001/api/v1/user"

  const [user, setUser] = useState(null);
  const navigateTo = useNavigate();

  const Next = () => setPage(page + 1);
  const Previous = () => setPage(page - 1);
  const Cancel = () => navigate("/dashboard");

  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const date = new Date();
  const [formData, setFormData] = useState({
    // Geral
    host_name: "",
    serial_number: "",
    patrimonio: "",
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
    confirmation: false,
  });

  //Handle the formData
  const { handleSubmit } = useForm({
    initialValues: formData,
  });

  // Rerender the form on input change
  useEffect(() => {
    setFormData(formData);
  }, [formData]);

  // Request for the user data
  useEffect(() => {
    
    APIUser().post(`/user`, {
      token: localStorage.getItem("jwt"),
    }).then((response) => {
      setUser(response.data.name)
    });
  }, []);

  const onSubmit = async (data) => {
    // Do something with the submitted data
    if (data.confirmation === false) {
      alert("Você deve confirmar todos os dados acima para continuar.");
      return;
    }
  };
  //    Axios.post('/create', data)

  const Confirm = async () => {
    if (formData.confirmation === false) {
      alert("Você deve confirmar todos os dados acima para continuar.");
      return;
    }
    switch (formData.categoria) {
      case "computador":
        API().post("/create", {
          name: user,
          host_name: formData.host_name,
          serial_number: formData.serial_number,
          patrimonio: formData.patrimonio,
          marca: formData.marca,
          modelo: formData.modelo,
          categoria: formData.categoria,
          cpu: formData.cpu,
          gpu: formData.gpu,
          memoriaRam: formData.memoriaRam,
          memoriaRamDDR: formData.memoriaRamDDR,
          hard_disk: formData.hard_disk,
          local: formData.local,
          departamento: formData.departamento,
          estado: formData.estado,
        })
          .then((response) => {
            if (response.status === 200) {
              navigateTo("/dashboard");
              alert("Computador registrado com sucesso");
            }
          })
          .catch((err) => {
            alert(
              "Verifique as inforamações se o Patrimonio ou Número de série está correto, caso seja generico coloque => Generico e o número de patrimonio. Ex: Generico 0178"
            );
            console.log(err);
          });
        break;
      case "notebook":
        API().post("/create", {
          name: user,
          host_name: formData.host_name,
          serial_number: formData.serial_number,
          patrimonio: formData.patrimonio,
          tamanho: formData.tamanho,
          marca: formData.marca,
          modelo: formData.modelo,
          categoria: formData.categoria,
          cpu: formData.cpu,
          gpu: formData.gpu,
          memoriaRam: formData.memoriaRam,
          memoriaRamDDR: formData.memoriaRamDDR,
          hard_disk: formData.hard_disk,
          local: formData.local,
          departamento: formData.departamento,
          estado: formData.estado,
        })
          .then((response) => {
            if (response.status === 200) {
              navigateTo("/dashboard");
              alert("Notebook registrado com sucesso");
            }
          })
          .catch((err) => {
            alert(
              "Verifique as inforamações se o Patrimonio ou Número de série está correto, caso seja generico coloque => Generico e o número de patrimonio. Ex: Generico 0178"
            );
            console.log(err);
          });
        break;
      case "monitor":
        API().post("/create", {
          name: user,
          host_name: formData.host_name,
          serial_number: formData.serial_number,
          patrimonio: formData.patrimonio,
          marca: formData.marca,
          modelo: formData.modelo,
          categoria: formData.categoria,
          tipo_monitor: formData.tipo_monitor,
          formato: formData.formato,
          tamanho: formData.tamanho,
          local: formData.local,
          departamento: formData.departamento,
          estado: formData.estado,
        })
          .then((response) => {
            if (response.status === 200) {
              navigateTo("/dashboard");
              alert("Patrimônio registrado com sucesso");
            }
          })
          .catch((err) => {
            alert(
              "Verifique as inforamações se o Patrimonio ou Número de série está correto, caso seja generico coloque => Generico e o número de patrimonio. Ex: Generico 0178"
            );
            console.log(err);
          });
        break;
      case "impressora":
        API().post("/create", {
          name: user,
          host_name: formData.host_name,
          serial_number: formData.serial_number,
          patrimonio: formData.patrimonio,
          marca: formData.marca,
          modelo: formData.modelo,
          categoria: formData.categoria,
          tipo_impressora: formData.tipo_impressora,
          local: formData.local,
          departamento: formData.departamento,
          estado: formData.estado,
        })
          .then((response) => {
            if (response.status === 200) {
              navigateTo("/dashboard");
              alert("Impressora registrada com sucesso!");
            }
          })
          .catch((err) => {
            alert(
              "Verifique as inforamações se o Patrimonio ou Número de série está correto, caso seja generico coloque => Generico e o número de patrimonio. Ex: Generico 0178"
            );
            console.log(err);
          });
        break;
      case "telefone":
        API().post("/create", {
          name: user,
          host_name: formData.host_name,
          serial_number: formData.serial_number,
          patrimonio: formData.patrimonio,
          marca: formData.marca,
          modelo: formData.modelo,
          categoria: formData.categoria,
          local: formData.local,
          departamento: formData.departamento,
          estado: formData.estado,
        })
          .then((response) => {
            if (response.status === 200) {
              navigateTo("/dashboard");
              alert("Telefone registrado com sucesso!");
            }
          })
          .catch((err) => {
            alert(
              "Verifique as inforamações se o Patrimonio ou Número de série está correto, caso seja generico coloque => Generico e o número de patrimonio. Ex: Generico 0178"
            );
            console.log(err);
          });
        break;
      case "switch":
        API().post("/create", {
          name: user,
          host_name: formData.host_name,
          serial_number: formData.serial_number,
          patrimonio: formData.patrimonio,
          marca: formData.marca,
          modelo: formData.modelo,
          portas: formData.portas,
          poe: formData.poe,
          gerenciavel: formData.gerenciavel,
          categoria: formData.categoria,
          local: formData.local,
          departamento: formData.departamento,
          estado: formData.estado,
        })
          .then((response) => {
            if (response.status === 200) {
              navigateTo("/dashboard");
              alert("Impressora registrada com sucesso!");
            }
          })
          .catch((err) => {
            alert(
              "Verifique as inforamações se o Patrimonio ou Número de série está correto, caso seja generico coloque => Generico e o número de patrimonio. Ex: Generico 0178"
            );
            console.log(err);
          });
        break;
      case "servidor":
        API().post("/create", {
          name: user,
          host_name: formData.host_name,
          serial_number: formData.serial_number,
          patrimonio: formData.patrimonio,
          marca: formData.marca,
          modelo: formData.modelo,
          // Servidor
          portas: formData.portas,
          poe: formData.poe,
          gerenciavel: formData.gerenciavel,
          // Geral
          categoria: formData.categoria,
          local: formData.local,
          departamento: formData.departamento,
          estado: formData.estado,
        })
          .then((response) => {
            if (response.status === 200) {
              navigateTo("/dashboard");
              alert("Impressora registrada com sucesso!");
            }
          })
          .catch((err) => {
            alert( "Verifique as inforamações se o Patrimonio ou Número de série está correto, caso seja generico coloque => Generico e o número de patrimonio. Ex: Generico 0178"
            );
            console.log(err);
          });
        break;
     }
  };

  return (
    <>
      {page === 0 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Informações de cadastro</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="host_name">Host Name: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="host_name"
                    id="host_name"
                    placeholder="Host Name"
                    value={formData.host_name}
                    onChange={(e) => {
                      setFormData({ ...formData, host_name: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="patrimonio">Patrimonio: </label>
                </th>
                <th>
                  <input
                    type="number"
                    name="patrimonio"
                    id="patrimonio"
                    placeholder="patrimonio"
                    value={formData.patrimonio}
                    onChange={(e) => {
                      setFormData({ ...formData, patrimonio: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="serial_number">Serial Number:</label>
                </th>
                <th>
                  <input
                    type="text"
                    name="serial_number"
                    id="serial_number"
                    placeholder="Serial Number"
                    value={formData.serial_number}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        serial_number: e.target.value,
                      });
                    }}
                  />
                </th>
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
                    placeholder="Marca"
                    value={formData.marca}
                    onChange={(e) => {
                      setFormData({ ...formData, marca: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="modelo">Modelo:</label>
                </th>
                <th>
                  <input
                    type="text"
                    name="modelo"
                    id="modelo"
                    placeholder="Modelo"
                    value={formData.modelo}
                    onChange={(e) => {
                      setFormData({ ...formData, modelo: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="ategoria">Categoria: </label>
                </th>
                <td>
                  <select
                    name="categoria"
                    id="categoria"
                    className="appearance-select"
                    value={formData.categoria}
                    onChange={(e) => {
                      setFormData({ ...formData, categoria: e.target.value });
                    }}
                  >
                    <option value=""></option>
                    <option value="computador"> Computador</option>
                    <option value="notebook"> Notebook</option>
                    <option value="monitor"> Monitor</option>
                    <option value="impressora"> Impressora</option>
                    <option value="telefone"> Telefone</option>
                    <option value="switch"> Switch</option>
                    <option value="servidor"> Servidor</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <input
                    type="submit"
                    value="Cancel"
                    onClick={Cancel}
                    className="btn-form"
                  />
                </th>
                <th>
                  <input
                    type="submit"
                    value="submit"
                    onClick={Next}
                    className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 1 && formData.categoria === "telefone" ? (
        setPage(2)
      ) : page === 1 && formData.categoria === "impressora" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Impressora</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="tipo_impressora">Tipo da Impressora: </label>
                </th>
                <th>
                  <select
                    name="tipo_impressora"
                    id="tipo_impressora"
                    className="appearance-select"
                    value={formData.tipo_impressora}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        tipo_impressora: e.target.value,
                      });
                    }}
                  >
                    <option value=""></option>
                    <option value="termica"> Térmica</option>
                    <option value="laser"> Laser</option>
                    <option value="termica"> Cartão Térmica</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="submit"
                    value="Voltar"
                    onClick={Previous}
                    className="btn-form"
                  />
                </th>
                <th>
                  <input
                    type="submit"
                    value="Proximo"
                    onClick={Next}
                    className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 1 && formData.categoria === "computador" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Hardware</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="cpu">CPU:</label>
                </th>
                <th>
                  <input
                    type="text"
                    name="cpu"
                    id="cpu"
                    placeholder="CPU"
                    value={formData.cpu}
                    onChange={(e) => {
                      setFormData({ ...formData, cpu: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="gpu">GPU: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="gpu"
                    id="gpu"
                    placeholder="GPU"
                    value={formData.gpu}
                    onChange={(e) => {
                      setFormData({ ...formData, gpu: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="memoriaRam">Memory RAM: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="memoriaRam"
                    id="memoriaRam"
                    placeholder="Memoria Ram"
                    value={formData.memoriaRam}
                    onChange={(e) => {
                      setFormData({ ...formData, memoriaRam: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="memoriaRam">DDR: </label>
                </th>
                <th>
                  <select
                    name="memoriaRamDDR"
                    id="memoriaRamDDR"
                    className="appearance-select"
                    value={formData.memoriaRamDDR}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        memoriaRamDDR: e.target.value,
                      });
                    }}
                  >
                    <option value=""></option>
                    <option value="DDR2">DDR2</option>
                    <option value="DDR3">DDR3</option>
                    <option value="DDR4">DDR4</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="hard_disk">Hard Disk</label>
                </th>
                <th>
                  <input
                    type="text"
                    name="hard_disk"
                    id="hard_disk"
                    placeholder="Hard Disk"
                    value={formData.hard_disk}
                    onChange={(e) => {
                      setFormData({ ...formData, hard_disk: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="submit"
                    value="Anterior"
                    onClick={Previous}
                    className="btn-form"
                  />
                </th>
                <th>
                  <input
                    type="submit"
                    value="Proximo"
                    onClick={Next}
                    className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 1 && formData.categoria === "notebook" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Hardware</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="tamanho">Tamanho: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="tamanho"
                    id="tamanho"
                    placeholder="tamanho"
                    value={formData.tamanho}
                    onChange={(e) => {
                      setFormData({ ...formData, tamanho: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="cpu">CPU:</label>
                </th>
                <th>
                  <input
                    type="text"
                    name="cpu"
                    id="cpu"
                    placeholder="CPU"
                    value={formData.cpu}
                    onChange={(e) => {
                      setFormData({ ...formData, cpu: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="gpu">GPU: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="gpu"
                    id="gpu"
                    placeholder="GPU"
                    value={formData.gpu}
                    onChange={(e) => {
                      setFormData({ ...formData, gpu: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="memoriaRam">Memory RAM: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="memoriaRam"
                    id="memoriaRam"
                    placeholder="Memoria Ram"
                    value={formData.memoriaRam}
                    onChange={(e) => {
                      setFormData({ ...formData, memoriaRam: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="memoriaRam">DDR: </label>
                </th>
                <th>
                  <select
                    name="memoriaRamDDR"
                    id="memoriaRamDDR"
                    className="appearance-select"
                    value={formData.memoriaRamDDR}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        memoriaRamDDR: e.target.value,
                      });
                    }}
                  >
                    <option value=""></option>
                    <option value="DDR2">DDR2</option>
                    <option value="DDR3">DDR3</option>
                    <option value="DDR4">DDR4</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="hard_disk">Hard Disk</label>
                </th>
                <th>
                  <input
                    type="text"
                    name="hard_disk"
                    id="hard_disk"
                    placeholder="Hard Disk"
                    value={formData.hard_disk}
                    onChange={(e) => {
                      setFormData({ ...formData, hard_disk: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="submit"
                    value="Anterior"
                    onClick={Previous}
                    className="btn-form"
                  />
                </th>
                <th>
                  <input
                    type="submit"
                    value="Proximo"
                    onClick={Next}
                    className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 1 && formData.categoria === "monitor" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Informação sobre tamanho</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="tamanho">Tamanho: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="tamanho"
                    id="tamanho"
                    placeholder="Tamanho"
                    value={formData.tamanho}
                    onChange={(e) => {
                      setFormData({ ...formData, tamanho: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="tipo_monitor">Tipo de monitor: </label>
                </th>
                <th>
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
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="formato">Formato: </label>
                </th>
                <th>
                  <select
                    name="formato"
                    id="formato"
                    className="appearance-select"
                    value={formData.formato}
                    onChange={(e) => {
                      setFormData({ ...formData, formato: e.target.value });
                    }}
                  >
                    <option value=""></option>
                    <option value="16:9"> 16:9</option>
                    <option value="4:3"> 4:3</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="submit"
                    value="Anterior"
                    onClick={Previous}
                    className="btn-form"
                  />
                </th>
                <th>
                  <input
                    type="submit"
                    value="Proximo"
                    onClick={Next}
                    className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 1 && formData.categoria === "switch" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Informação sobre Switch</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="portas">Portas: </label>
                </th>
                <th>
                  <input
                    type="number"
                    name="portas"
                    id="portas"
                    placeholder="Portas"
                    value={formData.portas}
                    onChange={(e) => {
                      setFormData({ ...formData, portas: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="poe">POE: </label>
                </th>
                <th>
                  <select
                    name="poe"
                    id="poe"
                    className="appearance-select"
                    value={formData.poe}
                    onChange={(e) => {
                      setFormData({ ...formData, poe: e.target.value });
                    }}
                  >
                    <option value=""></option>
                    <option value="sim"> Sim</option>
                    <option value="nao"> Não</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="gerenciavel"> Gerenciavel: </label>
                </th>
                <th>
                  <select
                    name="gerenciavel"
                    id="gerenciavel"
                    className="appearance-select"
                    value={formData.gerenciavel}
                    onChange={(e) => {
                      setFormData({ ...formData, gerenciavel: e.target.value });
                    }}
                  >
                    <option value=""></option>
                    <option value="sim"> Sim</option>
                    <option value="nao"> Não</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="submit"
                    value="Anterior"
                    onClick={Previous}
                    className="btn-form"
                  />
                </th>
                <th>
                  <input
                    type="submit"
                    value="Proximo"
                    onClick={Next}
                    className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 1 && formData.categoria === "servidor" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Informação sobre Servidor</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="cpu">CPU:</label>
                </th>
                <th>
                  <input
                    type="text"
                    name="cpu"
                    id="cpu"
                    placeholder="CPU"
                    value={formData.cpu}
                    onChange={(e) => {
                      setFormData({ ...formData, cpu: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="gpu">GPU: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="gpu"
                    id="gpu"
                    placeholder="GPU"
                    value={formData.gpu}
                    onChange={(e) => {
                      setFormData({ ...formData, gpu: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="memoriaRam">Memory RAM: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="memoriaRam"
                    id="memoriaRam"
                    placeholder="Memoria Ram"
                    value={formData.memoriaRam}
                    onChange={(e) => {
                      setFormData({ ...formData, memoriaRam: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="memoriaRam">DDR: </label>
                </th>
                <th>
                  <select
                    name="memoriaRamDDR"
                    id="memoriaRamDDR"
                    className="appearance-select"
                    value={formData.memoriaRamDDR}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        memoriaRamDDR: e.target.value,
                      });
                    }}
                  >
                    <option value=""></option>
                    <option value="DDR2">DDR2</option>
                    <option value="DDR3">DDR3</option>
                    <option value="DDR4">DDR4</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="hard_disk">Hard Disk I: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="hard_disk"
                    id="hard_disk"
                    placeholder="Hard Disk"
                    value={formData.hard_disk}
                    onChange={(e) => {
                      setFormData({ ...formData, hard_disk: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="hard_disk">Hard Disk II: </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="hard_disk_2"
                    id="hard_disk_2"
                    placeholder="Hard Disk II"
                    value={formData.hard_disk_2}
                    onChange={(e) => {
                      setFormData({ ...formData, hard_disk_2: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="power_suply">Energia</label>
                </th>
                <th>
                  <input
                    type="text"
                    name="power_suply"
                    id="power_suply"
                    placeholder="Fonte de energia"
                    value={formData.power_suply}
                    onChange={(e) => {
                      setFormData({ ...formData, power_suply: e.target.value });
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="sistema_operacional">
                    Sistema Operacional
                  </label>
                </th>
                <th>
                  <input
                    type="text"
                    name="sistema_operacional"
                    id="sistema_operacional"
                    placeholder="Sistema Operacional"
                    value={formData.sistema_operacional}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        sistema_operacional: e.target.value,
                      });
                    }}
                  />
                </th>
                <tr>
                  <th>
                    <label htmlFor="acesso_remoto">Acesso remoto</label>
                  </th>
                  <th>
                    <input
                      type="text"
                      name="acesso_remoto"
                      id="acesso_remoto"
                      placeholder="Sistema Operacional"
                      value={formData.acesso_remoto}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          acesso_remoto: e.target.value,
                        });
                      }}
                    />
                  </th>
                </tr>
              </tr>
              <tr>
                <th>
                  <input
                    type="submit"
                    value="Anterior"
                    onClick={Previous}
                    className="btn-form"
                  />
                </th>
                <th>
                  <input
                    type="submit"
                    value="Proximo"
                    onClick={Next}
                    className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 2 ? (
        <form onSubmit={handleSubmit(onSubmit)} >
          <h1>Local</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="local">Local:</label>
                </th>
                <th>
                  <input type="text" name="local" id="local" placeholder="Local"
                    value={formData.local}
                    onChange={(e)=>{
                    setFormData({...formData, local: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="departamento">Departamento:</label>
                </th>
                <th>
                  <input type="text" name="departamento" id="departamento"placeholder="Departamento"
                    value={formData.departamento}
                    onChange={(e)=>{
                    setFormData({...formData, departamento: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="estado">Estado: </label>
                </th>
                <th>
                  <select name="estado" id="estado" className="appearance-select"
                     value={formData.estado}
                     onChange={(e)=>{
                     setFormData({...formData, estado: e.target.value })
                     }}
                  >
                    <option value=""></option>
                    <option value="ativo"> Ativo</option>
                    <option value="manutenção">Manutenção</option>
                    <option value="reserva">Reserva</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <input type="submit" value="Anterior" onClick={Previous} className="btn-form"
                  />
                </th>
                <th>
                  <input type="submit" value="Proximo" onClick={Next} className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 3 ? (
        <div>
          <h1>Confirmação de dados</h1>
          <div id="confirmation-data">
            <table>
              <tbody>
                <tr>
                  <th>
                    <strong>Nome do host: </strong>
                  </th>
                  <th>{formData.host_name}</th>
                </tr>
                <tr>
                  <th>
                    <strong>Número do Patrimonio: </strong>
                  </th>
                  <th>{formData.patrimonio}</th>
                </tr>
                <tr>
                  <th>
                    <strong>Número de série: </strong>
                  </th>
                  <th>{formData.serial_number}</th>
                </tr>

                {   formData.categoria === "computador" ? (
                  <>
                    <tr>
                      <th>
                        <strong>CPU: </strong>
                      </th>
                      <th>{formData.cpu}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>GPU: </strong>
                      </th>
                      <th>{formData.gpu}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>Memória RAM: </strong>
                      </th>
                      <th>{formData.memoriaRam}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>DDR:  </strong>
                      </th>
                      <th>{formData.memoriaRamDDR}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>Disco rígido: </strong>
                      </th>
                      <th>{formData.hard_disk}</th>
                    </tr>
                  </>
                ) : formData.categoria === "impressora" ? (
                  <>
                    <tr>
                      <th>
                        <strong>Tipo da Impressora: </strong>
                      </th>
                      <th>{formData.tipo_impressora}</th>
                    </tr>
                  </>
                ) : formData.categoria === "notebook"   ? (
                  <>
                    <tr>
                      <th>
                        <strong>Tamanho : </strong>
                      </th>
                      <th>{formData.tamanho}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>CPU: </strong>
                      </th>
                      <th>{formData.cpu}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>GPU: </strong>
                      </th>
                      <th>{formData.gpu}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>Memória RAM: </strong>
                      </th>
                      <th>{formData.memoriaRam}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>DDR:  </strong>
                      </th>
                      <th>{formData.memoriaRamDDR}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>Disco rígido: </strong>
                      </th>
                      <th>{formData.hard_disk}</th>
                    </tr>
                  </>
                ) : formData.categoria === "monitor"    ? (
                  <>
                  <tr>
                    <th>Tamanho: </th>
                    <th>{formData.tamanho}</th>
                  </tr>
                  <tr>
                    <th>Formato: </th>
                    <th>{formData.formato}</th>
                  </tr>
                  <tr>
                    <th>Tipo: </th>
                    <th>{formData.tipo_monitor}</th>
                  </tr>
                  </>
                ) : formData.categoria === "switch"     ? (
                  <>
                  <tr>
                    <th>Portas: </th>
                    <th>{formData.portas}</th>
                  </tr>
                  <tr>
                    <th>POE: </th>
                    <th>{formData.poe}</th>
                  </tr>
                  <tr>
                    <th>Gerenciavel: </th>
                    <th>{formData.gerenciavel}</th>
                  </tr>
                  </>
                ) : formData.categoria === "servidor"   ? (
                  <>
                  <tr>
                      <th>
                        <strong>CPU: </strong>
                      </th>
                      <th>{formData.cpu}</th>
                    </tr>
                    <tr>
                      <th><strong>GPU: </strong></th>
                      <th>{formData.gpu}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>Memória RAM: </strong>
                      </th>
                      <th>{formData.memoriaRam}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>DDR:  </strong>
                      </th>
                      <th>{formData.memoriaRamDDR}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>Disco rígido I: </strong>
                      </th>
                      <th>{formData.hard_disk}</th>
                    </tr>
                    <tr>
                      <th>
                        <strong>Disco rígido II: </strong>
                      </th>
                      <th>{formData.hard_disk_2}</th>
                    </tr>
                    <tr>
                      <th><strong>Energia</strong></th>
                      <th>{formData.power_suply}</th>
                    </tr>
                    <tr>
                      <th>Sistema Operacional</th>
                      <th>{formData.sistema_operacional}</th>
                    </tr>
                    <tr>
                      <th>Acesso remoto</th>
                      <th>{formData.acesso_remoto}</th>
                    </tr>
                  </>
                ) : null}
                <tr >
                  <th >
                    <strong>Marca: </strong>
                  </th>
                  <th>{formData.marca}</th>
                </tr>
                <tr>
                  <th>
                    <strong>Modelo: </strong>
                  </th>
                  <th>{formData.modelo}</th>
                </tr>
               
                <tr>
                  <th>
                    <strong>Localização: </strong>
                  </th>
                  <th>{formData.local}</th>
                </tr>
                <tr>
                  <th>
                    <strong>Departamento: </strong>
                  </th>
                  <th>{formData.departamento}</th>
                </tr>
                <tr>
                  <th>
                    <strong>Estado: </strong>
                  </th>
                  <th> {formData.estado}</th>
                </tr>

                <tr>
                  <th>Confirma todos os dados acima? </th>
                  <th>
                    <input
                      type="checkbox"
                      name="confirmation"
                      value={formData.confirmation}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          confirmation: !formData.confirmation,
                        });
                      }}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      type="submit"
                      value="Anterior"
                      onClick={Previous}
                      className="btn-form"
                    />
                  </th>
                  <th>
                    <input
                      type="submit"
                      value="confirmar"
                      onClick={Confirm}
                      className="btn-form"
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Form;
