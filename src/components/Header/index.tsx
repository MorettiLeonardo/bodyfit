import { ListCollapse, Plus, User } from 'lucide-react'

import Logo from '../../assets/images/BodyFit.png'

const Header = () => (
  <header className="w-full flex absolute items-center justify-between bg-transparent p-4 text-white font-medium">
    <img
      className="w-48 h-18 cursor-pointer"
      src={Logo}
      alt="BodyFit Centro de treinamento"
    />
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <a
            className="cursor-pointer hover:text-red-600 transition ease-linear"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-red-600 transition ease-linear"
            href="#"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-red-600 transition ease-linear"
            href="#"
          >
            Galeria
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-red-600 transition ease-linear"
            href="#"
          >
            Programação
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-red-600 transition ease-linear"
            href="#"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-red-600 transition ease-linear"
            href="#"
          >
            Preços
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-red-600 transition ease-linear"
            href="#"
          >
            Aulas
          </a>
        </li>
        <li>
          <a
            className="cursor-pointer hover:text-red-600 transition ease-linear"
            href="#"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
    <div className="flex gap-4 items-center">
      <User className="cursor-pointer hover:text-red-600 transition ease-linear" />
      <ListCollapse className="cursor-pointer hover:text-red-600 transition ease-linear" />
      <button className="flex items-center justify-center border-solid border-2 border-zinc-500 rounded-sm p-2 gap-2">
        <Plus className="w-8 h-8 bg-red-600 rounded hover:rotate-[180deg] transition ease-linear" />
        <p>Junte-se a nós agora</p>
      </button>
    </div>
  </header>
)

export default Header
