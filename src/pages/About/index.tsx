import AboutUs from '../../components/AboutUs'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeaderBanner from '../../components/HeaderBanner'
import OurHistory from '../../components/OurHistory'

const About = () => (
  <>
    <Header />
    <HeaderBanner pageName="Sobre a gente" />
    <AboutUs displayCards={false} />
    <OurHistory />
    <Footer />
  </>
)

export default About
