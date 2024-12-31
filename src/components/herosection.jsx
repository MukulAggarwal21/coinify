import Lottie from 'lottie-react'
import crypto from "../cryptoAnimation.json"
import { TypeAnimation } from 'react-type-animation';

function herosection() {
    return (
        <div className='flex flex-row'>
            <div className=' items-center p-7  '>
            <center>
                <h1  className='font-bold dark:text-white light:text-black  text-6xl font-serif  pt-28'>Discover trends,monitor markets, and  <span className=' text-green-600'>conquer Crypto</span> </h1>
    <h1 className='text-blue-600 font-semibold mt-7 '>
                        <TypeAnimation
                            sequence={[
                                'Monitor live market trends',
                                1500,
                                'Analyze coins with ease',
                                1500,
                                'Real-time stats, real results', 
                                1500, 
                                'Insights that drive success', 
                                1500,
                                
                                
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            
                            />

                            </h1>
            </center>

            </div>
            <div className='' >
                <Lottie animationData={crypto} className='pb-5 ' style={{ width: '600px', height: '680px' }} />

            </div>
        </div>
    )
}

export default herosection
