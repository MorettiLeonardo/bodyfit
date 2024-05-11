import { Facebook, Instagram, Mail, TwitterIcon } from 'lucide-react'

import Title from '../TItle'
import { teamData } from '../Data'

import bg from '../../assets/images/OurTeam/teamBg.png'
import trainerBg from '../../assets/images/OurTeam/trainer-bg.png'

const OurTeam = () => (
  <div className="screen" style={{ backgroundImage: `url(${bg})` }}>
    <div className="container pt-8 min-h-screen flex justify-center items-center flex-col">
      <Title text="Treinadores" />
      <h2 className="font-bold text-2xl sm:text-4xl mt-5 text-center">
        Equipe de treinadores especializados
      </h2>
      <p className="text-zinc-500 max-w-96 text-center text-sm leading-5 font-semibold mt-5">
        Equipe especializada de treinadores ajuda você a ter sucesso em qualquer
        objetivo, orientação personalizada e motivação fornecida!
      </p>
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {teamData.map((trainer) => (
          <div
            key={trainer.id}
            className="flex flex-col justify-end items-center w-full"
          >
            <img
              className="absolute max-w-[300px] sm:max-w-[340px] -z-10 mt-20"
              src={trainerBg}
              alt=""
            />
            <img
              className="cursor-pointer max-w-[230px] filter grayscale transition ease-linear hover:filter-none"
              src={trainer.img}
              alt={trainer.name}
            />
            <div className="text-center flex flex-col gap-4 bg-white shadow-lg absolute w-full sm:w-[360px] py-5  ">
              <h2 className="font-bold text-2xl text-center ">
                {trainer.name}
              </h2>
              <p className="text-zinc-400 font-semibold">{trainer.workout}</p>
              <div className="flex justify-around">
                <Facebook className="max-w-5 text-zinc-500" />
                <Instagram className="max-w-5 text-zinc-500" />
                <TwitterIcon className="max-w-5 text-zinc-500" />
                <Mail className="max-w-5 text-zinc-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default OurTeam
