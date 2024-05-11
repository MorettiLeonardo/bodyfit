import img from '../../assets/images/Banner/bannerBg.png'

const Banner = () => (
  <div
    className="bg-no-repeat bg-center bg-cover"
    style={{ backgroundImage: `url(${img})` }}
  >
    <div className="h-80 w-full grid grid-cols-1 sm:grid-cols-2  container items-center justify-center">
      <h1 className="text-white font-bold md:font-normal text-lg md:text-4xl w-4/6">
        Estamos sempre oferecendo o melhor serviço de condicionamento físico
        para você
      </h1>
      <button className="bg-white text-black text-sm max-w-max md:text-base p-3 md:p-4 font-bold hover:bg-black hover:text-white transition ease-linear">
        Junte-se a nós
      </button>
    </div>
  </div>
)

export default Banner
