import { useState } from 'react'

function FormularioSolicitud() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [tipoVisa, setTipoVisa] = useState('')
  const [mensaje, setMensaje] = useState('')

  async function enviarSolicitud(evento) {
    evento.preventDefault()

    if (!nombre.trim() || !correo.trim() || !tipoVisa) {
      setMensaje('Por favor, completa todos los campos.')
      return
    }

    try {
  const respuesta = await fetch('http://localhost:3000/solicitudes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombreCompleto: nombre,
      correoElectronico: correo,
      tipoVisa: tipoVisa
    })
  })

  const datos = await respuesta.json()

  if (respuesta.ok) {
    setMensaje('Solicitud de visa registrada correctamente.')
  } else {
    setMensaje(datos.mensaje || 'No se pudo registrar la solicitud.')
  }
} catch (error) {
  setMensaje('Error de conexión con el servidor.')
}
  }

  return (
    <section id="solicitud">
      <h2>Formulario de solicitud</h2>

      <form onSubmit={enviarSolicitud}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
        />

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
        />

        <label htmlFor="tipoVisa">Tipo de visa</label>
        <select
          id="tipoVisa"
          value={tipoVisa}
          onChange={(evento) => setTipoVisa(evento.target.value)}
        >
          <option value="">Selecciona una opción</option>
          <option value="Turismo">Turismo</option>
          <option value="Negocios">Negocios</option>
          <option value="Estudios">Estudios</option>
        </select>

        <button type="submit">Validar solicitud</button>
      </form>

      <p role="status">{mensaje}</p>
    </section>
  )
}

export default FormularioSolicitud