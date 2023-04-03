import React, { useEffect, useState } from 'react'
import AboutUs from '../components/AboutUs'
import Categories from '../components/Categories'
import Eco from '../components/Eco'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import News from '../components/News'
import Newsletter from '../components/Newsletter'
import Offer from '../components/Offer'
import OfferCards from '../components/OfferCards'
import Testimonial from '../components/Testimonial'
import TopCategories from '../components/TopCategories'


const Main = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchData(){
      await fetch("http://localhost:8800/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
      
    }
    fetchData()
  }, [])

basic loyaut 
  return (
    <div>
      <Navbar />
      <Intro />
      <Offer />
      <AboutUs />
      <Categories products={products} />
      <Testimonial />
      <OfferCards products={products} />
      <Eco />
      <TopCategories />
      <News />
      <Newsletter />
      <Footer />
    </div>
  )
}

export d