import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import SellingPoint from './components/SellingPoint'
import ServiceSection from './components/ServiceSection'
import Review from './components/Review'
import PlanSection from './components/PlanSection'
import Footer from './components/Footer'
import FAQ from './components/FAQ'



function App() {


  return (
    <div>
      <Header />
      <main>
        <Hero/>
        <Intro/>
        <SellingPoint/>
        <ServiceSection/>
        <Review/>
        <PlanSection/>
        <FAQ/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
