import React, { Component } from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import bgImg from '../images/bg.jpg'
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";



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
const FormContainer = styled.form`
display: flex;
flex-direction:column;
font-size: 24px;
align-items:center;
font-family:'Josefin Sans', sans-serif;
font-weight: 100;
margin-top: 20%;
`
const InputStyle = styled.input`
width: 250px;
border: 2px solid #8f0000;
`

class Contact extends Component {
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

        {/* Contact Form 
        Need to deploy to netlify before i can see the contact form*/}
        <ContentContainer>
            <FormContainer name="contact" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out:
                    <InputStyle name="bot-field" />
                </label>
              </p>
              <p>
                <label>
                  Your name:
                <br />
                    <InputStyle type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your email:
                <br />
                    <InputStyle type="email" name="email" />

                </label>
              </p>
              <p>
                <label>
                  Message:
                <br />
                  <textarea name="message" style={{width: '400px', height: '200px', border: '2px solid #8f0000'}}></textarea>
                </label>
              </p>
              <p>
                <button type="submit" style={{width: '250px', height: '50px', fontSize: '24px', backgroundColor: '#8f0000', color: 'white'}}>Send</button>
              </p>
          </FormContainer>
        </ContentContainer>
      </>

    )
  }
}


export default Contact