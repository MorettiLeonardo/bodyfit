import Title from '../TItle'

import bg from '../../assets/images/Prices/bg.jpg'
import img1 from '../../assets/images/Prices/1.jpg'
import img2 from '../../assets/images/Prices/2.jpg'
import img3 from '../../assets/images/Prices/3.jpg'

const priceData = [
  {
    id: 1,
    plan: 'Iniciante',
    price: '39',
    access: [
      'Personal Trainer',
      'Free Hand',
      'Gym Fitness',
      'Weight Loss',
      'Cycling'
    ],
    img: img1
  },
  {
    id: 2,
    plan: 'Iniciante',
    price: '65  ',
    access: [
      'Free Hand',
      'Gym Fitness',
      'Personal Trainer',
      'Weight Loss',
      'Cycling'
    ],
    img: img2
  },
  {
    id: 3,
    plan: 'Iniciante',
    price: '100',
    access: [
      'Gym Fitness',
      'Free Hand',
      'Weight Loss',
      'Personal Trainer',
      'Cycling'
    ],
    img: img3
  }
]

const Prices = () => (
  <div className="min-h-screen pb-32" style={{ backgroundImage: `url(${bg})` }}>
    <div className="container flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-8 pt-24 pb-24">
        <Title text="TABELA DE PREÇOS" />
        <h2 className="font-bold text-3xl">Plano de preços exclusivo</h2>
        <p className="text-zinc-600 font-semibold max-w-[600px] text-center">
          Gymat, um impressor desconhecido pegou uma galera de tipos e mexeu
          faça um livro de espécimes tipo.
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[100%]">
        {priceData.map((plan) => (
          <li key={plan.id} className="md:w-[100%] text-center bg-white">
            <div
              className="bg-cover bg-no-repeat w-full h-[235px] relative"
              style={{ backgroundImage: `url(${plan.img})` }}
            >
              <h3 className="text-xl text-zinc-700 max-w-max bg-white font-bold absolute bottom-0 left-0 right-0 mx-auto py-4 px-16">
                {plan.plan}
              </h3>
            </div>
            <div className="p-10 flex flex-col items-center">
              <h2 className="font-bold text-5xl ">
                <span className="text-xl">R$</span> {plan.price}
                <span className="font-normal text-zinc-500 text-xl">p/m</span>
              </h2>
              <ul className="flex flex-col gap-4 font-semibold text-zinc-500 mt-4 mb-4">
                {plan.access.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button className="text-sm max-w-max bg-red-600 text-white flex item-center p-4 gap-2 font-bold uppercase transition ease-linear hover:shadow-2xl">
                COMPRE AGORA
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Prices
