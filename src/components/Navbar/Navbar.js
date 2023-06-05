"use client"
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <div className="text-center h-16 bg-black  flex items-center justify-center">
      <h4 className={`font-bold text-white ${styles.text}`}>Navbar</h4>
    </div>
  )
}
