import Hero from '../component/Hero'
import HeroCta from '../component/HeroCta'
import OrderTaking from '../component/OrderTaking'
import SlidingMenu from '../component/SlidingMenu'

export default function HomePage() {
    return(
        <div 
            id='HomePage'
            className="bg-red-300 py-[25px]"
        >

            <Hero />

            <HeroCta />

            <SlidingMenu />
        </div>
    )
}