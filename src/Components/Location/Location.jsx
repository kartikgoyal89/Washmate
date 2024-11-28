import Background from "../Background/Background"
import './location.css'
import LocationCard from "../LocationCard/LocationCard"

export default function Location(){
    return(
        <>
        <section className="section-location">
           <div className="location-content">
           <h1 className="location-heading">Your Preferred Wash Mate Locations</h1>
           </div>
           <div className="location-cards">
            <LocationCard/>
            <LocationCard/>
           </div>
        </section>
        </>
    )
}