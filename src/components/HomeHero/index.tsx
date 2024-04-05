import { ArrowRight } from 'lucide-react'

const HomeHero = () => (
  <main className="hero-section h-screen bg-no-repeat object-cover">
    <div className="top-96 right-52 absolute">
      <h1 className="text-zinc-50 text-6xl max-w-xl uppercase leading-normal">
        <span className="font-bold ">Faça seu corpo</span> fit & perfeito
      </h1>
      <button className="bg-white border-white border-2 flex item-center p-4 gap-2 mt-4 font-bold uppercase transition ease-linear hover:text-zinc-50 hover:bg-zinc-900">
        Nossas aulas <ArrowRight className="text-red-700" />
      </button>
    </div>
  </main>
)

export default HomeHero
