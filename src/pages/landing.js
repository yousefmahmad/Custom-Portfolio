import React, { Component } from "react"
import styled from 'styled-components'
import {Link} from "gatsby"
import Portfolio from './portfolio'
import '../components/fonts.css'
import "./landing.css"


const Description = styled.h1`
color: #a6a6a6;
font-size: 70px;
position: relative;
top: 40px;
left: 570px;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
`

class Landing extends Component {
  render() {
    return (
      <>
        <h1 className='name'>
          <Link to="../pages/portfolio">YOUSEF</Link>
      </h1>
        <Description>
          <ul>
          <li>AHMAD</li>
          <li>CREATIVITY</li>
          <li>ENGINEERING</li>
          <li>SOFTWARE</li>
          <li>STRATEGY</li>
          </ul>
      </Description>
      </>

    )
  }
}

export default Landing