import { Suspense } from 'react'
import React, { useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Pricing from './component/Pricing/Pricing'
import Rating from './component/Rating/Rating'
import StepSection from './component/StepSectoin/StepSection'
import Workflow from './component/Workflow/Workflow'
import Products from './component/Products/Products'
import Cart from './component/Cart/Cart'
import Tabs from './component/Tabs/Tabs'

const pricingPromise = fetch('pricingData.json')
  .then(res => res.json())


const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json();
}
  
const productsPromise = getProducts();

function App() {

  const [activeTab, setActiveTab] = useState("product")
  // console.log(activeTab)
  const [carts, setCarts] = useState([])
  
  return (
    <>

      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} cartCount={carts.length}></Tabs>
      {activeTab === "product" && <Products productsPromise={productsPromise}
        carts={carts} setCarts={setCarts}
      ></Products>}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
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
