import { postsData } from '../Data'

const RecentPosts = () => (
  <div className="bg-zinc-100 p-8 rounded">
    <h2 className="font-bold text-xl">Posts Recentes</h2>
    <div className="max-w-[50px] h-[4px] bg-red-600 my-4" />
    <ul>
      {postsData.map((post) => (
        <li key={post.id} className="flex items-center gap-4 mt-2">
          <img
            className="max-w-[100px] h-[100px] object-cover"
            src={post.img}
            alt="Imagem de academia"
          />
          <div>
            <p className="font-medium text-zinc-500 text-sm">{post.date}</p>
            <h3 className="font-bold mt-1">{post.title}</h3>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default RecentPosts
