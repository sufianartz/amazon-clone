import React from 'react'
import './Home.css'
import Product from './product/Product'
import Slider from './Slider'


const Home = () => {
  return (
    <div className="home">
    <div className="home__container">
      {/* <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      /> */}

      <Slider slides={[<img  className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>,<img  className="home__image" src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'/>,<img className="home__image" src='https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg'/>]}/>

      <div className="home__row">
        <Product
          id="12321341"
          title="Seagate IronWolf Pro 16TB NAS Internal Hard Drive HDD – CMR 3.5 Inch SATA 6GB/S 7200 RPM 256MB Cache"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81COXAdmKcL._AC_UL320_.jpg"
        />
        <Product
          id="49538094"
          title="Turtle Beach Stealth 700 Gen 2 MAX Multiplatform Amplified Wireless Gaming Headset for Xbox Series X|S, Xbox One, PS5, PS4, Windows 10 & 11 PCs"
          price={239.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/81bB-vG-HGL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="4903850"
          title="Google Pixle 4gb Ram, 128gn Rom, Bluetooth 3.0, Fast Charging"
          price={199.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/41-8P9PrydL._AC_UF226,226_FMjpg_.jpg"
        />
        <Product
          id="23445930"
          title="Liquid I.V. Hydration, Energy and Immune Multipliers"
          price={98.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51FBIadULSL._AC_UF226,226_FMjpg_.jpg"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51sMbY4+K+L._AC_UF226,226_FMjpg_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="90829332"
          title="Ac invertor fully automated power saving best for home"
          price={1094.98}
          rating={4}
          image="https://www.freepnglogos.com/uploads/ac-png/ac-white-blue-star-split-ton-star-for-office-use-and-8.png"
        />
      </div>
    </div>
  </div>
  )
}

export default Home