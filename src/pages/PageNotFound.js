import { useEffect } from "react"
import  PageNotFoundPageImage  from "../assets/images/pagenotfound.png"

export const PageNotFound = () => {
  useEffect(() =>{
    document.title = `Page Not Found/cinemate`
})
  return (
    <main>
        <section className="flex flex-col justify-center px-2">
          <div className="flex flex-col items-center my-4">
           <p className="text-7xl text-gray-700 font-bold  my-10 dark:text-white">404, Oops!</p>
           <img className="rounded" src={PageNotFoundPageImage} alt="404 Oops Page not found " />
          </div>
          <div></div>
        </section>
    </main>
  )
}


