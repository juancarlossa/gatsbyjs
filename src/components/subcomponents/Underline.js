import styled from '@emotion/styled'
import React from 'react'

const Underline = () => {
  const Underlin = styled.div`
    width: 10rem;
    height: 0.1rem;
    margin-bottom: 0.75rem;
    margin-left: 0;
    margin-right: auto;
    transition: var(--transition);
    background: var(--clr-primary-10);
  `
  return (
    <Underlin></Underlin>
  )
}

export default Underline