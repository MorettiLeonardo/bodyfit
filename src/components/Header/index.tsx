import { ListCollapse, Plus, User } from 'lucide-react'

import Logo from '../../assets/images/BodyFit.png'

const Header = () => (
  <header className="flex items-center justify-between bg-zinc-950 p-4 text-white font-medium">
    <img
      className="w-48 h-18 cursor-pointer"
      src={Logo}
      alt="BodyFit Centro de treinamento"
    />
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <a className="cursor-pointer hover:text-red-600 transition" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-red-600 transition" href="#">
            Sobre
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-red-600 transition" href="#">
            Galeria
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-red-600 transition" href="#">
            Programação
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-red-600 transition" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-red-600 transition" href="#">
            Preços
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-red-600 transition" href="#">
            Aulas
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-red-600 transition" href="#">
            Contato
          </a>
        </li>
      </ul>
    </nav>
    <div className="flex gap-4 items-center">
      <User className="cursor-pointer" />
      <ListCollapse className="cursor-pointer" />
      <button className="flex items-center justify-center border-solid border-2 border-zinc-500 rounded-sm p-2 gap-2">
        <Plus className="w-8 h-8 bg-red-600 rounded hover:rotate-[180deg] transition ease-linear" />
        <p>Junte-se a nós agora</p>
      </button>
    </div>
  </header>
)

export default Header
