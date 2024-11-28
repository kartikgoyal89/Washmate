import './nav.css'
import logo from '../../assets/logo.png'
export default function Navbar(){
    return(
        <>
        <section className="nav-section">
            <div className="logo">
                <figure>
                    <img src={logo} alt="Logo Image" />
                </figure>
            </div>

            <div className="links">
                <ul>
                    <li className="nav-link"><a href="" className="nav-item">Home</a></li>
                    <li className="nav-link"><a href="" className="nav-item">Services</a></li>
                    <li className="nav-link"><a href="" className="nav-item">Blogs</a></li>
                    <li className="nav-link"><a href="" className="nav-item">Pricing</a></li>
                    <li className="nav-link"><a href="" className="nav-item">Faq</a></li>
                    <li className="nav-link"><a href="" className="nav-item">Locations</a></li>
                    <li className="nav-link"><a href="" className="nav-item">Login</a></li>
                    <li className="nav-link"><a href="" className="nav-item">Contact</a></li>
                </ul>
            </div>
            <i className="fa-solid fa-bars"></i>
        </section>
        </>
    )
}