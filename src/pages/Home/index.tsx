import AboutUs from '../../components/AboutUs'
import Banner from '../../components/Banner'
import BannerTrainer from '../../components/BannerTrainer'
import CalcImc from '../../components/CalcImc'
import Classes from '../../components/Classes'
import Header from '../../components/Header'
import HomeHero from '../../components/HomeHero'
import OurTeam from '../../components/OurTeam'
import Testimonials from '../../components/Testimonials'
import WhyChooseUs from '../../components/WhyChooseUs'
import Prices from '../../components/Prices'

const Home = () => (
  <>
    <Header />
    <HomeHero />
    <AboutUs />
    <Classes />
    <Banner />
    <WhyChooseUs />
    <OurTeam />
    <Testimonials />
    <CalcImc />
    <Prices />
    <BannerTrainer />
  </>
)

export default Home
