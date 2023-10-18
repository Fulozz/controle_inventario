import React, { useEffect, useState } from 'react'



import './Geral.css'
import computer from '../../../Dashboard/Assets/computer.png'
import { AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineSave } from "react-icons/ai";
import {FiAlertTriangle, FiEdit} from 'react-icons/fi'
import { Link } from "react-router-dom";
import Axios from 'axios'
import { useForm } from 'react-hook-form';


const GeralTest = () => {
  const [patrimonio, setPatrimonio] = useState([])
  const [isVisible, setIsVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [singlePatrimonio, setSinglePatrimonio] = useState()

   const [selector, setSelector] = useState("informação");
  
   const [isActiveInfo, setIsActiveInfo] = useState(false);
   const [isActiveHardware, setIsActiveHardware] = useState(false);
   const [isActiveLocal, setIsActiveLocal] = useState(false);

  useEffect(()=>{
    Axios.get('http://localhost:3000/api/v1/patrimonio/:id').then((response)=>{
      setPatrimonio(response.data)
    })
  },[])
  
  useEffect(()=>{
    Axios.get('http://localhost:3000/api/v1/all').then((response)=>{
      setPatrimonio(response.data)
    })
  },[]);

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

  const fechar = () => {
    setIsVisible(false)
    setIsEditable(false)
    setSelector("informação")
    setIsActiveInfo(true)
    setIsActiveHardware(false)
    setIsActiveLocal(false)
  }
 const informação = () =>{
  setSelector("informação");

  setIsActiveInfo(true);
  setIsActiveHardware(false);
  setIsActiveLocal(false);
 }

 const hardware = () =>{
  setSelector("hardware");

  setIsActiveInfo(false);
  setIsActiveHardware(true);
  setIsActiveLocal(false);
 }

 const local = () =>{
  setSelector("local");

  setIsActiveInfo(false);
  setIsActiveHardware(false);
  setIsActiveLocal(true);
 }
const onSubmit = (data) => {
  console.log(data);
}

  return (
  <div className='listingSection'>
    <div className="flex">
 
      <div className="secContainer flex">
        {patrimonio && patrimonio.map((patrimonio, index) => (
            <div className="singleItem" key={index}>
            <h5>{patrimonio.host_name}</h5>
            <button  onClick={()=>{
              setIsVisible(true)
              setIsEditable(true)
              setSinglePatrimonio(patrimonio)
            }} >
              <AiOutlineEye className="icon" />
              </button>
              <img src={computer} alt="Image Name" />
              <Link onClick={()=>{
                setIsEditable(false)
                setIsVisible(true)
            }}>
                <h3>{patrimonio.patrimonio}</h3>
              </Link>
              </div>
          ))}   
      </div>
      {isVisible && (
        <div className="modal" style={{ zIndex: 100}}>
          <div className="modal-content">
            <div className="modal-top">
                <h1>{singlePatrimonio.host_name}</h1>
                  <button  onClick={fechar} >
              <AiOutlineEyeInvisible className="icon" />
              </button>         
                </div>
                { isEditable ? (
                    <div className="modal-item">               
                        <table>
                          <tbody>
                            <tr>
                              <th ><button className='selector' id='informacao' onClick={ informação }> <h3 className={isActiveInfo ? "active" : ""}><strong>Informações |</strong></h3></button></th>
                              { singlePatrimonio.categoria !== "telefone" && "impressora" ?(<> <th ><button className='selector' onClick={ hardware }> <h3 className={isActiveHardware ? "active" : ""}><strong>Hardware |</strong></h3></button></th> </> ) : null}
                              <th ><button className='selector' id ='local' onClick={ local }> <h3 className={isActiveLocal ? "active" : ""}><strong>Local </strong></h3></button></th>
                            </tr>
                          </tbody>
                        </table>
                        {/* Seletor de informação */}
                    {   selector === "informação" && singlePatrimonio.categoria === "computador" ? (
                      <>
                      <h2>Informações</h2>
                        <h3> <strong> Patrimonio: </strong>{singlePatrimonio.patrimonio}</h3>
                        <h3> <strong> Categoria: </strong> {singlePatrimonio.categoria}</h3>
                        <h3> <strong> Número de série:  </strong>{singlePatrimonio.serial_number}</h3>
                        <h3> <strong> Marca:  </strong>{singlePatrimonio.marca}</h3>
                        <h3> <strong> Modelo:  </strong>{singlePatrimonio.modelo}</h3>
                        </>
                    ) : selector === "informação" && singlePatrimonio.categoria === "notebook"   ? (
                      <>
                      <h2>Informações</h2>
                        <h3> <strong> Patrimonio: </strong>{singlePatrimonio.patrimonio}</h3>
                        <h3> <strong> Categoria: </strong> {singlePatrimonio.categoria}</h3>
                        <h3> <strong> Número de série:  </strong>{singlePatrimonio.serial_number}</h3>
                        <h3> <strong> Marca:  </strong>{singlePatrimonio.marca}</h3>
                        <h3> <strong> Modelo:  </strong>{singlePatrimonio.modelo}</h3>
                        <h3> <strong> Tamanho:  </strong>{singlePatrimonio.tamanho}</h3>
                        </>
                    ) : selector === "informação" && singlePatrimonio.categoria === "impressora" ? (
                      <>
                      <h2>Informações</h2>
                        <h3> <strong> Patrimonio: </strong>{singlePatrimonio.patrimonio}</h3>
                        <h3> <strong> Categoria: </strong> {singlePatrimonio.categoria}</h3>
                        <h3> <strong> Número de série:  </strong>{singlePatrimonio.serial_number}</h3>
                        <h3> <strong> Marca:  </strong>{singlePatrimonio.marca}</h3>
                        <h3> <strong> Modelo:  </strong>{singlePatrimonio.modelo}</h3>
                        <h3> <strong> Tipo:  </strong>{singlePatrimonio.tipo_impressora}</h3>
                        </>
                    ) : selector === "informação" && singlePatrimonio.categoria === "monitor"    ? (
                      <>
                      <h2>Informações</h2>
                        <h3> <strong> Patrimonio: </strong>{singlePatrimonio.patrimonio}</h3>
                        <h3> <strong> Categoria: </strong> {singlePatrimonio.categoria}</h3>
                        <h3> <strong> Número de série:  </strong>{singlePatrimonio.serial_number}</h3>
                        <h3> <strong> Marca:  </strong>{singlePatrimonio.marca}</h3>
                        <h3> <strong> Modelo:  </strong>{singlePatrimonio.modelo}</h3>
                        </>
                    ) : selector === "informação" && singlePatrimonio.categoria === "telefone"   ? (
                      <>
                      <h2>Informações</h2>
                        <h3> <strong> Patrimonio: </strong>{singlePatrimonio.patrimonio}</h3>
                        <h3> <strong> Categoria: </strong> {singlePatrimonio.categoria}</h3>
                        <h3> <strong> Número de série:  </strong>{singlePatrimonio.serial_number}</h3>
                        <h3> <strong> Marca:  </strong>{singlePatrimonio.marca}</h3>
                        <h3> <strong> Modelo:  </strong>{singlePatrimonio.modelo}</h3>
                          {/* Colocar no hardware que nao possui hardware*/}
                        </>
                    ) : null }
                        {/* Seletor de Hardware */}
                    {   selector === "hardware" && singlePatrimonio.categoria === "computador" ? (
                       <>
                          <h2><strong>Hardware</strong></h2>
                            <h3><strong>CPU:</strong> {singlePatrimonio.cpu}</h3>
                            <h3><strong>GPU:</strong> {singlePatrimonio.gpu}</h3>
                            <h3><strong>Memoria:</strong> {singlePatrimonio.memoriaRam} {singlePatrimonio.memoriaRamDDR}</h3>
                            <h3><strong>Hard Disk:</strong> {singlePatrimonio.hard_disk}</h3>
                        </>
                    ) : selector === "hardware" && singlePatrimonio.categoria === "notebook"   ? (
                      <>
                        <h2><strong>Hardware</strong></h2>
                          <h3><strong>Tamanho:</strong> {singlePatrimonio.tamanho}</h3>
                          <h3><strong>CPU:</strong> {singlePatrimonio.cpu}</h3>
                          <h3><strong>GPU:</strong> {singlePatrimonio.gpu}</h3>
                          <h3><strong>Memoria:</strong> {singlePatrimonio.memoriaRam} {singlePatrimonio.memoriaRamDDR}</h3>
                          <h3><strong>Hard Disk:</strong> {singlePatrimonio.hard_disk}</h3>
                      </> 
                    ) : selector === "hardware" && singlePatrimonio.categoria === "monitor"    ? (
                    <>
                      <h2><strong>Hardware</strong></h2>
                        <h3><strong>Tamanho:</strong> {singlePatrimonio.tamanho}</h3>
                        <h3><strong>Tipo:</strong> {singlePatrimonio.tipo_monitor}</h3>
                        <h3><strong>Formato:</strong> {singlePatrimonio.formato}</h3>
                    </> 
                    ) : selector === "hardware" && singlePatrimonio.categoria === "switch"     ? (
                      <>
                        <h2><strong>Hardware</strong></h2>
                          <h3><strong>Portas:</strong> {singlePatrimonio.portas}</h3>
                          <h3><strong>POE:</strong> {singlePatrimonio.poe}</h3>
                          <h3><strong>Geranciavel:</strong> {singlePatrimonio.gerenciavel}</h3>
                      </> 
                    ) : selector === "hardware" && singlePatrimonio.categoria === "servidor"   ? (
                      <>
                        <h2><strong>Hardware</strong></h2>
                          <h3><strong>CPU:</strong> {singlePatrimonio.cpu}</h3>
                          <h3><strong>GPU:</strong> {singlePatrimonio.gpu}</h3>
                          <h3><strong>Memoria:</strong> {singlePatrimonio.memoriaRam} {singlePatrimonio.memoriaRamDDR}</h3>
                          <h3><strong>Hard Disk I:</strong> {singlePatrimonio.hard_disk}</h3>
                          <h3><strong>Hard Disk II:</strong> {singlePatrimonio.hard_disk}</h3>
                          <h3><strong>Energia:</strong> {singlePatrimonio.power_suply}</h3>
                          <h3><strong>Sistema Operacional:</strong> {singlePatrimonio.sistema_operacional}</h3>
                          <h3><strong>Acesso remoto:</strong> {singlePatrimonio.acesso_remoto}</h3>
                      </> 
                    ) : null } 
                        {/* Seletor de Local */}
                    {   selector === "local" ? (
                      <>
                        <h2><strong>Local</strong></h2>
                            <h3><strong>Local:</strong> {singlePatrimonio.local}</h3>
                            <h3><strong>Departamento:</strong> {singlePatrimonio.departamento}</h3>
                            <h3><strong>Estado:</strong> {singlePatrimonio.estado}</h3>
                      </>
                    ) : null }    
                    </div>
                ) : (
                    <div className="modal-item">                     
                        { selector === "informação" && singlePatrimonio.categoria === "computador" ? (
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
                                    placeholder={singlePatrimonio.patrimonio}
                                    value={singlePatrimonio.patrimonio}
                                    readOnly
                                  /><FiAlertTriangle className='icon icon-attention'/>
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
                                    value={singlePatrimonio.serial_number}
                                    readOnly
                                  />
                                  <FiAlertTriangle className='icon icon-attention'/>
                                </th>
                              </tr>
                              <tr>
                                <th>
                                  <label htmlFor="marca">Marca: </label>
                                </th>
                                <th>
                                  <input
                                    type="text"
                                    name="marca"
                                    id="marca"
                                    placeholder={singlePatrimonio.marca}
                                    value={formData.marca}
                                    onChange={(e) => {
                                      setFormData({ ...formData, marca: e.target.value });
                                    }}
                                  />
                                </th>
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
                                <th>
                                  <input
                                    type="text"
                                    name="modelo"
                                    id="modelo"
                                    placeholder="Modelo"
                                    value={singlePatrimonio.categoria}
                                    readOnly
                                  /> <FiAlertTriangle className='icon icon-attention'/>
                                </th>
                              </tr>
                              
                            </tbody>
                          </table>
                        </form>
                        ) : null}
                        { selector === "hardware" && singlePatrimonio.categoria === "computador" ? (
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
                            </tbody>
                          </table>
                        </form>
                        ) : null}
                        
                    </div>
                ) }
                { isEditable ? (
                    <div className="modal-bottom">
                
                    <button  onClick={()=>{
                      setIsEditable(false)
                    }} >
                        <FiEdit className="icon" />
                    </button>            
                  </div>
                ) : (
              <div className="modal-bottom">
                    <button className='left-button' onClick={()=>{
                         setIsEditable(true)
                        }} >
                        <AiOutlineClose className="icon" />
                    </button> 
                    <button className='right-button'  onClick={()=>{
                         setIsEditable(true)
                        }} >
                        <AiOutlineSave className="icon" />
                    </button>            
                </div>
                )}
          </div>
        </div>
      )}
    
      </div>
    </div>
  )
}

export default GeralTest