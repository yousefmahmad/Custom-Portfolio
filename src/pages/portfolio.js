import React, { Component } from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import bgImg from '../images/bg.jpg'
import { FaEnvelope, FaLinkedin, FaMedium, FaGithub, FaLink } from "react-icons/fa";



const Aside = styled.div`
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
  width: 50vw;
  justify-content:center;
  position:fixed;
`
const Name = styled.h1`
color:white;
padding:20px 15px;
font-size: 85px;
border-right: 2px solid #8f0000;
height: 10%;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
display: flex;
flex-direction: row;
margin: 0;
margin-top: 3%
margin-bottom: 0;
`
const LastName = styled.h1`
color:#a6a6a6;
padding:20px 15px;
font-size: 85px;
height: 15%;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
display: flex;
flex-direction: row;
margin-top: 3%;
margin-bottom: 0;
`
const List = styled.ul`
  color: white;
  font-size: 40px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
  display:flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 60%;
  margin-top: 0;
  margin-bottom: 0;
  `
const CleanListItem = styled.li`
  list-style: none;
`
const MediaIcons = styled.ul`
  font-size: 40px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
  display:flex;
  align-items: flex-end;
  margin-top:0;
  margin-left: 50%;
  margin-bottom: 25%;
  align-items: baseline;
`

const CleanIconItem = styled.li`
  list-style: none;
  padding: 0 5px;
`

class Portfolio extends Component {
  render() {
    return (
      <>
        <Aside>
          <Name> Yousef</Name> <LastName>Ahmad</LastName>
          <List>
            <CleanListItem>Blog</CleanListItem>
            <CleanListItem>About</CleanListItem>
            <CleanListItem>Resume</CleanListItem>
            <CleanListItem>Contact</CleanListItem>
            <CleanListItem>Projects</CleanListItem>
          </List>
          <MediaIcons>
            <CleanIconItem><a href="mailto:ymabreek@gmail.com" style={{textDecoration:'none', color: 'rgba(163, 163, 163, .5)'}}><FaEnvelope /></a></CleanIconItem>
            <CleanIconItem><a href="https://github.com/yousefmahmad" style={{textDecoration:'none', color: 'rgba(163, 163, 163, .5)'}}><FaGithub /></a></CleanIconItem>
            <CleanIconItem><a href="www.linkedin.com/in/yousef-m-ahmad" style={{textDecoration:'none', color: 'rgba(163, 163, 163, .5)'}}><FaLinkedin /></a></CleanIconItem>
            <CleanIconItem><a href="https://medium.com/@ymabreek" style={{textDecoration:'none', color: 'rgba(163, 163, 163, .5)'}}><FaMedium /></a></CleanIconItem>
          </MediaIcons>
        </Aside>
        <h1>SOFTWARE ENGINEER</h1>
        <p></p>
      </>
    )
  }
}


export default Portfolio