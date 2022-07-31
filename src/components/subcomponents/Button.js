import React from 'react'

const Button = () => {
   const Btn = styled.button`
    text-transform: capitalize;
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
    padding: 0.375rem 0.75rem;
    display: inline-block;
    font-weight: 700;
    font-size: 1.1rem;
    border: 4px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    font-family: Poppins;
    letter-spacing: var(--spacing);
      :hover {
      color: var(--clr-primary-1);
      background: var(--clr-primary-8);
      transition: var(--transition);
    }
  `
  return (
    <Btn />
  )
}

export default Button