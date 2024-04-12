import image1 from '../../assets/images/Classes/cycling.jpg'
import image2 from '../../assets/images/Classes/karate.jpg'
import image3 from '../../assets/images/Classes/power.jpg'
import image4 from '../../assets/images/Classes/meditation.jpg'
import image5 from '../../assets/images/Classes/mma.jpg'
import image6 from '../../assets/images/Classes/workout.jpg'

import ClassesCard from '../ClassesCard'
import Title from '../TItle'

const classesData = [
  {
    id: 1,
    img: image1,
    name: 'Ciclismo',
    time: 'Quarta-feira: 09:00-10:00'
  },
  {
    id: 2,
    img: image2,
    name: 'Karate',
    time: 'Sexta-feira: 10:00-11:00'
  },
  {
    id: 3,
    img: image3,
    name: 'Power',
    time: 'Sabádo: 09:00-10:00'
  },
  {
    id: 4,
    img: image4,
    name: 'Meditação',
    time: 'Sexta-feira: 13:00-14:00'
  },
  {
    id: 5,
    img: image5,
    name: 'Lutas',
    time: 'Domingo: 18:00-19:00'
  },
  {
    id: 6,
    img: image6,
    name: 'Musculação',
    time: 'Segunda-feira: 16:00-17:00'
  }
]

const Classes = () => (
  <section className="bg-white h-screen flex flex-col justify-center items-center">
    <Title text="AULAS EM DESTAQUE" />
    <div className="container ">
      <h1 className="text-center text-4xl font-bold mb-10 mt-5">
        Estamos Oferecendo as Melhores Aulas Flexíveis
      </h1>
      <ul className="grid grid-cols-3 gap-6">
        {classesData.map((item) => (
          <li key={item.id}>
            <ClassesCard
              img={item.img}
              name={item.name}
              classTime={item.time}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Classes
