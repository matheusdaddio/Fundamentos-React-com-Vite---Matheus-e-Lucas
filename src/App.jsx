import './App.css'
import FirstComponent from './components/FisrtComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/myComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  )
}

export default App