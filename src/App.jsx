import { Suspense } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Pricing from './component/Pricing/Pricing'
import Rating from './component/Rating/Rating'
import StepSection from './component/StepSectoin/StepSection'
import Workflow from './component/Workflow/Workflow'

const pricingPromise = fetch('pricingData.json')
.then(res => res.json())

function App() {
  
  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <StepSection></StepSection>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>
      <Workflow></Workflow>
      <Footer></Footer>
     
    </>
  )
}

export default App
