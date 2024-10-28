import Footer from "@/components/all/Footer"
import Jumbotron from "@/components/all/Jumbotron"



const Home = () => {
  return (
    <main className='w-full h-screen flex flex-col bg-white'>
      <div className='mt-20 overflow-y-scroll'>
        <Jumbotron></Jumbotron>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </main>
  )
}

export default Home