import React from 'react'
import styled from 'styled-components'

// const Button = styled.button``;

const Button = (props) => {
  return (
    <div>
      <button type={props.type} className='button' onClick = {props.onClick} >
        {props.children}
      </button>
    </div>
  )
}

export default Button
