import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ListCollapse, Plus, User } from 'lucide-react'

import Logo from '../../assets/images/BodyFit.png'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true)
      } else if (window.scrollY === 0 && scrolled) {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`w-full flex fixed z-40 items-center justify-between p-4 text-white font-medium transition duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}
    >
      <img
        className="w-48 h-18 cursor-pointer"
        src={Logo}
        alt="BodyFit Centro de treinamento"
      />
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              className="cursor-pointer hover:text-red-600 transition ease-linear"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-red-600 transition ease-linear"
              to="/sobre"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-red-600 transition ease-linear"
              to="/galeria"
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link
              to="/programacao"
              className="cursor-pointer hover:text-red-600 transition ease-linear"
            >
              Programação
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="cursor-pointer hover:text-red-600 transition ease-linear"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-red-600 transition ease-linear"
              to="/precos"
            >
              Preços
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer hover:text-red-600 transition ease-linear"
              to="/aulas"
            >
              Aulas
            </Link>
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
}

export default Header
