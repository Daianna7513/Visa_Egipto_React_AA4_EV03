
import './App.css'
import Encabezado from './components/Encabezado'
import Navegacion from './components/Navegacion'
import Requisitos from './components/Requisitos'
import FormularioSolicitud from './components/FormularioSolicitud'

// Componente principal que integra los demás componentes.
function App() {
  return (
    <>
      <Encabezado />
      <Navegacion />

      <main>
        <section id="inicio">
          <h2>Bienvenido a Visa a Egipto</h2>
          <p>
            Explora información sobre visas y utiliza
            nuestro formulario de demostración.
          </p>
        </section>

        <Requisitos />
        <FormularioSolicitud />
      </main>

      <footer>
        <p>Proyecto formativo SENA - Visa a Egipto</p>
      </footer>
    </>
  )
}

export default App
