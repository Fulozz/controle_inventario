import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [page, setPage] = useState(0)

  const [formData, setFormData] = useState({
    hostName: "",
    serialNumber: "",
    brand: "",
    model: "",
    cpu: "",
    gpu: "",
    memoryRam: "",
    hardDisk: "",
    location: "",
    department: "",
    status: "",
  });

  const { register, handleSubmit } = useForm({
    defaultValues: formData,
  });

  useEffect(() => {
    // Rerender the form on input change
    setFormData(formData);
  }, [formData]);

  const Next = () => setPage(page + 1);
  const Previous = () => setPage(page - 1);
  const Cancel = () => navigate("/dashboard");

  const onSubmit = (data) => {
    // Do something with the submitted data
    
    console.log(data);
  };

  return (
<>
      {page === 0 ? (
        <form onSubmit={handleSubmit(onSubmit)} >
              <div>
            <h1>Informações de cadastro</h1>
            <label htmlFor="hostName">Host Name</label>
            <input
              type="text"
              name="hostName"
              id="hostName"
              placeholder="Host Name"
              {...register("hostName", { required: true, maxLength: 30 })}
            />
          </div>
          <div>
            <label htmlFor="serialNumber">Serial Number</label>
            <input
              type="text"
              name="serialNumber"
              id="serialNumber"
              placeholder="Serial Number"
              {...register("serialNumber", { required: true, maxLength: 30 })}
            />
          </div>
          <div>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="Brand"
              {...register("brand", { required: true, maxLength: 30 })}
            />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <input
              type="text"
              name="model"
              id="model"
              placeholder="Model"
              {...register("model", { required: true, maxLength: 30 })}
            />
          </div>
            <input type="submit" value="Cancelar" onClick={Cancel} className="btn-form" />
            <input type="submit" value="Next" onClick={Next} className="btn-form" />
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
                  {...register("cpu", { required: true, maxLength: 30 })}
                />
              </div>
              <div>
                <label htmlFor="gpu">GPU</label>
                <input
                  type="text"
                  name="gpu"
                  id="gpu"
                  placeholder="GPU"
                  {...register("gpu", { required: true, maxLength: 30 })}
                />
              </div>
              <div>
                <label htmlFor="memoryRam">Memory RAM</label>
                <select name="memoryRam" id="memoryRam" {...register("memoryRam", { required: true, maxLength: 30 })}>
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
                  {...register("hardDisk", { required: true, maxLength: 30 })}
                />
              </div>
            </div>
            <input type="submit" value="Anterior" onClick={Previous} className="btn-form" />
            <input type="submit" value="Next" onClick={Next} className="btn-form" />
        </form>
      ) : page === 2 ? (
        <form onSubmit={handleSubmit(onSubmit)}> 
          <div>
            <h1>Local</h1>
              <div>
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location"
                  {...register("location", { required: true, maxLength: 30 })}
                />
              </div>
              <div>
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  placeholder="Department"
                  {...register("department", { required: true, maxLength: 30 })}
                />
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <select name="status" id="status" {...register("status", { required: true, maxLength: 30 })}>
                  <option value="Ativo">Ativo</option>
                  <option value="Manutenção">Manutenção</option>
                  <option value="Reserva">Reserva</option>
                </select>
                </div>
            </div>
            <input type="submit" value="Anterior" onClick={Previous} className="btn-form" />
            <input type="submit" value="Next" onClick={Next} className="btn-form" />
        </form>
      ) : page === 3 ? (
        console.log(formData),
        <div>
          <h1>Confirmação de dados</h1>
          <div id="confirmation-data">
            <p>Nome do host: {formData.hostName}</p>
            <p>Número de série: {formData.serialNumber}</p>
            <p>Marca: {formData.brand}</p>
            <p>Modelo: {formData.model}</p>
            <p>CPU: {formData.cpu}</p>
            <p>GPU: {formData.gpu}</p>
            <p>Memória RAM: {formData.memoryRam}</p>
            <p>Disco rígido: {formData.hardDisk}</p>
            <p>Localização: {formData.location}</p>
            <p>Departamento: {formData.department}</p>
            <p>Status: {formData.status}</p>
          </div>
          <button type="button" onClick={onSubmit}>
            Confirmar
          </button>
        </div>
      ) : null}
        
        </>
        )
      }

      export default Form