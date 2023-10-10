import React from 'react'
import { useForm } from 'react-hook-form'

const FormTest = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      
      const onSubmit = (data) => {
        const name = data.name
        const modelo = data.model
        const status = data.status
        console.log(name, modelo, status);
      }
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", { required: true, maxLength: 30 })}
          />
          <label htmlFor="model">Marca</label>
          <input
            id="model"
            {...register("model", { required: true, maxLength: 30 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>This is required</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}

        <div>
            <label htmlFor="status">Status</label>
            <select name="status" id="status" {...register("status", { required: true, maxLength: 30 })}>
            <option value="Ativo">Ativo</option>
            <option value="Manutenção">Manutenção</option>
            <option value="Reserva">Reserva</option>
            </select>
        </div>  
          <input type="submit" />
        </form>
      )
}

export default FormTest