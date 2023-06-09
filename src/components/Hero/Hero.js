"use client"

import Image from "next/image"
import "./hero.module.css"
import HeroSlider from "../HeroSlider/HeroSlider"

function Hero() {
  return (
    <div className="h-full w-full pt-28 px-10 ">
      <Image
        src={"https://cdn.mos.cms.futurecdn.net/vVfuiTzEkLttTmu3qcsv7h.jpg"}
        alt="bg img"
        className="absolute"
        fill
        style={{
          zIndex: -100,
          objectFit: "cover",
        }}
      />
      <div className="hero z-40 text-white mt-28 pl-0 md:pl-10">
        <h1 className="font-mono font-extrabold text-6xl">Treading Now</h1>
        <div className="text-box sm:w-3/4 mt-5 md:w-1/2">
          <p className="leading-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam
            deserunt maxime sunt eos accusamus. Ducimus quod quasi quidem
            recusandae mollitia consequuntur beatae blanditiis. Ea, rerum.
            Nostrum, in. Ducimus, tenetur.
          </p>
        </div>
      </div>
      <HeroSlider />
    </div>
  )
}

export default Hero
