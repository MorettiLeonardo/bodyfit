import clock from '../../assets//images/AboutUs/clock.png'
import workout from '../../assets//images/AboutUs/workout.png'
import nutrition from '../../assets//images/AboutUs/nutrition.png'
import equipaments from '../../assets//images/AboutUs/equipaments.png'
import machine from '../../assets//images/AboutUs/machine.png'
import weightlifter from '../../assets//images/AboutUs/weightlifter.png'
import girl from '../../assets//images/AboutUs/girl-run.png'
import running from '../../assets//images/AboutUs/running.png'

import AboutCard from '../AboutCard'

const AboutUs = () => {
  return (
    <section className="about-section min-h-screen">
      <div className="container">
        <div className="grid grid-cols-3">
          <AboutCard
            img={clock}
            title="Progreção"
            text="Nossa equipe de especialistas trabalhará com você para criar um plano personalizado que o ajudará a alcançar o sucesso, passo a passo."
          />
          <AboutCard
            img={workout}
            text="Nossa equipe de especialistas trabalhará com você para criar um plano personalizado que o ajudará a alcançar o sucesso, passo a passo."
            title="Progreção"
          />
          <AboutCard
            img={nutrition}
            text="Nossa equipe de especialistas trabalhará com você para criar um plano personalizado que o ajudará a alcançar o sucesso, passo a passo."
            title="Progreção"
          />
        </div>
        <div className="grid grid-cols-2 items-center justify-between gap-6 mt-28">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold">
              Leve sua saúde e corpo ao próximo nível
            </h2>
            <p className="text-zinc-500 font-medium">
              Leve sua saúde e seu corpo para o próximo nível com nosso programa
              abrangente projetado para ajudá-lo a atingir seus objetivos de
              condicionamento físico.
            </p>
            <div className="grid grid-cols-3">
              <div className="p-5 font-bold uppercase text-center text-xl flex flex-col justify-center items-center gap-2">
                <img className="w-14 h-14" src={weightlifter} alt="Professor" />
                <p>TREINADORES PROFISSIONAIS</p>
              </div>
              <div className="p-5 font-bold uppercase text-center text-xl flex flex-col justify-center items-center gap-2 border-r-[1px] border-l-[1px] border-zinc-500">
                <img
                  className="w-14 h-14"
                  src={equipaments}
                  alt="Pesos de academia"
                />
                <p>EQUIPAMENTOS MODERNOS</p>
              </div>
              <div className="p-5 font-bold uppercase text-center text-xl flex flex-col justify-center items-center gap-2">
                <img className="w-14 h-14" src={machine} alt="Máquina" />
                <p>MÁQUINAS FANTÁSTICAS</p>
              </div>
            </div>
            <button></button>
          </div>
          <img
            className="max-h-[430px] z-10"
            src={girl}
            alt="Mulher correndo"
          />
          <img
            className="absolute right-[800px] max-h-[550px]"
            src={running}
            alt="Palavra 'correndo'"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
