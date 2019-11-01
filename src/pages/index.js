import React, {Component} from "react"
import Landing from "../components/landing"
import './fonts.css'

if(typeof document !== "undefined")
document.body.style.margin = 0

class IndexPage extends Component {
  render(){
    return(
      <>
      <Landing />
       
      </>
    )
  }
}


export default IndexPage
