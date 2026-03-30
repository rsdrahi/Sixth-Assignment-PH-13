import './App.css'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Rating from './component/Rating/Rating'
import StepSection from './component/StepSectoin/StepSection'
import Workflow from './component/Workflow/Workflow'

function App() {
  
  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <StepSection></StepSection>
      <Workflow></Workflow>
      <Footer></Footer>
     
    </>
  )
}

export default App
