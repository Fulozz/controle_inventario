import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [page, setPage] = useState(0)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hostName: "",
    serialNumber: "",
    marca: "",
    modelo: "",
    cpu: "",
    gpu: "",
    memoryRam: "",
    hardDisk: "",
    local: "",
    departamento: "",
    state: "",
  });


  const { handleSubmit } = useForm({
    initialValues: formData,
  });

  useEffect(() => {
    // Rerender the form on input change
    setFormData(formData);
  }, [formData]);

  const Next = () =>{ 
    setPage(page + 1)
  };
  const Previous = () => setPage(page - 1);
  const Cancel = () => navigate("/dashboard");

  const onSubmit = async (data) => {
    // Do something with the submitted data
    try{
      const JsonData = JSON.stringify(data)
      console.log(JsonData);
    } catch(err){
      console.log(err);
    }
  };

  return (
<>
        { page === 0 ? (
        <form onSubmit={handleSubmit(onSubmit)} >
              <div>
            <h1>Informações de cadastro</h1>
            <label htmlFor="hostName">Host Name</label>
            <input
              type="text"
              name="hostName"
              id="hostName"
              placeholder="Host Name"
              value={formData.hostName}
              onChange={(e)=>{
                setFormData({...formData, hostName: e.target.value}),
                console.log(formData.hostName)
              }}
            />
          </div>
          <div>
            <label htmlFor="serialNumber">Serial Number</label>
            <input
              type="text"
              name="serialNumber"
              id="serialNumber"
              value={formData.serialNumber}
              onChange={(e)=>{
                setFormData({...formData, serialNumber: e.target.value}),
                console.log(formData.serialNumber)
              }}
            />
          </div>
          <div>
            <label htmlFor="marca">Marca:</label>
            <input
              type="text"
              name="marca"
              id="marca"
              placeholder="Marca"
              value={formData.marca}
              onChange={(e)=>{
                setFormData({...formData, marca: e.target.value}),
                console.log(formData.marca)
              }}
            />
          </div>
          <div>
            <label htmlFor="modelo">Modelo:</label>
            <input
              type="text"
              name="modelo"
              id="modelo"
              placeholder="modelo"
              value={formData.modelo}
              onChange={(e)=>{
                setFormData({...formData, modelo: e.target.value}),
                console.log(formData.modelo)
              }}
            />
          </div>
          <button type="button" onClick={Previous}>
              Anterior
            </button>
            <input type="submit" value="submit" onClick={Next} className="btn-form"
                  />
        </form>
      ) : page === 1 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1>Hardware</h1>
              <div>
                <label htmlFor="cpu">CPU</label>
                <input
                  type="text"
                  name="cpu"
                  id="cpu"
                  placeholder="CPU"
                  value={formData.cpu}
                  onChange={(e)=>{
                  setFormData({...formData, cpu: e.target.value}),
                  console.log(formData.cpu)
                  }}
                />
              </div>
              <div>
                <label htmlFor="gpu">GPU: </label>
                <input
                  type="text"
                  name="gpu"
                  id="gpu"
                  placeholder="GPU"
                  value={formData.gpu}
                  onChange={(e)=>{
                  setFormData({...formData, gpu: e.target.value}),
                  console.log(formData.gpu)
                  }}
                />
              </div>
              <div>
                <label htmlFor="memoryRam">Memory RAM DDR: </label>
                <select name="memoryRam" id="memoryRam" 
                value={formData.memoryRam}
                onChange={(e)=>{
                setFormData({...formData, memoryRam: e.target.value }),
                console.log(formData.memoryRam)
                }}
                >
                  <option value="" selected></option>
                  <option value="DDR2">DDR2</option>
                  <option value="DDR3">DDR3</option>
                  <option value="DDR4">DDR4</option>
                </select>
              </div>
              <div>
                <label htmlFor="hardDisk">Hard Disk</label>
                <input
                  type="text"
                  name="hardDisk"
                  id="hardDisk"
                  placeholder="Hard Disk"
                  value={formData.hardDisk}
                    onChange={(e)=>{
                    setFormData({...formData, hardDisk: e.target.value}),
                    console.log(formData.hardDisk)
                    }}
                />
              </div>
            </div>
            <button type="button" onClick={Cancel}>
             Anterior
            </button>
            <input type="submit" value="submit" onClick={Next} className="btn-form"
                  />
        </form>
      ) : page === 2 ? (
        <form onSubmit={handleSubmit(onSubmit)}> 
          <div>
            <h1>Local</h1>
              <div>
                <label htmlFor="local">local</label>
                <input
                  type="text"
                  name="local"
                  id="local"
                  placeholder="local"
                  value={formData.local}
                    onChange={(e)=>{
                    setFormData({...formData, local: e.target.value}),
                    console.log(formData.local)
                    }}
                />
              </div>
              <div>
                <label htmlFor="departamento">Departamento: </label>
                <input
                  type="text"
                  name="departamento"
                  id="departamento"
                  placeholder="departamento"
                  value={formData.departamento}
                    onChange={(e)=>{
                    setFormData({...formData, departamento: e.target.value}),
                    console.log(formData.departamento)
                    }}
                />
              </div>
              <div>
                <label htmlFor="state">Estado: </label>
                <select name="state" id="state" 
                value={formData.state}
                onChange={(e) => {
                  setFormData({ ...formData, state: e.target.value });
                  console.log(formData.state);
                }}
                >
                  <option value="" selected></option>
                  <option value="Ativo">Ativo</option>
                  <option value="Manutenção">Manutenção</option>
                  <option value="Reserva">Reserva</option>
                </select>
                </div>
            </div>
            <button type="button" onClick={Previous}>
             Anterior
            </button>
            <input type="submit" value="submit" onClick={Next} className="btn-form"
                  />
        </form>
      ) : page === 3 ? (
        console.log(formData),
        <div>
          <h1>Confirmação de dados</h1>
          <div id="confirmation-data">
            <p>Nome do host: {formData.hostName}</p>
            <p>Número de série: {formData.serialNumber}</p>
            <p>Marca: {formData.marca}</p>
            <p>Modelo: {formData.modelo}</p>
            <p>CPU: {formData.cpu}</p>
            <p>GPU: {formData.gpu}</p>
            <p>Memória RAM: {formData.memoryRam}</p>
            <p>Disco rígido: {formData.hardDisk}</p>
            <p>Localização: {formData.local}</p>
            <p>Departamento: {formData.departamento}</p>
            <p>Condição: {formData.state}</p>
          </div>
          <button type="button" onClick={Previous}>
             Anterior
            </button>
          <button type="button" onClick={onSubmit}>
            Confirmar
          </button>
        </div>
      ) : null}
        
        </>
        )
      }

      export default Form