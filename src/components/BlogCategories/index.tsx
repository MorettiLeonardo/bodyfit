const BlogCategories = () => (
  <div className="bg-zinc-100 p-8 rounded">
    <h2 className="font-bold text-xl">Categorias</h2>
    <div className="max-w-[50px] h-[4px] bg-red-600 my-4" />
    <div className="flex flex-col gap-4">
      <p className="flex justify-between font-medium text-zinc-500 border-b border-zinc-200 py-3 cursor-pointer transition ease-linear hover:text-red-600">
        Musculação <span>(4)</span>
      </p>
      <p className="flex justify-between font-medium text-zinc-500 border-b border-zinc-200 py-3 cursor-pointer transition ease-linear hover:text-red-600">
        Box <span>(4)</span>
      </p>
      <p className="flex justify-between font-medium text-zinc-500 border-b border-zinc-200 py-3 cursor-pointer transition ease-linear hover:text-red-600">
        Yoga <span>(4)</span>
      </p>
      <p className="flex justify-between font-medium text-zinc-500 border-b border-zinc-200 py-3 cursor-pointer transition ease-linear hover:text-red-600">
        Crossfit <span>(4)</span>
      </p>
      <p className="flex justify-between font-medium text-zinc-500 border-b border-zinc-200 py-3 cursor-pointer transition ease-linear hover:text-red-600">
        Fitness <span>(4)</span>
      </p>
      <p className="flex justify-between font-medium text-zinc-500 border-b border-zinc-200 py-3 cursor-pointer transition ease-linear hover:text-red-600">
        Meditação <span>(4)</span>
      </p>
    </div>
  </div>
)

export default BlogCategories
