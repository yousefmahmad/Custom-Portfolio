import React from "react"
import Landing from "../components/landing"
import './fonts.css'

/**
 * Conditionally sets document body margin to 0
 * This is a server-side rendered application, Node has no document
 * If you do `gatsby build` you have to make sure it doesn't bonk when it hits document
 * Easiest way to do that, is just check for window, like we've done here
 */ 
if (typeof window !== `undefined`) {
  document.body.style.margin = 0
}

const IndexPage = () => {
  return(
    <>
      <Landing />
    </>
  )
}

export default IndexPage
