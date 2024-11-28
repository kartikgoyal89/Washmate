import './card.css'

import Washing from '../../assets/washing.png'
export default function Card(){
    return(
        <>
        <div className="service-card-container">
            <figure>
                <img src={Washing} alt="" />
            </figure>
            <h3 className='service-heading'>Laundry</h3>
            <p className='services'>Regular Household Clothes Clean Up, Folded, Ready to go into your Wardrobe for use</p>

            <button className='btn'>view more</button>
        </div>
        </>
    )
}