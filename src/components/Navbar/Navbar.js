"use client"
import { usePathname } from "next/navigation"
import SearchSharpIcon from "@mui/icons-material/SearchSharp"
import Link from "next/link"
import { useState } from "react"
import styles from "./navbar.module.css"

export default function Navbar() {
  const pathName = usePathname().split("/")[1]

  const [isSearchVisible, setVisible] = useState(false)

  return (
    <div className="absolute top-0 right-0 left-0 z-50 text-center px-5 text-white  bg-black bg-opacity-95 py-3 flex items-center justify-between bg-gradient-to-t from-slate-800 to-black opacity-90 flex-col gap-y-2 md:flex-row gap-0">
      {!isSearchVisible && (
        <div className="logo hidden md:flex">
          <h1>
            <span className=" font-extrabold text-2xl pr-1">M</span>
            ovieHub
          </h1>
        </div>
      )}
      <div className="nav-list flex ">
        <li className="flex gap-x-5 justify-around items-center list-none">
          <ul
            className={`${
              pathName === "" ? "text-cyan-300" : ""
            } hover:text-cyan-500 cursor-pointer`}
          >
            <Link href={"/"}>Home</Link>
          </ul>
          <ul
            className={`${
              pathName === "shows" ? "text-cyan-300" : ""
            } hover:text-cyan-500 cursor-pointer`}
          >
            <Link href={"/shows"}>Tv Shows</Link>
          </ul>
          <ul
            className={`${
              pathName === "movies" ? "text-cyan-300" : ""
            } hover:text-cyan-500 cursor-pointer`}
          >
            Movies
          </ul>
          <ul
            className={`${
              pathName === "upcoming" ? "text-cyan-300" : ""
            } hover:text-cyan-500 cursor-pointer`}
          >
            Upcoming
          </ul>
        </li>
      </div>
      <div className="btns flex items-center overflow-x-hidden">
        {isSearchVisible && (
          <div className={`${styles.box} z-10`}>
            <input
              type="text"
              placeholder="Search"
              className="p-1 pl-2 outline-none mr-2 rounded-full text-cyan-800 focus:outline-cyan-400 border-none"
            />
          </div>
        )}

        <button
          onClick={() => {
            setVisible(!isSearchVisible)
          }}
          className="rounded-full z-50 bg-cyan-800 hover:bg-gradient-radial from-cyan-800 to-cyan-500 transition p-2"
        >
          <SearchSharpIcon />
        </button>
      </div>
    </div>
  )
}
