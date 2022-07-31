import React from 'react'
import styled from '@emotion/styled'

const Title = ({ title }) => {
  const Titl = styled.div`
    margin-bottom: 4rem;
    text-align: center;
  `
  return (
    <Titl>
      <h2>{title}</h2>
    </Titl>
  )
}

export default Title