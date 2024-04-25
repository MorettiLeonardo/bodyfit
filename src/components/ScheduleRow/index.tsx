type Props = {
  className: string
  time: string
  trainer: string
}

const ScheduleRow = ({ className, time, trainer }: Props) => (
  <div className="w-[90%] flex items-center justify-center bg-[#f2f2f2] p-7 mt-6">
    <div className="grid items-center justify-center w-full gap-2 text-center ">
      <p className="font-semibold text-[#b2a0a0] text-sm">Nome da aula</p>
      <p className="font-bold text-lg">{className}</p>
    </div>
    <div className="grid items-center justify-center w-full gap-2 text-center ">
      <p className="font-semibold text-[#b2a0a0] text-sm">Horário</p>
      <p className="font-bold text-lg">{time}</p>
    </div>
    <div className="grid items-center justify-center w-full gap-2 text-center ">
      <p className="font-semibold text-[#b2a0a0] text-sm">Treinador</p>
      <p className="font-bold text-lg">{trainer}</p>
    </div>
    <div className="grid items-center justify-center w-full gap-2">
      <button className="bg-[#555555] text-white font-semibold text-sm px-5 py-3 rounded-full transition ease-linear hover:bg-red-600">
        Entre agora
      </button>
    </div>
  </div>
)

export default ScheduleRow
