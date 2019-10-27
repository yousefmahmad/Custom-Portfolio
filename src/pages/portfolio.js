import React, { Component } from "react"
import styled from 'styled-components'
// import { Route, Link, Switch } from "react-router-dom"
import "./landing.css"


const Description = styled.h1`
color: #a6a6a6;
font-size: 85px;
position: relative;
top:15px;
left: 635px;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
`

class Landing extends Component {
  render() {
    return (
      <>
        <h1 className='name'>
          YOUSEF
        </h1>
        <Description>
          <h1>AHMAD</h1>
        </Description>
      </>
    
  
      )
    }
  }
  
export default Landing