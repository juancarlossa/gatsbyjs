import React from 'react'
import styled from '@emotion/styled'

const Title = ({ title }) => {
  const Titl = styled.div`
    margin-bottom: 3rem;
    text-align: center;
    color: var(--clr-white-1);
  `
  return (
    <Titl>
      <h3>{title}</h3>
    </Titl>
  )
}

export default Title