import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    //host: "10.0.50.39",
	  port: "3000"
  }
  //Necessario ser um aspas duplas para utilizar o host name
})
