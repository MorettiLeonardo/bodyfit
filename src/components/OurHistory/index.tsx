import img1 from '../../assets/images/OurHistory/1.jpg'
import img2 from '../../assets/images/OurHistory/2.jpg'
import target from '../../assets/images/OurHistory/target.png'
import montain from '../../assets/images/OurHistory/montain.png'
import bg from '../../assets/images/AboutUs/bgAbout.jpg'

const OurHistory = () => (
  <div className="py-12" style={{ backgroundImage: `url(${bg})` }}>
    <div className="container flex flex-col items-center">
      <div className="flex justify-center lg:justify-between w-full lg:bg-white">
        <div className="flex w-[600px] flex-col justify-center items-center text-center gap-6">
          <img src={target} className="max-w-[70px]" alt="" />
          <h2 className="font-bold text-black text-3xl">Nossa História</h2>
          <p className="max-w-[400px] text-zinc-600 font-medium">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit Exercitation
            veniam consequat.
          </p>
        </div>
        <img className="w-[50%] hidden lg:block" src={img1} alt="" />
      </div>
      <div className="flex justify-center lg:justify-between w-full lg:bg-white">
        <img className="w-[50%] hidden lg:block" src={img2} alt="" />
        <div className="flex w-[600px] flex-col justify-center items-center text-center gap-6">
          <img src={montain} className="max-w-[70px]" alt="" />
          <h2 className="font-bold text-black text-3xl">Nossa História</h2>
          <p className="max-w-[400px] text-zinc-600 font-medium">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit Exercitation
            veniam consequat.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default OurHistory
