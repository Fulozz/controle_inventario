import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import xlsx from 'json-as-xlsx'
import './top.css';
import APIPatrimonio from '../../API/API.patrimonio';


// Import de Icons 
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineCloudDownload, AiOutlineEyeInvisible, AiOutlinePushpin, AiOutlineSave } from 'react-icons/ai';
import { FiAlertTriangle, FiEdit } from 'react-icons/fi';
//Imported Images

import img from '../Assets/Perfil GS.png';



import Taskbar from './components/taskbar/Taskbar';
import UserProfile from './components/userprofile/UserProfile';
import Card from '../../View/Card/Card';

const Top = () => {
  const [formData, setFormData] = useState({
    searchData: ""
  });
  const [openTask , setOpenTask] = useState(false);
  const [openUser , setOpenUser] = useState(false);
  const searchData = formData.searchData;
  const { handleSubmit } = useForm({
    initialValues: formData,
  });
 const onSubmit = (data) => {
  return data
 };

  const [singlePatrimonio, setSinglePatrimonio] = useState();


  const [isVisible, setIsVisible] = useState(false);




  const switchTask = () =>{
    setOpenUser(false)
    if(!openTask){
      setOpenTask(true)  
    } else {
      setOpenTask(false)
    }
  };
  const switchUser = () =>{ 
    setOpenTask(false)
    if(!openUser){ 
      setOpenUser(true)
    } else {
      setOpenUser(false)
    }
  };
  
  const findData = async () =>{
    await APIPatrimonio().post(`/search/${searchData}`,{
      patrimonio: searchData
    }).then((response)=>{
      setSinglePatrimonio(response.data)
      setIsVisible(true)
      setIsEditable(true);
  });

  };

  var lastScrollTop = 0;

  window.addEventListener('scroll', function (e) {
   // mesma posição
      if (e.scrollY === lastScrollTop) return;
      this.scrollY < lastScrollTop ? "Cima" : ( setOpenTask(false), setOpenUser(false) )
      lastScrollTop = this.scrollY;
    }, true)
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
        extraLength: 3,
      };
      xlsx(data, settings);
    };
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Patrimonio dashboard</h1>
        </div>
        <div className="searchBar flex">
          <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder='Search Dashboard'
          value={formData.searchData}
           onChange={(e)=>{
            setFormData({...formData, searchData: e.target.value})
          }} />
          </form>
          <BiSearchAlt className='icon' onClick={findData} type='submit' />
        </div>

        <div className="adminDiv flex">
          <AiOutlinePushpin className='icon' onClick={switchTask}/>
          <AiOutlineCloudDownload className='icon'onClick={downloadFile}/>
          <div className="adminImage" >
            <img src={img} alt="Admin Image" className='userImage' onClick={switchUser} />
             {/* incluir uma maneira de puxar essa imagem do usuario do banco de dados, 
             e uma maneira de envia-la para lá pelo frontend*/}
          </div>
        </div>
      </div>
      { openTask  ? <Taskbar /> : null}
      { openUser  ? <UserProfile /> : null}

      {isVisible && (
          <Card singlePatrimonio={singlePatrimonio} setIsVisible={setIsVisible} />
        )}
        </div>
  )
}

export default Top