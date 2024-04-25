type Props = {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  active?: boolean
}

const ScheduleButton = ({ text, onClick, active }: Props) => (
  <button
    onClick={onClick}
    className={`font-bold px-6 py-2 border border-[rgb(220 38 38 / var(--tw-bg-opacity))][#a1a1a1] rounded-full transition ease-linear ${active ? 'bg-red-600 text-white' : 'hover:bg-red-600 hover:text-white hover:border-[rgb(220 38 38 / var(--tw-bg-opacity))]] '}`}
  >
    {text}
  </button>
)

export default ScheduleButton
