// src/App.jsx
import './App.css'
import FirstComponent from './components/FisrtComponent'
import TemplateExpressions from './components/TemplateExpressions' // LINHA ADICIONADA
import Events from './components/Events' // LINHA ADICIONADA

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent /> {/* LINHA ADICIONADA */}
      <TemplateExpressions /> {/* LINHA ADICIONADA */}
      <Events /> {/* LINHA ADICIONADA */}
    </div>
  )
}

export default App