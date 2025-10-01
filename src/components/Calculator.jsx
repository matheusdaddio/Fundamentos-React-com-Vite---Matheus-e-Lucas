const Calculator = () => {
    let a;
    let b;
    const handleSomar = () => {
      alert((Number(a) + Number(b)))
    }

    const handleSubtrair = () => {
        alert(a - b)
    }

    const handleMultiplicar = () => {
        alert(a * b)
    }

    const handleDividir = () => {
        alert(a / b)
    }


  
    return (
      <div>
        <h1>Calculadora</h1>
        {/* fazer o input atribuindo o valor a variavel*/}
        <input
          type="number"
          placeholder="Digite o primeiro valor"
          onChange={(e) => (a = Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Digite o segundo valor"
          onChange={(e) => (b = Number(e.target.value))}
        />
        <br />
        <br />
        <button onClick={handleSomar}>Somar!</button>
        <button onClick={handleSubtrair}>Subtrair!</button>
        <button onClick={handleMultiplicar}>Multiplicar!</button>
        <button onClick={handleDividir}>Dividir!</button>
      </div>
    )
  }
  
  export default Calculator