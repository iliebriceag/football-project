import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h1 className='text-center'>Contact</h1>
      <p className='text-muted text-center mb-5'>În această secțiune găsiți detaliile noastre de contact.</p>

      <div className="row">
        <div className="col-md-6">
          <form onSubmit='test'>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nume</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mesajul tău..</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="my-btn-primary">Trimite</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="section-contact-part">
            <p className="text-muted">
              <i className="bi bi-person-fill me-2"></i>
              <strong>Nume:</strong> Fotbal
            </p>
            <p className="text-muted">
              <i className="bi bi-geo-alt-fill me-2"></i>
              <strong>Adresa:</strong> Strada mea, Nr.23, Sec. 6, Bucuresti, Romania
            </p>
            <p className="text-muted">
              <i className="bi bi-envelope-fill me-2"></i>
              <strong>Email:</strong> fotabal@fotbal.ro
            </p>
            <p className="text-muted">
              <i className="bi bi-telephone-fill me-2"></i>
              <strong>Phone:</strong> 0712 345 678
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11473245.87666091!2d20.556992278763672!3d45.83787069315882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff40fbb1db4d%3A0x2e1e0c5403f03d0!2sRomania!5e0!3m2!1sen!2sus!4v1616687555611!5m2!1sen!2sus"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
