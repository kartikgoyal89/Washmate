import ReactStars from 'react-stars'
import './review.css'
import profile from '../../assets/profile.png'

export default function ReviewCard(){
    return(
        <>
       <div className="main-container">
       <div className="review-container">
            <div className="profile">
                <div className="photo">
                    <figure>
                        <img src={profile} alt="" />
                    </figure>
                </div>
                <div className="user-details">
                <h5>Leon Zhang</h5>
                <p>Google Reviews</p>
                <ReactStars
                    count={5}
                    value={3}
                    size={24}
                    color2='#174689' />
                </div>
            </div>
            <hr />
            <h5 className='review-txt'>The wonderful team at Wash Mate did a great job dry cleaning my two-piece suit, which was in quite a state when I gave it to them. Stains were removed and now looks good as new. Plus they were able to do the job in one day over the weekend. I dropped my suit off on Saturday and picked it up on Sunday. It is very hard to find a dry cleaner in Sydney that can provide this level of
            service.</h5>
        </div>
       </div>
        </>
    )
}