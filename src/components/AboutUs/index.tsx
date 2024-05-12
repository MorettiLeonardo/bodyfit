import clock from '../../assets//images/AboutUs/clock.png'
import workout from '../../assets//images/AboutUs/workout.png'
import nutrition from '../../assets//images/AboutUs/nutrition.png'
import equipaments from '../../assets//images/AboutUs/equipaments.png'
import machine from '../../assets//images/AboutUs/machine.png'
import weightlifter from '../../assets//images/AboutUs/weightlifter.png'
import girl from '../../assets//images/AboutUs/girl-run.png'
import running from '../../assets//images/AboutUs/running.png'

import AboutCard from '../AboutCard'
import Title from '../TItle'

type Props = {
  displayCards?: boolean
}

const AboutUs = ({ displayCards }: Props) => {
  return (
    <section className="about-section min-h-screen py-10">
      <div className="container flex flex-col items-center">
        {displayCards && (
          <div className="flex justify-between items-center">
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
        )}
        <div
          className={`flex-col xl:flex-row flex items-center justify-between gap-6 ${displayCards ? 'mt-28' : 'pt-28'}`}
        >
          <div className="flex flex-col gap-8">
            <Title text="QUEM NÓS SOMOS" />
            <h2 className="text-4xl font-bold">
              Leve sua saúde e corpo ao próximo nível
            </h2>
            <p className="text-zinc-500 font-medium">
              Leve sua saúde e seu corpo para o próximo nível com nosso programa
              abrangente projetado para ajudá-lo a atingir seus objetivos de
              condicionamento físico.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-5 font-bold uppercase text-center text-xl flex flex-col justify-center items-center gap-2">
                <img className="w-14 h-14" src={weightlifter} alt="Professor" />
                <p>TREINADORES PROFISSIONAIS</p>
              </div>
              <div className="p-5 font-bold uppercase text-center text-xl flex flex-col justify-center items-center gap-2 md:border-r-[1px] border-l-[1px] md:border-zinc-500">
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
          </div>
          <img
            className="max-h-[430px] z-10"
            src={girl}
            alt="Mulher correndo"
          />
          <img
            className="hidden 2xl:block absolute right-[650px] max-h-[550px]"
            src={running}
            alt="Palavra 'correndo'"
          />
        </div>
        <button className="bg-zinc-700 text-white border-2 flex item-center p-4 gap-2 mt-10 md:mt-4 font-bold uppercase transition ease-linear hover:bg-red-700">
          Nossas aulas
        </button>
      </div>
    </section>
  )
}

export default AboutUs
