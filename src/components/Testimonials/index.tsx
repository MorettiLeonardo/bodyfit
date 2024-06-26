import person from '../../assets/images/Testimonials/testimonial.jpg'
import as from '../../assets/images/Testimonials/aspas.png'
import shape from '../../assets/images/Testimonials/testimonial-shape.svg'

import Title from '../TItle'

const Testimonials = () => (
  <div className="container min-h-screen py-10 gap-10 sm:py-0 sm:gap-0 flex flex-col justify-around items-center">
    <Title text="Testimonials" />
    <div className="border-8 p-8">
      <div className="relative p-8 bg-black w-full min-h-max md:h-80">
        <img
          className="hidden xl:block rounded-tr-[14rem] max-w-[400px] absolute right-0 left-0 bottom-0"
          src={person}
          alt=""
        />
        <img
          className="hidden md:block absolute bottom-0 right-16 max-w-[175px]"
          src={shape}
          alt=""
        />
        <div className="text-white m-0 xl:ml-[40%]">
          <img className="max-w-[50px]" src={as} alt="" />
          <p className="italic text-zinc-300 mt-4">
            “Sou membro do Gymate há 6 meses e tem sido uma experiência
            incrível. Os treinadores são experientes e prestativos, o
            equipamento é de primeira qualidade e a comunidade de membros é
            amigável e encorajadora.”
          </p>
          <h3 className="font-bold text-xl mt-4">Harry Potter</h3>
          <p className="mt-4">CEO of Hogwarts</p>
        </div>
      </div>
    </div>
  </div>
)

export default Testimonials
