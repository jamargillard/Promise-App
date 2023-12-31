import {Navbar} from "@/components/Navbar"
import LandingPage from "./Landing/page"
import React from "react"
import Footer from "@/components/Footer"
import Download from "@/components/Download"
import { BrowserRouter } from "react-router-dom"



export default function Home() {
  return (
    <>
      <BrowserRouter>

     <Navbar />
     <LandingPage /> 
     <Footer />
     </BrowserRouter>
    </>
  )
}
