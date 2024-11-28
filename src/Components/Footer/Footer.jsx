import './footer.css'
import FooterImg from '../../assets/footer.png'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'

const Footer = () => {
  return (
    <>
    <section className="section-footer">
            <div className="footer-content">
                <div className="left-footer-img">
                    <figure>
                        <img src={FooterImg} alt="" />
                    </figure>
                </div>
                <div className="right-footer-links">
                    <div className="top-navlinks">
                        <div className="left-navlinks">
                            <h4>Services</h4>
                            <ul>
                                <li>Home</li>
                                <li>Services</li>
                                <li>Contact</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="right-navlinks">
                        <h4>Important Links</h4>
                            <ul>
                                <li>Important Links</li>
                                <li>Dry Cleaning Pricing</li>
                                <li>Pick up and Delivery</li>
                                <li>What our Clients Say</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-navlinks mt-3">
                        <div className="left-navlinks">
                            <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                            <p>+61 403861744</p>
                            </div>
                            <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                            <p>info@washmate.com.au</p>
                            </div>
                        </div>
                        <div className="right-navlinks">
                                <div className='our-blogs'>
                                    <h4>Our Blogs</h4>
                                </div>
                            <div className="blogs-container">
                                
                                <div className="blog-img">
                                    <figure>
                                        <img src={blog1} alt="" />
                                    </figure>
                                </div>
                                <div className="blog-img">
                                    <figure>
                                        <img src={blog2} alt="" />
                                    </figure>
                                </div>
                                <div className="blog-img">
                                    <figure>
                                        <img src={blog3} alt="" />
                                    </figure>
                                </div>
                            </div>
                            <div className="website-logo">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-tiktok"></i>
                            <i className="fa-solid fa-circle-play"></i>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </>
  )
}

export default Footer