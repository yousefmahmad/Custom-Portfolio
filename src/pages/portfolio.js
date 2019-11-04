import React, { Component } from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import bgImg from '../images/bg.jpg'
import hShot from '../images/Headshot.png'
import TowerImg from '../images/TowerOfHanoi.png'
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { LoremIpsum } from 'react-lorem-ipsum'
import MernTrans from '../images/MERN-Translate.png'
import PHTGB from '../images/PHTGB.png'

const baseURL = 'https://yousefahmad.dev/'

const PageContainer = styled.div`
@media (max-width: 950px){
  flex-direction: column;
}
`

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

  @media (max-width: 1000px){
    width: 100vw;
    height: 50vh;
   
  }
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

  @media(max-width: 1000px){
    align-content: center;
    flex-direction: row;
    margin: 0 auto;
    margin-bottom:10px;
  }
  `
const CleanListItem = styled.li`
  list-style: none;

  @media(max-width: 1000px){
    padding: 0 10px;
  }
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

  @media(max-width:1000px){
    margin: 0 auto;
  }
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

@media(max-width: 1000px){
  width: fit-content;
  align-content:center;
  margin-left:0;
  height: 50vh;
  margin-top: 60%;
}
`
const SoftTitle = styled.h1`
display:flex;
margin-left: 15px;
font-family: 'Josefin Sans', sans-serif;
font-weight: 400;
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
font-size: 24px;

@media (max-width: 1000px){
  width: 70vw;
}
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
flex-direction: column;
`

const ProjTitle = styled.h1`
display:flex;
margin-left: 15px;
margin-right: 15%;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
font-size: 48px;
border-bottom: 2px solid #8f0000;
padding-right: 60vh;
padding-bottom: 15px;
`
const IndivProjContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const IndivProjTitle = styled.h2`
display:flex;
margin-left: 15px;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
font-size:36px;
/* hover not working */
&:hover{color:#8f0000};
`
const IndivProjDescrip = styled.p`
display: flex;
justify-content: center;
margin: 0 auto;
width: 40vw;
font-family: 'Josefin Sans', sans-serif;
font-weight: 100;
font-size: 24px;

@media (max-width: 1000px){
  width: 70vw;
}
`

class Portfolio extends Component {
  render() {
    return (
      <>
        {/* Aside container */}
        <Aside>
          <Name> Yousef</Name> <LastName>Ahmad</LastName>
          <List>
            <CleanListItem>
              <Link to='./portfolio' style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
            </CleanListItem>
            <CleanListItem>
              <a href={'https://medium.com/@ymabreek'} target="_blank" style={{ textDecoration: 'none', color: 'white' }}  >Blog</a>
            </CleanListItem>
            {/* <CleanListItem>
              <Link to='./about' style={{ textDecoration: 'none', color: 'white' }}>
                About
              </Link>
            </CleanListItem> */}
            <CleanListItem>
              <Link to='./resume' style={{ textDecoration: 'none', color: 'white' }}>
                Resume
              </Link>
            </CleanListItem>
            <CleanListItem>
              <Link to='./contact' style={{ textDecoration: 'none', color: 'white' }}>
                Contact
              </Link>
            </CleanListItem>
          </List>
          <MediaIcons>
            <CleanIconItem><a href={"http://twitter.com/intent/tweet/?url=" + baseURL} style={{ textDecoration: 'none', color: 'rgba(163, 163, 163, .5)' }}><FaTwitter /></a></CleanIconItem>
            <CleanIconItem><a href="https://github.com/yousefmahmad" style={{ textDecoration: 'none', color: 'rgba(163, 163, 163, .5)' }}><FaGithub /></a></CleanIconItem>
            <CleanIconItem><a href={"https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=Some%20Title&summary=Some%20Summary&source=" + baseURL} style={{ textDecoration: 'none', color: 'rgba(163, 163, 163, .5)' }}><FaLinkedin /></a></CleanIconItem>
            <CleanIconItem><a href={"https://wwww.facebook.com/sharer/sharer.php?u=" + baseURL} style={{ textDecoration: 'none', color: 'rgba(163, 163, 163, .5)' }}><FaFacebook /></a></CleanIconItem>
          </MediaIcons>
        </Aside>

        <ContentContainer>
          {/* Software Engineering Description */}

          <HeadContainer>
            <SoftTitle>Software Engineer</SoftTitle>
            <DescripContainer>
              <SoftDescrip>Full stack web developer with experience in Petroleum Engineering and management. I have a passion for modern design, mathematical puzzles and an attention to detail, which allows me to build contemporary, clean and unique products. </SoftDescrip>
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
            <IndivProjContainer>
              <a href={'https://pages.git.generalassemb.ly/yousefmahmad/towerofhanoi.github.io/'} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={TowerImg} alt='Tower of Hanoi' style={{ width: '400px', border: '1px solid black' }} />
              </a>
              <IndivProjTitle>
                <a href={'https://pages.git.generalassemb.ly/yousefmahmad/towerofhanoi.github.io/'} style={{ textDecoration: 'none', color: 'black' }}>
                  Tower of Hanoi
                </a>
              </IndivProjTitle>
              <IndivProjDescrip>
                <LoremIpsum p={1} />
              </IndivProjDescrip>
            </IndivProjContainer>
            <br />
            <IndivProjContainer>
              <a href={'https://mern-translate.herokuapp.com/'} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={MernTrans} alt='MERN-Translate App' style={{ width: '400px', border: '1px solid black' }} />
              </a>
              <IndivProjTitle>
                <a href={'https://mern-translate.herokuapp.com/'} style={{ textDecoration: 'none', color: 'black' }}>
                  Mern-Translate
                </a>
              </IndivProjTitle>
              <IndivProjDescrip>
                <LoremIpsum p={1} />
              </IndivProjDescrip>
            </IndivProjContainer>
            <br />
            <IndivProjContainer>
              <a href={'https://photos-from-the-great-beyond.netlify.com/'} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={PHTGB} alt='MERN-Translate App' style={{ width: '400px', border: '1px solid black' }} />
              </a>
              <IndivProjTitle>
                <a href={'https://photos-from-the-great-beyond.netlify.com/'} style={{ textDecoration: 'none', color: 'black' }}>
                  Photos from the Great Beyond
                </a>
              </IndivProjTitle>
              <IndivProjDescrip>
                <LoremIpsum p={1} />
              </IndivProjDescrip>
            </IndivProjContainer>
          </ProjectsContainer>
        </ContentContainer>
      </>
    )
  }
}


export default Portfolio