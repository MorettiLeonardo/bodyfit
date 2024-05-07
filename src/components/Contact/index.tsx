import { Facebook, Instagram, Twitter } from 'lucide-react'
import ContactForm from '../ContactForm'
import Map from '../Map'

const Contact = () => (
  <>
    <div className="container grid gap-4 grid-cols-1 md:grid-cols-2 h-[80vh] items-center justify-center">
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-4xl">
          Estamos aqui para ajudá-lo! Para moldar seu corpo.
        </h1>
        <p className="font-medium text-zinc-600">
          Na BodyFit, nos dedicamos a ajudá-lo a alcançar o corpo dos seus
          sonhos. Nossos treinadores e nutricionistas especializados trabalharão
          com você para criar um plano personalizado de condicionamento físico e
          nutrição que o ajudará a atingir seus objetivos específicos.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-[22px]">Curitiba, Paraná</h4>
            <div className="mt-1 max-w-[50px] h-[4px] bg-red-600" />
            <p className="mt-3 font-medium text-zinc-600 text-sm">
              Rua XV de novembro
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[22px]">Horários</h4>
            <div className="mt-1 max-w-[50px] h-[4px] bg-red-600" />
            <p className="mt-3 font-medium text-zinc-600 text-sm">
              Seg à Sex: 07:00 - 22:00
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[22px]">Informações</h4>
            <div className="mt-1 max-w-[50px] h-[4px] bg-red-600" />
            <p className="mt-3 font-medium text-zinc-600 text-sm">
              +55 (41) 99999-9999
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[22px]">Siga a gente</h4>
            <div className="mt-1 max-w-[50px] h-[4px] bg-red-600" />
            <p className="mt-3 font-medium text-zinc-600 text-sm flex gap-3">
              <Facebook className="bg-zinc-100 h-[35px] w-[35px] p-2 cursor-pointer rounded-full transition ease-linear hover:bg-red-600 hover:text-white" />
              <Instagram className="bg-zinc-100 h-[35px] w-[35px] p-2 cursor-pointer rounded-full transition ease-linear hover:bg-red-600 hover:text-white" />
              <Twitter className="bg-zinc-100 h-[35px] w-[35px] p-2 cursor-pointer rounded-full transition ease-linear hover:bg-red-600 hover:text-white" />
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
    <Map />
  </>
)

export default Contact
