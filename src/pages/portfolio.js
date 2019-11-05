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
import Fiji from '../images/Fiji-Mockup.png'
import EnergyBackend from '../images/Energy-Backend.png'

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
margin: 30px 0;

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
              Tower of Hanoi is a mathematical puzzle game which consists of 3 differnt rods or areas in which to place number of disks of varying sizes. The goal of the game is to move the disks from the rightmost rod or area to the leftmost ro or area. Only one disk may be moved at any point. The disks must be, from top to bottom, in order of size. Furthermore, when moving the disks, no disk may be placed upon a disk that is smaller than itself.
              You can calculate the minimal number of moves it will take to win the game by using the mathematical expression of 2^n − 1, where n represents the number of disks. For instance, if you were to play with 3 disks, it would take a minimum of 7 moves to win the game. If you were to play with 5 it would take minimum of 31 moves to win the game. By increasing the the number of disks, the minimal number of moves increases exponentially and therefore, the difficulty.
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
              This app uses a MongoDB, Express.js and Node.js in order to create a simple api which catalogs various phrase translations. In developing this application I learned how to fetch and seed data into a NoSQL database (MongoDB). I was also able to go through and choose the data to manipulate within the database using schemas and models. Using the Express.js framework for Node.js I learned to use a minimal, unåopinionated framework and how to choose the various dependencies to keep my application lightweight and efficient (DRY). I was also able to implement full CRUD functionality into this app using my routes and controllers, which was challenging at first, however after some practice came easily enough.
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
              This project was a collaboration between a team of 4. Users can access some of NASA's "Photo of the Day" entries, as well as photos taken from NASA's Mars Rovers. In addition to this functionality, our app features an Amateur Astronomers gallery where users can upload their own images and view photos that have already been uploaded. We used React.js to create the front-end of this website and Netlify to deploy it. We were able to create this app by splitting up into groups and creating a backend using MongoDB, Express.js and Node.js to fetch data from the free NASA API. Deploying this back-end we used Heroku and Mongo AtlasDB. We then used a second fetch in the front end app to retrieve the data from the back-end API to and created a full CRUD functionality web application to showcase the beautiful images from the last frontier.
              </IndivProjDescrip>
            </IndivProjContainer>
            <br/>
            <IndivProjContainer>
                <img src={Fiji} alt='Fiji-Mockup' style={{ width: '400px', border: '1px solid black' }} />
              <IndivProjTitle>
                  Fiji-Mockup
              </IndivProjTitle>
              <IndivProjDescrip>
              This website mockup was a collaboration between a team of three people. We split the mockup into pieces in order to more efficiently build it. We used a combination of HTML and CSS in order to create content and style this mockup. We were given a pdf to work off of to attempt to recreate the advanced styling that we were trying to mimic. This also served to hone our skills in laying out specific elements on a page that we struggled with previously.
              </IndivProjDescrip>
            </IndivProjContainer>
            <IndivProjContainer>
                <img src={EnergyBackend} alt='Energy-Backend' style={{ width: '400px', border: '1px solid black' }} />
              <IndivProjTitle>
                  DOE Futures Forecast
              </IndivProjTitle>
              <IndivProjDescrip>
              This web API was created using Python, PostgeSQL and REST Django. It was then containerized using Docker. Utilizing the data provided by the Department of Energy’s free API, I was able to fetch data directly from the to compare their forecasts of Petroleum Liquids, Natural Gas and Renewable Energy sources up until 2050. The most difficult process and which took the most amount of time, was learning to use Docker to containerize this application. My next goals are to deploy this site using AWS Elastic Container Service, fetching further data from the API, in real time with fixtures and scripts in Python, to use it to compare forecasted future prices, growth and use within the United States. This data will then be presented in a front end developed using React.js and deployed with Netlify.
              </IndivProjDescrip>
            </IndivProjContainer>
          </ProjectsContainer>
        </ContentContainer>
      </>
    )
  }
}


export default Portfolio