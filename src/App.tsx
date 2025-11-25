import { use, useEffect, useState } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const feachData = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error("Error al obtener datos")
      }
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      setError(error as string)
    }
    finally {
      setLoading(false)
    }
  }


  // se usa basicamente para sincronizar con entidades externas
  // Ejemplo llamadas a apis
  // operaciones async
  // cambios necesarios si se necesita hacer algo con parametros de entrada
  // basicamente es para la comunicacion con entidades externas
  // pueden usarse  multiples useffect en el componente pero me imagino que las dependencias si deben ser distintas
  useEffect(() => {
    //1. Se ejcuta inicialmente cuando se monta
    //2. cada vez que se modifique uno de los valores del arreglo de dependencias
    // PRECAUCION: nunca usar el useffect sin arreglo de dependencias es decir dejarlo null o no pasar el parametro
    // Porque? basicamente porque se ejecutara cuando cualquier estado cambie se ejecutara el useeffect

    // return () => {
    //   //Esto se ejecuta cuando el componente se destruye
    //   // manejar el estado de memoria
    //   // ejemplo desuscribirme o cosas por el estilo
    // }

    feachData()
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error...</div>
  }

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
    </>
  )
}

export default App
