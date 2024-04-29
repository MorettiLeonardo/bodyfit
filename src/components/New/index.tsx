import { Layers3 } from 'lucide-react'

type Props = {
  img: string
  title: string
  description: string
  author: string
}

const New = ({ description, img, title, author }: Props) => (
  <div className="max-w-[800px] max-h-[800px] flex flex-col gap-4">
    <img src={img} alt="Imagem da notícia" />
    <p className="flex gap-2 font-semibold text-zinc-600 text-sm items-center">
      <Layers3 className="text-red-600 w-[17px]" /> {author}
    </p>
    <h3 className="font-bold text-3xl">{title}</h3>
    <p className="font-semibold text-zinc-500">{description}</p>
    <button className="max-w-max bg-red-600 text-white flex item-center p-4 gap-2 font-bold uppercase transition ease-linear hover:shadow-2xl">
      Saiba mais
    </button>
  </div>
)

export default New
