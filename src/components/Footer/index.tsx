import { Facebook, Twitter, Youtube } from 'lucide-react'

import logo from '../../assets/images/BodyFit_black.png'

const Footer = () => (
  <footer className="container flex gap-[15%] py-[100px] text-zinc-600">
    <div className="max-w-[30%] flex flex-col gap-5">
      <img className="max-w-[200px]" src={logo} alt="BodyFit" />
      <p className="text-zinc-600 font-semibold">
        Leve sua saúde e seu corpo para o próximo nível com nosso programa
        abrangente projetado para ajudá-lo a atingir seus objetivos de
        condicionamento físico.
      </p>
      <ul className="flex gap-4">
        <li className="bg-zinc-300 text-zinc-600 p-2 rounded-full transition ease-linear hover:bg-pink-800 hover:text-white">
          <Facebook />
        </li>
        <li className="bg-zinc-300 text-zinc-600 p-2 rounded-full transition ease-linear hover:bg-pink-800 hover:text-white">
          <Twitter />
        </li>
        <li className="bg-zinc-300 text-zinc-600 p-2 rounded-full transition ease-linear hover:bg-pink-800 hover:text-white">
          <Youtube />
        </li>
      </ul>
      <p className=" font-semibold">
        Política de Privacidade | &copy; 2024 BodyFit
      </p>
    </div>
    <div className="max-w-[30%] font-medium">
      <h2 className="border-b-[4px] rounded border-pink-800 font-bold text-black text-2xl">
        Nossas Aulas
      </h2>
      <ul className="mt-8 flex flex-col gap-4">
        <li>Aulas Fitness</li>
        <li>Aeróbicos</li>
        <li>Yoga</li>
        <li>Musculação</li>
        <li>Treino de força </li>
      </ul>
    </div>
    <div className="max-w-[30%]">
      <h2 className="border-b-[4px] rounded border-pink-800 font-bold text-black text-2xl">
        Horários{' '}
      </h2>
      <ul className="mt-8 flex flex-col gap-4">
        <li>
          <p className="font-bold">Segunda - Sexta:</p>
          <p className="mt-3">7:00 - 21:00</p>
        </li>
        <li>
          <p className="font-bold">Sabádo</p>
          <p className="mt-3">7:00 - 19:00</p>
        </li>
        <li>
          <p className="font-bold">Domingo</p>
          <p className="mt-3">Fechado</p>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
