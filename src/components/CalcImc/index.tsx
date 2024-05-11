import { useState } from 'react'

import bg from '../../assets/images/Imc/background.jpg'

const CalcImc = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [status, setStatus] = useState('')
  const [imc, setImc] = useState(0)

  const calcBMI = () => {
    setImc(parseFloat(weight) / (parseFloat(height) * 2))

    if (imc <= 18.5) setStatus('Abaixo do peso')
    else if (imc <= 24.9) setStatus('Peso normal')
    else if (imc <= 29.9) setStatus('Sobrepeso')
    else if (imc <= 34.9) setStatus('Obesidade grau I')
    else if (imc <= 39.9) setStatus('Obesidade grau II')
    else if (imc >= 40) setStatus('Obesidade grau III')
  }

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="p-[50px]">
      <div className="container flex flex-col gap-4">
        <h2 className="text-white font-bold text-center sm:text-start text-2xl sm:text-4xl">
          Vamos calcular seu <span className="text-red-600">IMC</span>
        </h2>
        <p className="text-zinc-500 font-semibold max-w-[460px] ">
          Determine facilmente seu índice de massa corporal com nossa ferramenta
          de cálculo.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4">
            <input
              className="p-3 border-[2px] text-white border-zinc-500 bg-transparent"
              placeholder="Peso / kg"
              type="number"
              onChange={(ev) => setWeight(ev.target.value)}
            />
            <p className="text-white font-semibold">
              Seu IMC é: <span className="text-red-600">{imc.toFixed(2)}</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="p-3 border-[2px] text-white border-zinc-500 bg-transparent"
              placeholder="Altura / cm"
              type="number"
              onChange={(ev) => setHeight(ev.target.value)}
            />
            <p className="text-white font-semibold">
              Você está com: <span className="text-red-600">{status}</span>
            </p>
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
