import Lottie from 'lottie-react'
import crypto from "../cryptoAnimation.json"
import { TypeAnimation } from 'react-type-animation';

function herosection() {
    return (
        <div className='flex flex-row'>
            <div className=' items-center p-7  '>
            <center>
                <h1  className='font-bold text-black dark:text-white  text-6xl font-serif  pt-28'>Discover trends,monitor markets, and  <span className=' text-green-600'>conquer Crypto</span> </h1>
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
      <br/>
                              <div className='bg-blue-400 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-800 rounded-3xl p-3  w-fit h-fit  text-xl font-semibold font-serif'><button>Get Started Now</button></div>
            </center>
          
            </div>
            <div className='' >
                <Lottie animationData={crypto} className='pb-5 ' style={{ width: '600px', height: '680px' }} />

            </div>
        </div>
    )
}

export default herosection
