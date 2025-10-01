// src/App.jsx
import './App.css'
import FirstComponent from './components/FirstComponent' // LINHA ADICIONADA
import TemplateExpressions from './components/TemplateExpressions' // LINHA ADICIONADA

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent /> // LINHA ADICIONADA
      <TemplateExpressions /> {/* LINHA ADICIONADA */}
    </div>
  )
}

export default App