import React from "react"
import socialLinks from "../constants/social_links"
import styled from "@emotion/styled"

const Footer = () => {
  const Footr = styled.footer`
    height: 9rem;
    background: var(--clr-primary-0);
    text-align: center;
    display: grid;
    place-items: center;
    h4 {
      margin-top: 0.5rem;
      color: var(--clr-white);
      font-weight: normal;
      text-transform: uppercase;
    }
    h4 span {
      color: var(--clr-primary-8);
    }
    .footer-links {
      margin: 0 auto 1rem auto;
    }
    .social-link {
      color: var(--clr-primary-10);
      transition: var(--transition);
      margin: 0 1rem ;
    }
    .social-link:hover {
      color: var(--clr-primary-8);
    }
  `
  return (
    <Footr>
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright &copy; {new Date().getFullYear()}
          <span> Juank</span> all rights reserved
        </h4>
      </div>
    </Footr>
  )
}

export default Footer
