import React from 'react'
import Fotter from '../Components/FotterHome/Fotter'
import FullCards from '../Components/FullCards/FullCards'
import HomeCarousel from '../Components/Homecarousel/HomeCarousel'
import HomeFullCart from '../Components/Homecarousel/HomeFullCart'
import NavbarF from "../Components/NavbarF/NavbarF"
import NavbarS from '../Components/NavbarS/NavbarS'
import RowProduct from '../Components/ProductCards/RowProduct'
import './Home.css'

function Home() {
    return (
        <div>
            <NavbarF className='C1' />
            <NavbarS className='C2' />
            <HomeCarousel/>
            <HomeFullCart/>
            <RowProduct/>
            <FullCards/>
            <Fotter/>
        </div>
    )
}

export default Home
