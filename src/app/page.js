import { Content, Hero } from "@/components"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Content />
    </main>
  )
}
