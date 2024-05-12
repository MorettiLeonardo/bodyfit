import ad from '../../assets/images/ad.png'

const BlogAd = () => (
  <div
    style={{ backgroundImage: `url('${ad}')` }}
    className="w-[200px] h-[280px] lg:w-[400px] lg:h-[560px] bg-no-repeat bg-cover z-10 relative"
  >
    <h2 className="bg-white text-black absolute top-[6%] py-2 px-8 text-sm lg:text-4xl font-bold ad-shape">
      BodyFit
    </h2>
    <h2 className="absolute top-[60%] left-[10px] text-white text-sm lg:text-6xl flex flex-col font-bold gap-1">
      34%{' '}
      <span className="text-sm lg:text-2xl max-w-[100px]">Desconto fixo</span>
    </h2>
  </div>
)

export default BlogAd
