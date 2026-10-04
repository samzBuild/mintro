import ChoosUs from "./sections/ChoosUs"
import DownloadApp from "./sections/DownloadApp"
import Hero from "./sections/Hero"
import Menu from "./sections/Menu"
import Navbar from "./sections/Navbar"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ChoosUs/>
    <Menu/>
    <Testimonials/>
    <DownloadApp/>
    </>
  )
}

export default App