import ClassesCard from '../ClassesCard'
import Title from '../TItle'
import { classesMainData } from '../Data'

const Classes = () => (
  <section className="bg-white py-6 min-h-screen flex flex-col justify-center items-center">
    <Title text="AULAS EM DESTAQUE" />
    <div className="container ">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-10 mt-5">
        Estamos Oferecendo as Melhores Aulas Flexíveis
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classesMainData.map((item) => (
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
