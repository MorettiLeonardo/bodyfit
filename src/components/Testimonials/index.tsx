import person from '../../assets/images/Testimonials/testimonial.jpg'
import as from '../../assets/images/Testimonials/aspas.png'
import shape from '../../assets/images/Testimonials/testimonial-shape.svg'
import titleBg from '../../assets/images/titlebg.svg'

const Testimonials = () => (
  <div className="container h-screen flex flex-col justify-center items-center gap-[15%] ">
    <div className="relative flex justify-center items-center w-[16rem]">
      <h2 className="text-white font-bold uppercase z-30">Testimonials</h2>
      <img className="w-full h-auto -z-30 absolute" src={titleBg} alt="" />
    </div>
    <div className="border-8 p-8">
      <div className="relative p-8 bg-black w-full h-80">
        <img
          className="rounded-tr-[14rem] max-w-[400px] absolute right-0 left-0 bottom-0"
          src={person}
          alt=""
        />
        <img
          className="absolute bottom-0 right-16 max-w-[175px]"
          src={shape}
          alt=""
        />
        <div className="text-white ml-[40%]">
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
