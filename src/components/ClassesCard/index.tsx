type Props = {
  name: string
  classTime: string
  img: string
}

const ClassesCard = ({ name, classTime, img }: Props) => (
  <div
    className="w-full h-80 bg-cover bg-center relative cursor-pointer card-class"
    style={{ backgroundImage: `url(${img})` }}
  >
    <div className="absolute left-6 bottom-6 ">
      <p className="text-white text-2xl mb-2 font-bold">{name}</p>
      <p className="text-white text-sm bg-red-700 p-2 max-w-max">{classTime}</p>
    </div>
  </div>
)

export default ClassesCard
