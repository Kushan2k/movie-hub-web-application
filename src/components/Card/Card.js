"use client"
import Image from "next/image"

export default function Card({ item }) {
  return (
    <div className="w-auto md:w-44  hover:scale-110 hover:-translate-y-10 cursor-pointer ease-linear p-1 bg-slate-200 rounded-l">
      <Image src={item.img} alt={item.name} width={350} height={250} />
    </div>
  )
}
