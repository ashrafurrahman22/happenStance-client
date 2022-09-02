import React from 'react';
import hero from '../../assets/Hero.png'
import oval from '../../assets/Oval.png'
import two from '../../assets/Next.png'
import one from '../../assets/Prev.png'
import play from '../../assets/video.png'
import fb from '../../assets/facebok.png'
import insta from '../../assets/insta.png'
import twitter from '../../assets/twitter.png'
import '../../Styles/Home.css'

const Home = () => {
    return (
        <div>

            <div className='grid grid-cols-3'>
            <div>
                <h2 style={{
                    fontFamily:"unica one"
                }} className="text-xl">Select Size (us)</h2>
                <div className='flex items-center gap-4 py-5'>
                    <div className='flex cursor-pointer justify-center w-10 border'>
                    <h2>8</h2>
                    </div>
                    <div className='flex cursor-pointer justify-center w-10 border'>
                    <h2>8.5</h2>
                    </div>
                    <div className='flex cursor-pointer justify-center w-10 border'>
                    <h2>9</h2>
                    </div>
                    <div className='flex cursor-pointer justify-center w-10 border'>
                    <h2>9.5</h2>
                    </div>
                    <div className='flex cursor-pointer justify-center w-10 border'>
                    <h2>10</h2>
                    </div>
                </div>
                <div className='py-6'>
                    <h2 style={{
                    fontFamily:"unica one"
                    }} className="text-xl">Select Color</h2>
                    <div className='flex gap-6 py-3'>
                    <div style={{backgroundColor:"#B6A179"}} className='w-10 h-10 cursor-pointer rounded-full'></div>
                    <div style={{backgroundColor:"#272425"}} className='w-10 h-10 cursor-pointer rounded-full'></div>
                    <div style={{backgroundColor:"#6389CB"}} className='w-10 h-10 rounded-full cursor-pointer'></div>
                    <div style={{backgroundColor:"#F2C758"}} className='w-10 cursor-pointer h-10 rounded-full'></div>
                </div>
                    </div>
            </div>

            <div className='mx-[-150px] mt-[-40px]'>
                <img className='2/3' src={hero} alt="" />
                <div className='flex justify-center items-center mx-[-150px] mt-[-280px]'>
                    <img style={{
                        width:"860px"
                    }} src={oval} alt="" />
                </div>
            </div>

            <div className='top-8'>
                <h2>MEN'S SANDALS</h2>
                <h1 style={{
                fontFamily:"unica one"
            }} className='text-5xl py-3 font-medium'>HUNK - Toffee</h1>
                <p className='text-justify'>Add a spring to your step with this elegant and sleek pair of footwear! With its heavily padded ankle straps for secure footing and matted steel buckles that add flair, support and style go hand in hand with these hunk sandals</p>
            </div>
            
        </div>

            <div className='flex items-center justify-between'>
                <div>
                    <h2
                    id='text'>Scroll down</h2>
                </div>

                <div>
                    <div>
                        <img className='py-2' src={insta} alt="" />
                        <img className='py-2' src={twitter} alt="" />
                        <img className='py-2' src={fb} alt="" />

                    </div>
                </div>
            </div>

            <div className='flex justify-between px-16 py-10 justify-center items-center'>
                <div className='flex flex-col'>
                    <h2>DRAG TO MOVE</h2>
                    <div className='w-32 flex justify-center gap-7'>
                        <img src={one} alt="" />
                        <img src={two} alt="" />
                    </div>
                </div>
                <div>
                    <img className='bg-base-300 p-4 rounded-full' src={play} alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-bold'>add to cart — ₹1599 </h2>
                </div>
            </div>
            

        </div>
    );
};

export default Home;