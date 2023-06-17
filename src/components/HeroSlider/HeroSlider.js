import Card from "../Card/Card"

export default function HeroSlider() {
  const items = [
    {
      id: Math.floor(Math.random() * 1000),
      img: "https://i.pinimg.com/originals/27/b2/1f/27b21fae2298a482fb8d7f247dcba79a.png",
      name: "Gardian of the galaxy Vol 3",
      rating: 4,
    },
    {
      id: Math.floor(Math.random() * 1000),
      img: "https://i.pinimg.com/originals/27/b2/1f/27b21fae2298a482fb8d7f247dcba79a.png",
      name: "Gardian of the galaxy Vol 3",
      rating: 4,
    },
    {
      id: Math.floor(Math.random() * 1000),
      img: "https://cdn.shopify.com/s/files/1/1057/4964/products/Avengers-Endgame-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1670821335",
      name: "Gardian of the galaxy Vol 3",
      rating: 4,
    },
    {
      id: Math.floor(Math.random() * 1000),
      img: "https://cdn.shopify.com/s/files/1/1057/4964/products/Avengers-Endgame-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1670821335",
      name: "Gardian of the galaxy Vol 3",
      rating: 4,
    },
    {
      id: Math.floor(Math.random() * 1000),
      img: "https://cdn.shopify.com/s/files/1/1057/4964/products/Avengers-Endgame-Vintage-Movie-Poster-Original-1-Sheet-27x41.jpg?v=1670821335",
      name: "Gardian of the galaxy Vol 3",
      rating: 4,
    },
  ]

  return (
    <div
      className="slider h-auto mx-2 absolute bottom-2 left-0 right-0 flex flex-row items-center overflow-x-scroll z-40"
      style={{ overflowY: "visible" }}
    >
      {items.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}
