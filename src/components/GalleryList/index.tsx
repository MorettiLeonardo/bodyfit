import { galleryImg } from '../GalleryFiles'

const GalleryList = () => (
  <div className="container">
    <ul className="max-w-[80%] my-[0] mx-[auto] grid grid-cols-3 gap-4 grid-rows-3 py-10">
      {galleryImg.map((item) => (
        <li className=" " key={item.id}>
          <img
            className="min-w-full min-h-full"
            src={item.img}
            alt="Foto da academia"
          />
        </li>
      ))}
    </ul>
  </div>
)

export default GalleryList
