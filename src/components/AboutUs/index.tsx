import clock from '../../assets//images/AboutUs/clock.png'
import workout from '../../assets//images/AboutUs/workout.png'
import nutrition from '../../assets//images/AboutUs/nutrition.png'

import AboutCard from '../AboutCard'

const AboutUs = () => (
  <section className="container">
    <div className="grid grid-cols-3">
      <AboutCard
        img={clock}
        title="Progreção"
        text="Nossa equipe de especialistas trabalhará com você para criar um plano personalizado que o ajudará a alcançar o sucesso, passo a passo."
      />
      <AboutCard
        img={workout}
        text="Nossa equipe de especialistas trabalhará com você para criar um plano personalizado que o ajudará a alcançar o sucesso, passo a passo."
        title="Progreção"
      />
      <AboutCard
        img={nutrition}
        text="Nossa equipe de especialistas trabalhará com você para criar um plano personalizado que o ajudará a alcançar o sucesso, passo a passo."
        title="Progreção"
      />
    </div>
  </section>
)

export default AboutUs
