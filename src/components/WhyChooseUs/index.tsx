import bg from '../../assets/images/ChooseUs/choose-bg.jpg'
import main from '../../assets/images/ChooseUs/main-img.png'
import shape from '../../assets/images/ChooseUs/shape.png'
import bottle from '../../assets/images/ChooseUs/bottle.png'
import equipament from '../../assets/images/ChooseUs/equipament.png'
import bag from '../../assets/images/ChooseUs/bag.png'
import Title from '../TItle'

const WhyChooseUs = () => (
  <div
    className="h-screen bg-no-repeat bg-cover flex items-center justify-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="container flex gap-32">
      <img src={main} alt="Uma pessoa treinando" />
      <div className="max-w-lg">
        <Title text="Escolha a gente" />
        <h2 className="text-white font-bold text-4xl mt-6">
          Podemos dar uma forma ao seu corpo aqui!
        </h2>
        <p className="text-zinc-400 leading-6 mt-4">
          Na <b>BodyFit</b>, nos dedicamos a ajudá-lo a alcançar o corpo dos
          seus sonhos. Nossos treinadores e nutricionistas especializados
          trabalharão com você para criar um plano personalizado de
          condicionamento físico e nutrição que o ajudará a atingir seus
          objetivos específicos.
        </p>
        <div className="mt-6 text-white font-bold text-lg grid grid-cols-2 gap-8">
          <div className="flex justify-center items-center gap-4">
            <img
              className="max-w-16 rounded-full bg-zinc-800 p-3 transition ease-linear hover:bg-red-600"
              src={shape}
              alt=""
            />
            <p>Treinamento físico gratuito</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              className="max-w-16 rounded-full bg-zinc-800 p-3 transition ease-linear hover:bg-red-600"
              src={equipament}
              alt=""
            />
            <p>Equipamentos de treino modernos</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              className="max-w-16 rounded-full bg-zinc-800 p-3 transition ease-linear hover:bg-red-600"
              src={bag}
              alt=""
            />
            <p>Bolsas de ginástica</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              className="max-w-16 rounded-full bg-zinc-800 p-3 transition ease-linear hover:bg-red-600"
              src={bottle}
              alt=""
            />
            <p>Água fresca para beber</p>
          </div>
        </div>
        <button className="uppercase bg-zinc-500 text-white font-bold p-4 mt-20 transition ease-linear hover:bg-red-500">
          Nossas aulas
        </button>
      </div>
    </div>
  </div>
)

export default WhyChooseUs
