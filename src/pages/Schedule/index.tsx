import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeaderBanner from '../../components/HeaderBanner'
import ScheduleDays from '../../components/ScheduleDays'

const Schedule = () => (
  <>
    <Header />
    <HeaderBanner pageName="Programação da semana" />
    <ScheduleDays />
    <Footer />
  </>
)

export default Schedule
