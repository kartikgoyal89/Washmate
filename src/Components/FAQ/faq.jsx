import './faq.css'
export default function FAQ() {
  return (
    <><section className="section-faq">
      
      <h1 className='faq-heading'>
        Frequently Asked <span>Questions</span>
      </h1>
      <div className="accordion-section">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What should I prepare for the first pickup?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              We aim to collect your clothes, clean them to a professional standard and get them back to you all within 48 hours. If you’d prefer we went a little slower then that’s not a problem – just let us know when you want your clothes back.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Can I add extra items to my order when you collect…
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              We aim to collect your clothes, clean them to a professional standard and get them back to you all within 48 hours. If you’d prefer we went a little slower then that’s not a problem – just let us know when you want your clothes back.ne this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Can I order by phone or email?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              We aim to collect your clothes, clean them to a professional standard and get them back to you all within 48 hours. If you’d prefer we went a little slower then that’s not a problem – just let us know when you want your clothes back.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Where are my clothes cleaned?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              We aim to collect your clothes, clean them to a professional standard and get them back to you all within 48 hours. If you’d prefer we went a little slower then that’s not a problem – just let us know when you want your clothes back.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
