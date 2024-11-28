import Navbar from '../Components/Navbar/Navbar.jsx';
import Hero from '../Components/Hero/Hero.jsx'
import Services from '../Components/Services/Services.jsx'
import Review from '../Components/Reviews/Review.jsx'
import Location from '../Components/Location/Location.jsx';
import Background from '../Components/Background/Background.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import FAQ from '../Components/FAQ/faq.jsx'
import GetInTouch from '../Components/GetInTouch/Touch.jsx'
import './home.css'

export default function Home(){
    return (
        <>
        <section className="home-container">

        <Navbar/>
        <Background className='hero-background'>
        <Hero/>
        </Background>
        <Services/>
        <Review/>
        <Background className='location-background'>
        <Location/>
        </Background>
        <GetInTouch/>
        <FAQ/>
        <Background className='footer-background'>
        <Footer/>
        </Background>
        </section>

        </>
    )
}