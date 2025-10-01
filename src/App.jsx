import './App.css'
import FirstComponent from './components/FisrtComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/myComponent'

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <MyComponent />
    </div>
  )
}

export default App