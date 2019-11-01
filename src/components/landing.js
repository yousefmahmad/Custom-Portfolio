import React, { Component } from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import bgImg from '../images/bg.jpg'

const Body = styled.body`
margin: 0;
`

const Description = styled.ul`
  color: #a6a6a6;
  font-size: 85px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
`

const LandingContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  background-image: linear-gradient(
    to bottom, 
    rgba(0, 0, 0, 1),
    rgba(79, 79, 79, 0.49)),
    url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  align-content: center;
  justify-content:center;
  margin:0;
`

const CleanListItem = styled.li`
  list-style: none;
`

const Name = styled.h1`
color:white;
padding:20px 15px;
font-size: 85px;
border-right: 2px solid #8f0000;
height: 15%;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
display: flex;
flex-direction: row;
list-style:none;
/* Hover Not working */
&:hover{color:#8f0000};
`


class Landing extends Component {
  render() {
    return (
        <LandingContainer>
          <Name>
            <Link to='./portfolio' style={{ textDecoration: 'none', color: 'white' }} >YOUSEF</Link>
          </Name>
          <Description>
            <CleanListItem>AHMAD</CleanListItem>
            <CleanListItem>CREATIVITY</CleanListItem>
            <CleanListItem>ENGINEERING</CleanListItem>
            <CleanListItem>SOFTWARE</CleanListItem>
            <CleanListItem>STRATEGY</CleanListItem>
          </Description>
        </LandingContainer>
    )
  }
}

export default Landing