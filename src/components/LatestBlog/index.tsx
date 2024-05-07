import Title from '../TItle'

const recentNews = [
  {
    id: 1,
    date: '22.03.2024',
    title: 'Ioga para todos em 2023',
    description:
      'Este é um programa desenvolvido para tornar a prática de yoga benéfica para pessoas de todas as idades, habilidades e origens.'
  },
  {
    id: 2,
    date: '13.09.2024',
    title: 'Voltando ao CrossFit após as férias',
    description:
      'Aprenda como voltar à rotina de CrossFit após as férias com dicas e estratégias para o sucesso.'
  },
  {
    id: 3,
    date: '28.06.2024',
    title: 'Conheça a Embaixadora do Fitness, Grace',
    description:
      'Conheça Grace, uma entusiasta do fitness e embaixadora dedicada que é apaixonada por ajudar outras pessoas a alcançar seus objetivos de fitness.'
  }
]

const LatestBlog = () => (
  <div className="container flex flex-col items-center justify-center py-24 gap-8">
    <Title text="Blog" />
    <h2 className="font-bold text-3xl">Nossas notícias recentes</h2>
    <p className="font-semibold text-zinc-500 max-w-[500px] text-center">
      Nossas noticias mais recents no nosso blog, confira abaixo!
    </p>
    <div>
      <ul className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {recentNews.map((news) => (
          <li key={news.id}>
            <div className="p-4 shadow-xl h-[400px] flex flex-col gap-6 relative">
              <p className="py-1 px-3 mt-8 border max-w-max border-black font-bold rounded-full">
                {news.date}
              </p>
              <h2 className="font-bold text-xl">{news.title}</h2>
              <p className="font-semibold text-zinc-500">{news.description}</p>
              <button className="absolute bottom-[48px] left-[24px] text-white bg-red-600 p-3 max-w-max uppercase font-bold transition ease-linear hover:shadow-lg">
                Leia mais
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default LatestBlog
