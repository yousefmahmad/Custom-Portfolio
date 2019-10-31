import React, { Component } from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import bgImg from '../images/bg.jpg'
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Skillz from '../images/Skizllz.jpg'
import { LoremIpsum } from 'react-lorem-ipsum'

const baseURL = 'https://yousefahmad.dev/'

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
const ResTitle = styled.h1`
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

const SecTitle = styled.h2`
display:flex;
width: 40%;
margin-left: 15px;
margin-right: 15%;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
border-bottom: 2px solid #8f0000;
padding-bottom: 15px;
`
const JobTitle = styled.h3`
display:flex;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
margin-left: 25px;
margin-bottom:5px;
`
const Comp = styled.h4`
display:flex;
font-family: 'Josefin Sans', sans-serif;
font-weight: 300;
margin-left: 25px;
margin-top:0;
`
const WorkDescrip = styled.p`
display:flex;
font-family: 'Josefin Sans', sans-serif;
font-weight: 100;
margin: 0 25px;
flex-direction:column;
margin-bottom: 5%;
`

class Resume extends Component {
  render() {
    return (
      <>
        {/* Aside container */}
        <Aside>
          <Name> Yousef</Name> <LastName>Ahmad</LastName>
          <List>
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
            <CleanListItem>
              <Link to='./portfolio' style={{ textDecoration: 'none', color: 'white' }}>
                Portfolio
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
          <ResTitle>
            Resume
          </ResTitle>
          <SecTitle>
            Technical Skills
          </SecTitle>
            <img src={Skillz} alt={'Skills'} style={{width: '100%'}} />
          <SecTitle>
            Work History
         </SecTitle>
          <JobTitle>
            Software Engineer Immersive
        </JobTitle>
          <Comp>
            General Assembly
          <br />
            August 2019 - Present
        </Comp>
        <WorkDescrip>
          Completed full-time immersive program that taught me full stack development of web applications. I have
          completed many projects, both collaboratively and alone, using a wide breadth of tools. Some of the
          projects include:
          <br /> <br />
          Tower of Hanoi : A centuries old game remade here using JavaScript, HTML and CSS
          <br /> <br />
          Crypto : An API built from scratch to give the user all the different cryptocurrencies and related
          information. Built using MongoDB, Express.js, Node.js and deployed with Mongo Atlas and Heroku.
          <br /> <br />
          Fiji: A responsive, beautiful front end design created collaboratively using HTML, CSS and Javascript.
          <br /> <br />
          TV-Browser: An API built to allow for browsing of different tv channels and their description. Built using
          MongoDB, Express.js, Node.js and deployed with Mongo Atlas and Heroku.
          <br /> <br />
          Photos from the Great Beyond: Collaboratively built website with a team of 4. Created our own backend
          using MongoDB, Mongoose, Express.js and Node. js to pull data and images from NASA and post them
          on our website. We then built our front end using React.js in order to deliver a user friendly experience.
        </WorkDescrip>
          <JobTitle>
            Field Engineer
        </JobTitle>
          <Comp>
            Schlumberger
            <br />
            June 2018 - July 2019
        </Comp>
        <WorkDescrip>
          <li>
            Managed a team of 5 for one of our largest in the North Eastern District clients, bringing in
            $600,000/month on site.
          </li>
          <li>
            Provided project management and coordinated with the client to carry out field engineering
            projects utilizing high-grade jet explosives in order to perforate wells in high pressure, high risk
            environments and collaboration with other teams on the ground to meet the client’s needs. 
          </li>
          <li>
          Operates the principal service tools in an assigned service area. Conducts the operation of a service unit to maintain a high standard of efficiency and quality.
          </li>
          <li>
          Maintains an intimate knowledge of the latest technological changes and operating procedures pertaining to Company equipment, tools, and practices to insure maximum operating efficiency with a minimum of lost time.
          </li>
          <li>
          Supervises Operator crew in the preparation of the unit and calibration of equipment. Assures adherence to all safety regulations.
          </li>
          <li>
          Fosters and maintains customer relations by establishing a positive image and confidence in the quality of services and ensures the confidentiality of all logging operations.
          </li>
          <li>
          Informs customers of any unusual conditions noted at the well, maintains direct contact with customer's representatives throughout the logging or completion operation; interprets common services in the assigned service area for customers.
          </li>
        </WorkDescrip>
        <SecTitle>
          Education
        </SecTitle>
        <JobTitle>
          Software Engineer Immersive
        </JobTitle>
        <Comp>
          General Assembly
          <br/>
          Washington D.C.
          <br/>
          Completed: October 2019
        </Comp>
        <JobTitle>
          Petroleum Engineering B.Sc (GPA: 3.63)
        </JobTitle>
        <Comp>
          Univeristy of Louisiana at Lafayette
          <br/>
          Lafayette, LA
          <br/>
          Completed: May 2018
        </Comp>
        </ContentContainer>
      </>
    )
  }
}


export default Resume