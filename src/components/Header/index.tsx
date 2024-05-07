import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ListCollapse, Menu, Plus, User } from 'lucide-react'

import Logo from '../../assets/images/BodyFit.png'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
        className="sm:w-48 sm:h-18 w-[150px] cursor-pointer"
        src={Logo}
        alt="BodyFit Centro de treinamento"
      />
      <nav className="hidden xl:block">
        <ul className="flex items-center gap-4 d">
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
            <Link
              className="cursor-pointer hover:text-red-600 transition ease-linear"
              to="/contato"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="absolute min-h-screen inset-0">
          <div className="bg-white w-full h-full flex items-center justify-center relative">
            <p
              onClick={() => setIsOpen(!isOpen)}
              className="text-black font-bold text-2xl cursor-pointer absolute top-10 right-10"
            >
              X
            </p>
            <ul className="flex flex-col font-bold text-lg items-center gap-4 text-black ">
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
                <Link
                  className="cursor-pointer hover:text-red-600 transition ease-linear"
                  to="/contato"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="flex gap-4 items-center">
        <nav className="xl:hidden block">
          <Menu className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </nav>
        <User className="cursor-pointer hover:text-red-600 transition ease-linear" />
        <ListCollapse className="cursor-pointer hover:text-red-600 transition ease-linear" />
        <button className="hidden sm:flex items-center justify-center border-solid border-2 border-zinc-500 rounded-sm p-2 gap-2">
          <Plus className="w-8 h-8 bg-red-600 rounded hover:rotate-[180deg] transition ease-linear" />
          <p>Junte-se a nós agora</p>
        </button>
      </div>
    </header>
  )
}

export default Header
