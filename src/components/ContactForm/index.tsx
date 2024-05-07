const ContactForm = () => (
  <form className="flex flex-col bg-zinc-100 gap-6 p-10 items-center">
    <div>
      <h1 className="font-bold text-2xl">Deixe-nos suas informações</h1>
      <div className="mt-1 max-w-[50px] h-[4px] bg-red-600" />
    </div>
    <input
      className="w-full p-2 border border-zinc-300"
      type="text"
      placeholder="Nome completo *"
    />
    <input
      className="w-full p-2 border border-zinc-300"
      type="email"
      placeholder="Email *"
    />
    <select
      className="w-full p-2 border border-zinc-300"
      name="class"
      id="class"
    >
      <option value="">Aula</option>
      <option value="Yoga">Yoga</option>
      <option value="Box">Box</option>
      <option value="Corrida">Corrida</option>
      <option value="Fitness">Fitness</option>
      <option value="Musculação">Musculação</option>
      <option value="Karate">Karate</option>
      <option value="MMA">MMA</option>
      <option value="Cilcismo">Cilcismo</option>
    </select>
    <textarea
      className="w-full p-2 border border-zinc-300 resize-none h-[150px]"
      name="comment"
      id="comment"
      placeholder="Comentário"
    />
    <button className="bg-red-600 text-white border-2 flex item-center py-3 px-4 font-bold uppercase transition ease-linear hover:shadow-lg">
      Enviar agora
    </button>
  </form>
)

export default ContactForm
