import titleBg from '../../assets/images/titlebg.svg'

type Props = {
  text: string
}

const Title = ({ text }: Props) => (
  <div className="relative flex justify-center items-center w-[16rem] z-30">
    <h2 className="text-white font-bold uppercase z-30">{text}</h2>
    <img
      className="w-full h-auto -z-30 absolute"
      src={titleBg}
      alt="Imagem de fundo do título"
    />
  </div>
)

export default Title
