"use client"
import Image from "next/image"

export default function Card({ item }) {
  return (
    <div className="w-1/2  p-1 mx-2 z-50 hover:scale-110 hover:-translate-y-10 cursor-pointer ease-in delay-50 bg-slate-300 rounded-lg md:w-1/6">
      <Image src={item.img} alt={item.name} width={300} height={250} />
    </div>
  )
}
