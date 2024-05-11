import { ArrowRight } from 'lucide-react'

const HomeHero = () => (
  <main className="hero-section h-screen bg-no-repeat bg-center object-cover flex flex-col items-center justify-center">
    <div className="lg:top-96 lg:right-52 lg:absolute p-10">
      <h1 className="text-zinc-50 text-3xl lg:text-6xl max-w-xl uppercase leading-normal text-center lg:text-start">
        <span className="font-bold">Faça seu corpo</span> fit & perfeito
      </h1>
      <button className="max-w-max bg-white border-white border-2 flex item-center p-4 gap-2 mt-4 font-bold uppercase transition ease-linear hover:text-zinc-50 hover:bg-zinc-900">
        Nossas aulas <ArrowRight className="text-red-700" />
      </button>
    </div>
  </main>
)

export default HomeHero
