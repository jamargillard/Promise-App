import React from "react";
import Logo from "../images/Ultraverse.png";
import  Link  from "next/link";
import { FaInstagram, FaTimes,FaFacebookF   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image"
import { Button } from "./ui/button";

export const Navbar = () => {

  
  
    return (
      <>
      <div className="items-center relative h-10 w-full mr-4  bg-gradient-to-b from-sky-100 to-sky-200 flex  ">
      <div className="container mx-auto flex justify-between items-center">
<Link href=''>
<div className="flex space-x-4 ">

<FaInstagram className=" hover:text-zinc-600  cursor-not-allowed" />       
<FaXTwitter className=" hover:text-zinc-600 cursor-not-allowed" />
<FaFacebookF className=" hover:text-zinc-600 cursor-not-allowed" />
 </div>
        </Link>
        <span className="text-xs "> Newest Update: v1.09.2</span>

</div>
      </div>
      <nav className="p-4 bg-transparent flex items-center justify-between w-full bg-gradient-to-b from-sky-300 ">
      <Link href="/" className="flex items-center">
        <div className="relative h-10 w-10 mr-4 ">
          <div className="rounded-md overflow-hidden">
          <Image  className="" fill alt="Logo" src="/promise-logo.png" />
          </div>
        </div>
        <h1 className=" transition-all text-2xl font-semibold text-white  hover:text-zinc-900 ">
          Promise
        </h1>
      </Link>
      <div className=" hidden md:block lg:block xl:block" >

      <Link href='' className="text-zinc-900 ">
          <Button className="  hover:bg-zinc-700 rounded-full text-zinc-900">
            Home 
          </Button>
          <Button  className="  hover:bg-zinc-700 rounded-full text-zinc-900">
            Features
          </Button>
          <Button className="  hover:bg-zinc-700 rounded-full text-zinc-900">
            Download
          </Button>
        </Link>
      </div>
      <div className="flex items-center gap-x-2">

        <Button className="rounded-full text-white bg-zinc-900 text-xs hover:bg-zinc-700">
            Download
          </Button>
      </div>
    </nav>
    </>
    )
}



