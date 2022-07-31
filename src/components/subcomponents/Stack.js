import React from 'react'
import styled from '@emotion/styled'

const Stack = ({ name }) => {
  const Stac = styled.span`
    display: inline-block;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    margin: 0.25rem;
    padding: 0.25rem 0.7rem;
    border-radius: var(--radius);
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    :hover {
    background: var(--clr-primary-1);
    color: var(--clr-primary-10);
    transition: var(--transition);
    }
  `
  return (
      <Stac>{name}</Stac>
  )
}

export default Stack