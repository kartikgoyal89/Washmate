
import touch from '../../assets/touch.png'
import './touch.css'
const Touch = () => {
  return (
    <>
    <section className="touch-section">
        <div className="touch-background">
        <figure>
        <img className='touch-bg' src={touch} alt="" />
        </figure>
        </div>
        <div className="text-content">
          
        <div className="left-part">
          <div className="top-part">
          <h1>Get in touch</h1>
          <div className="btn first-btn">
            <button>Enter First Name</button>
            <button>Enter Last Name</button>
          </div>
          <div className="btn second-btn">
            <button>Enter email ID </button>
          </div>
          <div className="btn third-btn">
            <button>Enter Message</button>
          </div>
          </div>
        </div>
        <div className="right-part">
          <div className="comment mb-2">
          Got a question or need assistance?
          </div>
          <div className="comment">Contact us! Whether its about our <br />services or just to say hello, were </div>
          <div className="below-comment">
          here to help.
          </div>

        </div>
        </div>
    </section>
    </>
  )
}

export default Touch