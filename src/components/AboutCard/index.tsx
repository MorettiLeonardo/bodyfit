type Props = {
  title: string
  text: string
  img: string
}

const AboutCard = ({ text, title, img }: Props) => (
  <div className="-mt-20 w-80 h-80 flex flex-col items-center justify-center text-center gap-4 bg-white shadow-lg rounded-tr-3xl rounded-bl-3xl">
    <img src={img} alt="" />
    <h2 className="font-bold text-2xl uppercase">{title}</h2>
    <p className="text-zinc-950 font-medium">{text}</p>
  </div>
)

export default AboutCard
