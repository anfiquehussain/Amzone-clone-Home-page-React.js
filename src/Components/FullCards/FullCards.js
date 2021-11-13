import React, { useEffect, useState } from 'react'
import { fakestoreapiAllproducts } from '../../Database/Constantce'
//AiOutlineStar 
import { AiFillStar } from 'react-icons/ai';
import './FullCards.css'
import axios from 'axios';

const FullCards = () => {

    const [Fake, setFake] = useState([])
    console.log(Fake)


    useEffect(() => {

        FakeApiAll()
    }, [])

    // const FakeApiAll = async () => {
    //     const response = await fetch('https://fakestoreapi.com/products')
    //     const JsonFake = await response.json()
    //     // console.log(JsonFake)
    //     setFake(JsonFake)
    // }

    const FakeApiAll =()=>{
        axios.get(fakestoreapiAllproducts).then(response=>{
            console.log(response.data)
            setFake(response.data)
        })
    }
    return (
        <>
            <div className='Row' >
                <h3 className='Head'>Inspired by your browsing history</h3>
                <div className='cards'>

                    {Fake.map((ProductData) => {
                        return (
                            <div>
                                <img className='imgp' src={ProductData.image} alt="Dat Error" />
                                <div className='tcard'>
                                <h5 className='titlep'>{ProductData.title}</h5>
                                <div className="rated">
                                <h5 className='ratetite'><AiFillStar size={17} color='#FFA41C' className='rate'/>{ProductData.rating.rate} count {ProductData.rating.count}</h5>
                                </div>
                                </div>
                                <h6 className='pce'>${ProductData.price}</h6>
                                <p className='freed'>FREE Delivery over ₹499. Fulfilled by Amazon</p>

                               
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default FullCards
