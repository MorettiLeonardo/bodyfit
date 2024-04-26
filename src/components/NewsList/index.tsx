import { Search } from 'lucide-react'

import New from '../New'

const NewsList = () => (
  <div className="container pt-20 flex justify-between">
    <ul className="flex flex-col gap-14">
      <li className="max-w-[700px] max-h-[700px]">
        <New />
      </li>
      <li className="max-w-[700px] max-h-[700px]">
        <New />
      </li>
      <li className="max-w-[700px] max-h-[700px]">
        <New />
      </li>
    </ul>
    <aside className="max-w-[400px] w-full">
      <div className="flex">
        <input
          className="w-full p-4 rounded-l-lg border border-[#ccc]"
          type="text"
          placeholder="Buscar..."
        />
        <Search className="bg-red-600 text-white w-[60px] h-[60px] p-3 rounded-r-lg" />
      </div>
    </aside>
  </div>
)

export default NewsList
