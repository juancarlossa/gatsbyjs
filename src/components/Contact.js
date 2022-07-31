import styled from "@emotion/styled"
import React from "react"

const Contact = () => {
  const ContactPage = styled.section`
    background-color: var(--clr-primary-0);
    display: grid;
    place-items: center;
    padding: 5rem 0;
  `
  const ContactForm = styled.section`
    background: var(--clr-primary-3);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
    padding-top: 2rem;
    margin-top: 2rem;
    padding-bottom: 0;
  `
  const Btn = styled.button`
    text-transform: capitalize;
    background: var(--clr-primary-5);
    border-color: var(--clr-blue);
    color: var(--clr-primary-9);
    display: inline-block;
    font-weight: 500;
    font-size: 1.1rem;
    border: 2px solid var(--clr-primary-3);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    font-family: Poppins;
    letter-spacing: var(--spacing);
    :hover {
      background: var(--clr-primary-8);
      transition: var(--transition);
      color: var(--clr-primary-3);
    }
  `
  return (
      <ContactPage id="contact">
        <h3>get in touch</h3>
        <ContactForm>
          <form
            action="https://formsubmit.co/juank987610@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
            </div>
            <Btn type="submit" className="submit-btn">
              submit here
            </Btn>
          </form>
        </ContactForm>
      </ContactPage>
  )
}

export default Contact