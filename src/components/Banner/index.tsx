import img from '../../assets/images/Banner/bannerBg.png'

const Banner = () => (
  <div className="bg-no-repeat" style={{ backgroundImage: `url(${img})` }}>
    <div className="h-80 w-full flex container items-center justify-start">
      <h1 className="text-white text-4xl w-4/6">
        Estamos sempre oferecendo o melhor serviço de condicionamento físico
        para você
      </h1>
      <button className="bg-white text-black p-4 font-bold hover:bg-black hover:text-white transition ease-linear">
        Junte-se a nós
      </button>
    </div>
  </div>
)

export default Banner
