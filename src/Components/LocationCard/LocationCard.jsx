import './location-card.css'
import location2 from '../../assets/location2.png'

const LocationCard = () => {
  return (
    <>
    <div className="card-container">
        <div className="location-img">
            <figure>
                <img src={location2} alt="" />
            </figure>
        </div>
        <h1 className="location-inner-heading">
                Surry Hills - Laundry and Dry Cleaning
            </h1>

            <div className="location-pins">
                <div className="location-pin">
                <i class="fa-solid fa-location-dot"></i>
                <p>ADDRESS: 326 Crown Street, Surry Hills NSW 2010</p>
                </div>
                <div className="location-pin">
                <i class="fa-solid fa-phone"></i>
                <p>PHONE: +61 403861744</p>
                </div>
                <div className="location-pin">
                <i class="fa-regular fa-envelope"></i>
                <p>EMAIL: washmatesydney@gmail.com</p>
                </div>
            </div>
            <button className='btn-location'>View Location</button>
    </div>
    </>
  )
}

export default LocationCard