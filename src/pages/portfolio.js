import React, { Component } from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import bgImg from '../images/bg.jpg'
import hShot from '../images/Headshot.png'
import { FaEnvelope, FaLinkedin, FaMedium, FaGithub, FaLink } from "react-icons/fa";
import { LoremIpsum } from 'react-lorem-ipsum'



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
  top: 0;
  left:1;
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
margin-top: 3%;
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
const ContentContainer = styled.div`
width: 50vw;
display:flex;
flex-direction:column;
margin-right: 0;
margin-left: 50%;
`
const SoftTitle = styled.h1`
display:flex;
margin-left: 15px;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
font-size: 48px;
`
const SoftDescrip = styled.p`
display: flex;
justify-content: left;
margin-left: 10px;
margin-right: 0;
padding-left: 10px;
width: 30vw;
font-family: 'Josefin Sans', sans-serif;
font-weight: 100;
`
const ImgContainer = styled.div`
display:flex;
justify-content: flex-end;
align-items:center;
margin-left: 30px;
`
const HeadContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
`
const DescripContainer = styled.div`
display:flex;
`

const ProjectsContainer = styled.div`
display: flex;
`

const ProjTitle = styled.h1`
display:flex;
margin-left: 15px;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
font-size: 48px;
border-bottom: 2px solid #8f0000;
padding-right: 60vh;
`
const IndivProjTitle = styled.div`
display:flex;
margin-left: 15px;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
font-size: 48px;
`

class Portfolio extends Component {
  render() {
    return (
      <>
      {/* Aside container */}
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
            <CleanIconItem><a href="mailto:ymabreek@gmail.com" style={{ textDecoration: 'none', color: 'rgba(163, 163, 163, .5)' }}><FaEnvelope /></a></CleanIconItem>
            <CleanIconItem><a href="https://github.com/yousefmahmad" style={{ textDecoration: 'none', color: 'rgba(163, 163, 163, .5)' }}><FaGithub /></a></CleanIconItem>
            <CleanIconItem><a href="www.linkedin.com/in/yousef-m-ahmad" style={{ textDecoration: 'none', color: 'rgba(163, 163, 163, .5)' }}><FaLinkedin /></a></CleanIconItem>
            <CleanIconItem><a href="https://medium.com/@ymabreek" style={{ textDecoration: 'none', color: 'rgba(163, 163, 163, .5)' }}><FaMedium /></a></CleanIconItem>
          </MediaIcons>
        </Aside>
        <ContentContainer>

          {/* Software Engineering Description */}
          <HeadContainer>
            <SoftTitle>Software Engineer</SoftTitle>
            <DescripContainer>
              <SoftDescrip><LoremIpsum p={1} /></SoftDescrip>
              <ImgContainer>
                <img src={hShot} alt='Yousef Ahmad' style={{ height: '200px' }} />
              </ImgContainer>
            </DescripContainer>
          </HeadContainer>


          {/* Projects */}
          <ProjectsContainer>
            <ProjTitle>
              Projects
            </ProjTitle>
          </ProjectsContainer>
        </ContentContainer>
      </>
    )
  }
}


export default Portfolio