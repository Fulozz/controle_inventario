import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form";
import Axios from "axios";



const Form = () => {
  const [user, setUser] = useState(null)
  
  useEffect(()=>{
    const requestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('jwt')
      }),
    };
    fetch('http://localhost:3000/api/v1/user', requestInit).then((response) => {
      response.json().then((data) => {
        setUser(data.name);
      });
    });
  }, []);
  
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hostName: "",
    serialNumber: "",
    patrimonio: "",
    marca: "",
    modelo: "",
    tipoImpressora: "",
    tamanho: "",
    tipo: "",
    formato: "",
    category: "",
    cpu: "",
    gpu: "",
    memoriaRam: "",
    memoriaRamDDR: "",
    hardDisk: "",
    local: "",
    departamento: "",
    status: "",
    confirmation: false,
  });

  const { handleSubmit } = useForm({
    initialValues: formData
  });

  useEffect(() => {
    // Rerender the form on input change
    setFormData(formData);
  }, [formData]);

  const Next = () => setPage(page + 1);
  const Previous = () => setPage(page - 1);
  const Cancel = () => navigate("/dashboard");

  const onSubmit = async (data) => {
    // Do something with the submitted data
    
    if (data.confirmation === false) {
      alert("Você deve confirmar todos os dados acima para continuar.");
      return;
    }
  };
//    Axios.post('http://localhost:3000/api/v1/create', data)

const Confirm = async () =>{
  
    switch (formData.category) {
      case "computador":
        
        Axios.post('http://localhost:3000/api/v1/create', {
          name: user,
          host_name: formData.hostName,
          serial_number: formData.serialNumber,
          patrimonio: formData.patrimonio,
          marca: formData.marca,
          modelo: formData.modelo,
          category: formData.category,
          cpu: formData.cpu,
          gpu: formData.gpu,
          memoriaRam: formData.memoriaRam,
          memoriaRamDDR: formData.memoriaRamDDR,
          hardDisk: formData.hardDisk,
          local: formData.local,
          departamento: formData.departamento,
          status: formData.status
        }).then((response)=>{
          console.log(response)
        }).catch((err)=>{
          console.log(err)
        })
        break;
    
      default:
        break;
    }
  
}



  return (
    <>
      {page === 0 ? (
        <form onSubmit={handleSubmit(onSubmit)} >
          <h1>Informações de cadastro</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="hostName">Host Name: </label>
                </th>
                <th>
                  <input
                    type="text" name="hostName"   id="hostName"  placeholder="Host Name"
                    value={formData.hostName}
                    onChange={(e)=>{
                      setFormData({...formData, hostName: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="patrimonio">Patrimonio: </label>
                </th>
                <th>
                  <input type="number" name="patrimonio" id="patrimonio" placeholder="patrimonio"
                    value={formData.patrimonio}
                    onChange={(e)=>{
                      setFormData({...formData, patrimonio: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="serialNumber">Serial Number:</label>
                </th>
                <th>
                  <input type="text" name="serialNumber" id="serialNumber" placeholder="Serial Number"
                    value={formData.serialNumber}
                    onChange={(e)=>{
                      setFormData({...formData, serialNumber: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="marca">Marca: </label>
                </th>
                <th>
                  <input type="text"   name="marca" id="marca" placeholder="Marca"
                    value={formData.marca}
                    onChange={(e)=>{
                      setFormData({...formData, marca: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="modelo">Modelo:</label>
                </th>
                <th>
                  <input type="text" name="modelo" id="modelo" placeholder="Modelo"
                    value={formData.modelo}
                    onChange={(e)=>{
                      setFormData({...formData, modelo: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                <label htmlFor="Categoria">Categoria: </label>
                </th>
                <th>
                    <select name="category" id="category" className="appearance-select"
                      value={formData.category}
                      onChange={(e)=>{
                      setFormData({...formData, category: e.target.value })
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
                  </th>
              </tr>
              <tr>
                <th>
                  <input type="submit"  value="Cancel"   onClick={Cancel}  className="btn-form"  />
                </th>
                <th>
                  <input type="submit" value="submit" onClick={Next} className="btn-form" />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 1 && formData.category === "telefone" ? (setPage(2)) : page === 1 && formData.category === "impressora" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Impressora</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="tipoImpressora">Tipo da Impressora: </label>
                </th>
                <th>
                    <select name="tipoImpressora" id="tipoImpressora" className="appearance-select"
                      value={formData.tipoImpressora}
                      onChange={(e)=>{
                      setFormData({...formData, tipoImpressora: e.target.value })
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
                  <input type="submit"  value="Voltar"   onClick={Previous}  className="btn-form"  />
                </th>
                <th>
                  <input type="submit" value="submit" onClick={Next} className="btn-form" />
                </th>
              </tr>
            </tbody>
            </table>
        </form>
      ) : page === 1 && formData.category === "computador" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Hardware</h1>
          <table >
            <tbody>
              <tr>
                <th>
                  <label htmlFor="cpu">CPU:</label>
                </th>
                <th>
                  <input type="text" name="cpu" id="cpu" placeholder="CPU"
                    value={formData.cpu}
                    onChange={(e)=>{
                    setFormData({...formData, cpu: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="gpu">GPU: </label>
                </th>
                <th>
                  <input type="text"  name="gpu"  id="gpu" placeholder="GPU"
                    value={formData.gpu}
                    onChange={(e)=>{
                    setFormData({...formData, gpu: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="memoriaRam">Memory RAM: </label>
                </th>
                <th>
                <input type="text" name="memoriaRam" id="cpu" placeholder="CPU"
                    value={formData.memoriaRam}
                    onChange={(e)=>{
                    setFormData({...formData, memoriaRam: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                <label htmlFor="memoriaRam">DDR: </label>
                </th>
                <th>
                <select name="memoriaRamDDR"  id="memoriaRamDDR" className="appearance-select"
                    value={formData.memoriaRamDDR}
                    onChange={(e)=>{
                    setFormData({...formData, memoriaRamDDR: e.target.value })
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
                  <label htmlFor="hardDisk">Hard Disk</label>
                </th>
                <th>
                  <input type="text" name="hardDisk"   id="hardDisk" placeholder="Hard Disk"
                  value={formData.hardDisk}
                  onChange={(e)=>{
                  setFormData({...formData, hardDisk: e.target.value})
                  }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input type="submit" value="Anterior" onClick={Previous} className="btn-form"
                  />
                </th>
                <th>
                  <input type="submit" value="submit"  onClick={Next} className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ) : page === 1 && formData.category === "notebook" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Hardware</h1>
          <table >
            <tbody>
              <tr>
                  <th>
                    <label htmlFor="tamanho">Tamanho: </label>
                  </th>
                  <th>
                    <input type="text"  name="tamanho"  id="tamanho" placeholder="tamanho"
                      value={formData.tamanho}
                      onChange={(e)=>{
                      setFormData({...formData, tamanho: e.target.value})
                      }}
                    />
                  </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="cpu">CPU:</label>
                </th>
                <th>
                  <input type="text" name="cpu" id="cpu" placeholder="CPU"
                    value={formData.cpu}
                    onChange={(e)=>{
                    setFormData({...formData, cpu: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="gpu">GPU: </label>
                </th>
                <th>
                  <input type="text"  name="gpu"  id="gpu" placeholder="GPU"
                    value={formData.gpu}
                    onChange={(e)=>{
                    setFormData({...formData, gpu: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label htmlFor="memoriaRam">Memory RAM: </label>
                </th>
                <th>
                <input type="text" name="memoriaRam" id="cpu" placeholder="CPU"
                    value={formData.memoriaRam}
                    onChange={(e)=>{
                    setFormData({...formData, memoriaRam: e.target.value})
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                <label htmlFor="memoriaRam">DDR: </label>
                </th>
                <th>
                <select name="memoriaRamDDR"  id="memoriaRamDDR" className="appearance-select"
                    value={formData.memoriaRamDDR}
                    onChange={(e)=>{
                    setFormData({...formData, memoriaRamDDR: e.target.value })
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
                  <label htmlFor="hardDisk">Hard Disk</label>
                </th>
                <th>
                  <input type="text" name="hardDisk"   id="hardDisk" placeholder="Hard Disk"
                  value={formData.hardDisk}
                  onChange={(e)=>{
                  setFormData({...formData, hardDisk: e.target.value})
                  }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input type="submit" value="Anterior" onClick={Previous} className="btn-form"
                  />
                </th>
                <th>
                  <input type="submit" value="submit"  onClick={Next} className="btn-form"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      ): page === 1 && formData.category === "monitor" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Informação sobre tamanho</h1>
            <table>
              <tbody>
              <tr>
                  <th>
                    <label htmlFor="tamanho">Tamanho: </label>
                  </th>
                  <th>
                    <input type="text"  name="tamanho"  id="tamanho" placeholder="Tamanho"
                      value={formData.tamanho}
                      onChange={(e)=>{
                      setFormData({...formData, tamanho: e.target.value})
                      }}
                    />
                  </th>
              </tr>
              <tr>
                <th>
                <label htmlFor="tipo">Tipo: </label>
                </th>
                <th>
                <select name="tipo"  id="tipo" className="appearance-select"
                    value={formData.tipo}
                    onChange={(e)=>{
                    setFormData({...formData, tipo: e.target.value })
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
                <select name="formato"  id="formato" className="appearance-select"
                    value={formData.formato}
                    onChange={(e)=>{
                    setFormData({...formData, formato: e.target.value })
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
                  <input type="submit" value="Anterior" onClick={Previous} className="btn-form"
                  />
                </th>
                <th>
                  <input type="submit" value="submit"  onClick={Next} className="btn-form"
                  />
                </th>
              </tr>
              </tbody>
            </table>
        </form>
      )  : page === 2 ? (
        <form onSubmit={handleSubmit(onSubmit)} >
          <h1>Local</h1>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="local">Local:</label>
                </th>
                <th>
                  <input type="text" name="local" id="local" placeholder="local"
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
                  <label htmlFor="status">Status: </label>
                </th>
                <th>
                  <select name="status" id="status" className="appearance-select"
                     value={formData.status}
                     onChange={(e)=>{
                     setFormData({...formData, status: e.target.value })
                     }}
                  >
                    <option value=""></option>
                    <option value="Ativo"> Ativo</option>
                    <option value="Manutenção">Manutenção</option>
                    <option value="Reserva">Reserva</option>
                  </select>
                </th>
              </tr>
              <tr>
                <th>
                  <input type="submit" value="Anterior" onClick={Previous} className="btn-form"
                  />
                </th>
                <th>
                  <input type="submit" value="submit" onClick={Next} className="btn-form"
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
                    <th>{formData.hostName}</th>
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
                    <th>{formData.serialNumber}</th>
                  </tr>
                  <tr>
                    <th>
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
                  {formData.category === "computador" ? (
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
                      <strong>Disco rígido: </strong>
                    </th>
                    <th>{formData.hardDisk}</th>
                  </tr>
                    </>
                  ) : formData.category === "tipoImpressora"  ? (
                    <>
                      <tr>
                        <th>
                        <strong>Tipo da Impressora: </strong>
                        </th>
                        <th>{formData.tipoImpressora}</th>
                      </tr>
                    </>
                    ) : null}
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
                      <strong>Status: </strong>
                    </th>
                    <th> {formData.status}</th>
                  </tr>

                  <tr>
                    <th>Confirma todos os dados acima? </th>
                    <th>
                      <input type="checkbox" 
                      name="confirmation"
                      value={formData.confirmation}
                      onChange={(e)=>{
                      setFormData({...formData, confirmation: !formData.confirmation })
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
                        value="confirm"
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
