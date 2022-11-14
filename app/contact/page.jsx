"use client";

import { useNavContext } from "../../context/navbar";

export default function Page() {
  const [isNavExpanded] = useNavContext();
  return (
    <>
      <div className="main-content">
        <section
          className={
            isNavExpanded
              ? "contact section active open"
              : "contact section active"
          }
          id="contact"
        >
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>Contact Me</h2>
              </div>
            </div>

            <div className="row">
              <form
                action="https://formspree.io/f/mzbyjapy"
                className="contact-form padd-15"
                method="POST"
              >
                <div className="row">
                  <div className="form-item col-6 padd-15">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name*"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-item col-6 padd-15">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email*"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject*"
                        name="subject"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-item col-12 padd-15">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Your Message..."
                        name="message"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 padd-15">
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}