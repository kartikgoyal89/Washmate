import bubble from '../../assets/bubble.png'
import Card from '../ServiceCard/Card'
import './service.css'
export default function Services(){
    return(
        <>
        <section className="section-service">
            <div className="main-heading">
                <h1>
                    Professional Care and Services
                </h1>

                <div className="service-container">
                    <div className="bubbles-container">
                    <div className="left-bubbles">
                        <img src={bubble} alt="" />
                    </div>
                    <div className="right-bubbles">
                        <img src={bubble} alt="" />
                    </div>
                    </div>

                    <div className="services">
                    <div className="service"> <Card className='card-box'/></div>
                    <div className="service"> <Card className='card-box'/></div>
                    <div className="service"> <Card className='card-box'/></div>
                    <div className="service"> <Card className='card-box'/></div>
                    <div className="service"> <Card className='card-box'/></div>
                    <div className="service"> <Card className='card-box'/></div>
                    <div className="service"> <Card className='card-box'/></div>
                    <div className="service"> <Card className='card-box'/></div>
                    </div>
                </div>


            </div>
        </section>
        </>
    )
}