import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Axios from 'axios'
const Form = () => {

  const [page, setPage] = useState(0)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hostName: "",
    serialNumber: "",
    patrimonio: "",
    marca: "",
    modelo: "",
    cpu: "",
    gpu: "",
    memoryRam: "",
    hardDisk: "",
    local: "",
    departamento: "",
    status: "",
  });

  const { register, handleSubmit } = useForm({
    initialValues: formData,
  });

 
  const Next = ()=>{
    setPage(page + 1)
  }
  const Previous = ()=>{
    
      setPage(page - 1)
    
  }
  const Cancel = () =>{
    navigate('/dashboard')
  }

  const onSubmit = (data) => {
    // Do something with the submitted data
    setFormData({
      hostName: data.hostName,
      serialNumber: data.serialNumber,
      patrimonio: data.patrimonio,
      marca: data.marca,
      modelo: data.modelo,
      cpu: data.cpu,
      gpu: data.gpu,
      memoryRam: data.memoryRam,
      hardDisk: data.hardDisk,
      local: data.local,
      departamento: data.departamento,
      status: data.status,
    });
    console.log(data);
  };
  
  const confirm = (formData)=>{
    // const jsonString = JSON.stringify(formData) 
    Axios.post('http://localhost:3000/api/v1/create',
    {
      hostName: formData.hostName,
      serialNumber: formData.serialNumber,
      patrimonio: formData.patrimonio,
      marca: formData.marca,
      modelo: formData.modelo,
      cpu: formData.cpu,
      gpu: formData.gpu,
      memoryRam: formData.memoryRam,
      hardDisk: formData.hardDisk,
      local: formData.local,
      departamento: formData.departamento,
      status: formData.status,
    })
  }
  return (
<>
      {page === 0 ? (
        <form onSubmit={handleSubmit(onSubmit)}  className="form">
          <h1>Informações de cadastro</h1>
          <table>
          <tbody>
            <tr>
              <th> <label htmlFor="hostName">Host Name: </label></th>
              <th> 
                <input type="text" name="hostName" id="hostName" placeholder="Host Name" 
                {...register("hostName", { required: true, maxLength: 30 })} /> 
              </th>
            </tr>
            <tr>
              <th><label htmlFor="patrimonio">Patrimonio: </label></th>
              <th>
                <input type="text" name="patrimonio"  id="patrimonio" placeholder="patrimonio"
                {...register("patrimonio", { required: true, maxLength: 30 })} />
              </th>
            </tr>
            <tr>
              <th><label htmlFor="serialNumber">Serial Number:</label></th>
              <th>
                <input type="text" name="serialNumber" id="serialNumber" placeholder="Serial Number" 
                {...register("serialNumber", { required: true, maxLength: 30 })} />
              </th>
            </tr>
            <tr>
              <th> <label htmlFor="marca">Marca: </label></th>
              <th>
                <input type="text" name="marca" id="marca" placeholder="Marca" 
                {...register("marca", { required: true, maxLength: 30 })}/>
              </th>
            </tr>
            <tr>
              <th><label htmlFor="modelo">Modelo:</label></th>
              <th>
                <input type="text" name="modelo" id="modelo" placeholder="Modelo"
                {...register("modelo", { required: true, maxLength: 30 })} />
              </th>
            </tr>
            <tr>
              
              <th><input type="submit" value="submit" onClick={Next} className="btn-form" /></th>
            </tr>
            </tbody>
          </table>
        </form>
      ) : page === 1 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Hardware</h1>
          <table className="form">
            <tbody>
            <tr>
              <th><label htmlFor="cpu">CPU</label></th>
              <th>
                <input type="text" name="cpu"  id="cpu" placeholder="CPU"
                {...register("cpu", { required: true, maxLength: 30 })}/>
              </th>
            </tr>
            <tr>
              <th><label htmlFor="gpu">GPU</label></th>
              <th>
                <input type="text" name="gpu" id="gpu" placeholder="GPU"
                {...register("gpu", { required: true, maxLength: 30 })}/>
              </th>
            </tr>
            <tr>
              <th><label htmlFor="memoryRam">Memory RAM</label></th>
              <th>
                <select name="memoryRam" id="memoryRam" className="appearance-select"
                {...register("memoryRam", { required: true, maxLength: 30 })}>
                  <option value="DDR2">DDR2</option>
                  <option value="DDR3">DDR3</option>
                  <option value="DDR4">DDR4</option>
                </select>
              </th>
            </tr>
            <tr>
              <th><label htmlFor="hardDisk">Hard Disk</label></th>
              <th>
                <input type="text" name="hardDisk" id="hardDisk" placeholder="Hard Disk"
                {...register("hardDisk", { required: true, maxLength: 30 })} />
              </th>
            </tr>
            <tr>
              
              <th><input type="submit" value="Proximo" onClick={Next} className="btn-form" /></th>
            </tr>
            </tbody>
          </table>
        </form>
      ) : page === 2 ? (
        <form onSubmit={handleSubmit(onSubmit)} className="form"> 
        <h1>Local</h1>
        <table>
          <tbody>
          <tr>
            <th><label htmlFor="local">Local:</label></th>
            <th>
              <input type="text" name="local" id="local" placeholder="local"
              {...register("local", { required: true, maxLength: 30 })} />
            </th>
          </tr>
          <tr>
            <th><label htmlFor="departamento">Departamento:</label></th>
            <th>
              <input type="text" name="departamento" id="departamento" placeholder="Departamento"
              {...register("departamento", { required: true, maxLength: 30 })} />
            </th>
          </tr>
          <tr>
            <th><label htmlFor="status">Status: </label></th>
            <th>
              <select name="status" id="status" className="appearance-select" 
              {...register("status", { required: true, maxLength: 30 })}>
                  <option value="Ativo" selected>Ativo</option>
                  <option value="Manutenção">Manutenção</option>
                  <option value="Reserva">Reserva</option>
              </select>
            </th>
          </tr>
          <tr>
              <th><input type="submit" value="Proximo" onClick={Next} className="btn-form" /></th>
            </tr>
            </tbody>
        </table>
        </form>
      ) : page === 3 ? (
        console.log(formData),
      
        <div id="confirmation-data">
          <h1>Confirmação de dados</h1>
            <table>
              <tbody>
              <tr>
                <th><strong>Nome do host: </strong></th>
                <th>{formData.hostName}</th>
              </tr>
              <tr>
                <th><strong>Número do Patrimonio: </strong></th>
                <th>{formData.patrimonio}</th>
              </tr>
              <tr>
                <th><strong>Número de série: </strong></th>
                <th>{formData.serialNumber}</th>
              </tr>
              <tr>
                <th><strong>Marca: </strong></th>
                <th>{formData.marca}</th>
              </tr>
              <tr>
                <th><strong>Modelo: </strong></th>
                <th>{formData.modelo}</th>
              </tr>
              <tr>
                <th><strong>CPU: </strong></th>
                <th>{formData.cpu}</th>
              </tr>
              <tr>
                <th><strong>GPU: </strong></th>
                <th>{formData.gpu}</th>
              </tr>
              <tr>
                <th><strong>Memória RAM: </strong></th>
                <th>{formData.memoryRam}</th>
              </tr>
              <tr>
                <th><strong>Disco rígido: </strong></th>
                <th>{formData.hardDisk}</th>
              </tr>
              <tr>
                <th><strong>Localização: </strong></th>
                <th>{formData.local}</th>
              </tr>
              <tr>
                <th><strong>Departamento: </strong></th>
                <th>{formData.departamento}</th>
              </tr>
              <tr>
                <th><strong>Status: </strong></th>
                <th>{formData.status}</th>
              </tr>
              <tr>
              <th><input type="submit" value="Anterior" onClick={Previous} className="btn-form" /></th>
              <th><input type="submit" value="confirm" onClick={confirm} className="btn-form" /></th>
            </tr>
              </tbody>
            </table>
          </div>
      ) : null}
        
        </>
        )
      }

      export default Form