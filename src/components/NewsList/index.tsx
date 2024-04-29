import { Search } from 'lucide-react'

import New from '../New'
import BlogCategories from '../BlogCategories'
import BlogPopularTags from '../BlogPopularTags'
import RecentPosts from '../RecentPosts'
import BlogAd from '../BlogAd'

const NewsList = () => (
  <div className="container pt-20 flex justify-between">
    <ul className="flex flex-col gap-14">
      <li className="max-w-[800px] max-h-[800px]">
        <New />
      </li>
      <li className="max-w-[800px] max-h-[800px]">
        <New />
      </li>
      <li className="max-w-[800px] max-h-[800px]">
        <New />
      </li>
    </ul>
    <aside className="max-w-[400px] w-full flex flex-col gap-10">
      <div className="flex">
        <input
          className="w-full p-4 rounded-l-lg border border-[#ccc]"
          type="text"
          placeholder="Buscar..."
        />
        <Search className="bg-red-600 text-white w-[60px] h-[60px] p-3 rounded-r-lg" />
      </div>
      <BlogCategories />
      <BlogPopularTags />
      <RecentPosts />
      <BlogAd />
    </aside>
  </div>
)

export default NewsList
