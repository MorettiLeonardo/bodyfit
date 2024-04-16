import { useState } from 'react'
import bg from '../../assets/images/Imc/background.jpg'

const CalcImc = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [status, setStatus] = useState('')
  const [imc, setImc] = useState(0)

  const calcBMI = () => {
    const bmi = parseFloat(weight) / (parseFloat(height) * 2)
    setImc(bmi)

    if (bmi <= 18.5) setStatus('Abaixo do peso')
    else if (bmi <= 24.9) setStatus('Peso normal')
    else if (bmi <= 29.9) setStatus('Sobrepeso')
    else if (bmi <= 34.9) setStatus('Obesidade grau I')
    else if (bmi <= 39.9) setStatus('Obesidade grau II')
    else if (bmi >= 40) setStatus('Obesidade grau III')
  }

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="p-[50px]">
      <div className="container flex flex-col gap-4">
        <h2 className="text-white font-bold text-4xl">
          Vamos calcular seu <span className="text-red-600">IMC</span>
        </h2>
        <p className="text-zinc-500 font-semibold max-w-[460px] ">
          Determine facilmente seu índice de massa corporal com nossa ferramenta
          de cálculo.
        </p>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <input
              className="p-3 border-[2px] text-white border-zinc-500 bg-transparent"
              placeholder="Peso / kg"
              type="number"
              onChange={(ev) => setWeight(ev.target.value)}
            />
            <p className="text-white ">Seu IMC é: {imc.toFixed(2)}</p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="p-3 border-[2px] text-white border-zinc-500 bg-transparent"
              placeholder="Altura / cm"
              type="number"
              onChange={(ev) => setHeight(ev.target.value)}
            />
            <p className="text-white ">Você está com: {status}</p>
          </div>
        </div>
        <button
          onClick={() => calcBMI()}
          className="text-white  bg-zinc-700 p-3 max-w-max uppercase font-bold transition ease-linear hover:bg-red-600"
        >
          Calcular
        </button>
      </div>
    </div>
  )
}

export default CalcImc
