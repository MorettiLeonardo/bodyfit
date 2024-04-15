import bg from '../../assets/images/BannerTrainer/background.jpg'

const BannerTrainer = () => (
  <div
    className="bg-no-repeat bg-cover object-cover h-[300px]"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="container flex flex-col">
      <h2 className="font-bold text-white text-3xl mt-[60px]">
        Precisa de um instrutor de fitness?
      </h2>
      <h2 className="font-bold text-white text-3xl mt-4">
        <span className="text-red-600">Ligue:</span> +123-456789
      </h2>
      <button className=" max-w-max bg-red-600 text-white flex item-center p-4 gap-2 mt-8 font-bold uppercase transition ease-linear hover:bg-zinc-50 hover:text-zinc-800">
        COMPRE AGORA
      </button>
    </div>
  </div>
)

export default BannerTrainer
