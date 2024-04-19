import bg from '../../assets/images/haderBanner.jpg'

type Props = {
  pageName: string
}

const HeaderBanner = ({ pageName }: Props) => (
  <div
    className="min-w-[100%] min-h-[400px] bg-no-repeat bg-cover text-center relative"
    style={{ backgroundImage: `url('${bg}' )` }}
  >
    <h1 className="text-white absolute bottom-8 left-0 right-0 font-bold text-3xl">
      {pageName}
    </h1>
  </div>
)

export default HeaderBanner
