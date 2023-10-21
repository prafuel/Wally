import React from 'react'
import Image from 'next/image'
import { height } from '@fortawesome/free-solid-svg-icons/faGlobe'

const Section2 = () => {
    const mountain = "Climb the mountain not to plant your flag, but to embrace the challenge, enjoy the air, and behold the view. Climb it so you can see the world, not so the world can see you"
    const summer = "Summer brings a vibrant symphony of colors, where the sun paints the world in hues of gold and green. It's a season of laughter in the sun, with lazy days and endless possibilities"
    const nature = "Nature, the eternal masterpiece, weaves its intricate tapestry of life, where every leaf, creature, and landscape is a testament to the wonders of creation. In its serenity, we find solace; in its diversity, we discover unity."
    const arr = [mountain, summer, nature];
    return (
            <div id='section2' className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 text-white" style={{
                height: "70vh"
            }}>
                <div className="overflow-y-auto shadow-lg">
                <div className='w-full rounded-lg' style={{
                        height: "60%"
                    }}>
                        <Image className='rounded-2xl p-3 hover:border-2 hover:border-gray-500' src="/download1.jpg" alt="Large Image" width={500} height={700}/>
                    </div>
                    
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Mountain</div>
                        <p className="text-gray-700 text-base">
                            {mountain}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mountain</span>
                    </div>
                </div>

                <div className="rounded overflow-y-auto shadow-lg">
                <div className='w-full rounded-lg' style={{
                        height: "60%"
                    }}>
                        <Image className='rounded-2xl p-3 hover:border-2 hover:border-gray-500' src="/mountain.png" alt="Large Image" width={500} height={700}/>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Summer</div>
                        <p className="text-gray-700 text-base">
                            {summer}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#wallpaper</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#deskstop</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>

                <div className="rounded overflow-y-auto shadow-lg">
                <div className='w-full rounded-lg' style={{
                        height: "60%"
                    }}>
                        <Image className='rounded-2xl p-3 hover:border-2 hover:border-gray-500' src="/waterfall.jpg" alt="Large Image" width={500} height={700}/>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Nature</div>
                        <p className="text-gray-700 text-base">
                            {nature}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#green</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nature</span>
                    </div>
                </div>
            </div>
    )
}

export default Section2