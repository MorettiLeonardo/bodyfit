import bg from '../../assets/images/Prices/bg.jpg'

import { allClassesData } from '../../components/Data'

const AllClasses = () => (
  <div
    style={{ backgroundImage: `url(${bg})` }}
    className="flex justify-center items-center py-20"
  >
    <ul className="grid gap-6 xl:grid-cols-3 md:grid-cols-2">
      {allClassesData.map((currentClass) => (
        <li
          key={currentClass.id}
          style={{ backgroundImage: `url(${currentClass.img})` }}
          className="w-[300px] h-[300px] md:h-[367px] md:w-[376px] p-4 rounded-md text-white bg-cover bg-center bg-no-repeat relative shadow-lg"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md" />
          <div className="absolute inset-0 flex flex-col gap-1 p-4">
            <h2 className="font-bold text-3xl mt-[50%]">{currentClass.name}</h2>
            <div className="max-w-[50px] h-[4px] bg-red-600 my-2" />
            <p>{currentClass.time}</p>
            <button className="bg-white text-black p-3 mt-2 font-bold hover:bg-black max-w-max hover:text-white transition ease-linear">
              Junte-se a nós
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default AllClasses
