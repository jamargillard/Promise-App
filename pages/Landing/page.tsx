import Download from "@/components/Download";
import { useRef,useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaChevronDown, FaHeadphonesAlt, FaListUl } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import React from "react";
import Logo from "../images/Ultraverse.png";
import  Link  from "next/link";
import { FaInstagram, FaTimes,FaFacebookF   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image"
import { Button } from "@/components/ui/button";

 
const RevealOnScroll = ({ children, ...props } :any ) => {
    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef(null);
 
    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });
 
        scrollObserver.observe(ref.current);
 
        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);
 
    const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;
 
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};
 




















export default function LandingPage(){
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLLinkElement>(null);


  const handleClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  }

  const handleClick2 = () => {
    if (sectionRef2.current) {
      sectionRef2.current.scrollIntoView({ behavior: 'smooth' });
    }

  }

  
  
  
  
  return (
    
    
    // nav start
    
<div className="">

<>
      <div className="items-center relative h-10 w-full mr-4  bg-gradient-to-b from-sky-100 to-sky-200 flex  ">
      <div className="container mx-auto flex justify-between items-center">
<Link href=''>
<div className="flex space-x-4 ">
<span></span>
<FaInstagram className=
" hover:text-zinc-600 cursor-not-allowed" 
/>       
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

          <Button className="  hover:bg-zinc-700 rounded-full text-zinc-900">
            Home 
          </Button>
          <Button onClick={handleClick} className="  hover:bg-zinc-700 rounded-full text-zinc-900">
            Features
          </Button>
          <Button onClick={handleClick2} className="  hover:bg-zinc-700 rounded-full text-zinc-900">
            Download
          </Button>
       
      </div>
      <div className="flex items-center gap-x-2">

        <Button onClick={handleClick2}  className="rounded-full text-white bg-zinc-900 text-xs hover:bg-zinc-700">
            Download
          </Button>
      </div>
    </nav>
    </>

    {/* // nav end */}
      
      
        <div className="justify-center items-center">

        <div className=" items-center text-zinc-900 font-bold space-y-5">

        <div className="space-y-4 font-bold items-center  ">
          <h1 className="p-12 pb-6 text-center text-3xl sm:text-4xl 
        md:text-5xl lg:text-4xl ">Unlock a happier you with the Promise app </h1>

          <div className=" pt-7 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-sky-600 
        md:text-2xl lg:text-4xl sm:text-lg" >
            <TypewriterComponent 
              options={{
                strings: [
                  "Affirmations.",
                  "Subliminals.",
                  "Voice Recording.",
                  "Guided Meditations.",
                  "Ai Generated Meditation",
                  "Ai Generated Affirmations",
                  "Soundscapes",
                  "Customization",
                ],
                autoStart: true,
                loop: true,
              }}
              />
          </div>
          </div>
     
        </div>


        <div className=" px-12 pt-8 pb-8 flex">

<div className="pt-7  items-center text-center space-x-4 w-full">
  <div className="text-center space-x-6">

  <Button className="rounded-full text-black bg-sky-100 text-lg hover:bg-sky-200" onClick={handleClick}> Learn More</Button>
  <Button className="rounded-full text-white bg-sky-300 text-lg hover:bg-sky-400" onClick={handleClick2}>Download</Button>
  </div>
</div>

    </div>


    <div className="justify-center items-center py-8 flex">
<div className=" items-center text-zinc-900 font-bold  space-y-5">
<Button onClick={handleClick}>

<FaChevronDown className='text-center text-xl animate-bounce'  />
</Button>
</div>
</div>



<div className="text-center items-center pt-8 mt-8 justify-center " ref={sectionRef}>
<RevealOnScroll>

<h1 className="font-semibold text-2xl text-center pb-4 mb-0 underline underline-offset-8 ">Features </h1>
   </RevealOnScroll>


</div>
<div className=" flex sm:text-center sm:justify-center bg-gradient-to-b from-white to-sky-200    " > 

<div className=" text-center p-16 mx-4">


<RevealOnScroll>
<div className="items-center justify-center flex mb-16">
<Image src='/landingpic2.png' className='px-1  bg-transparent border-b-2 border-black border-spacing-4 ' height={100} width={140} alt="" />
<Image src='/landingpic3.png' className='px-1  bg-transparent border-t-2 border-black border-spacing-4' height={100} width={140} alt="" />

</div>
</RevealOnScroll>
<div className="font-semibold text-2xl text-center mb-8 mt-4 pt-1 flex justify-center ">

<FaListUl />
</div>
<RevealOnScroll>

  <h2 className=" text-balance text-lg font-medium">
  Promise is a mindfulness and mental health app that helps you achieve a more positive mindset. The app includes an affirmation/subliminal generator, personal AI-generated meditations, soundscapes for relaxation, sleep and sleep, an affirmation recorder, daily positive reminders and even more customizable options.
  </h2>
</RevealOnScroll>
   </div>



</div> 
  
<div className=" flex sm:text-center sm:justify-center bg-sky-200   " > 

<div className=" text-center p-16 mx-4">


<div className="items-center justify-center flex mb-5">
<RevealOnScroll>

<Image src='/landingpic4.png' className='px-2 mt-0  bg-transparent border-b-2 border-black border-spacing-4' height={130} width={180} alt="" />
</RevealOnScroll>
</div>
  <div className="font-semibold text-2xl text-center mb-8 mt-14 pt-1 flex justify-center ">

   <FaHeadphonesAlt />
</div>
<RevealOnScroll>

  <h2 className=" text-balance text-lg font-medium">
Promise allows you to customize what you want to hear, when you want to hear it. With our relaxing perfect frequency soundscapes, AI prompt generation for Subliminals and affirmations, as well as customizability in all aspects, you'll reach your desires in no time. </h2>

</RevealOnScroll>
  
   </div>




</div>


<div className=" flex sm:text-center sm:justify-center bg-sky-200  " > 



<div className=" text-center p-16 mx-4">


<RevealOnScroll>
<div className="items-center justify-center flex mb-5">


<Image src='/landingpic6.png' className='px-2 bg-transparent border-t-2 border-black border-spacing-4' height={170} width={140} alt="" />
<Image src='/landingpic5.png' className='px-2 bg-transparent border-b-2 border-black border-spacing-4' height={170} width={140} alt="" />
</div>
</RevealOnScroll>
  <div className="font-semibold text-2xl text-center mb-8 mt-14 pt-1 flex justify-center ">

   <FaHeadphonesAlt />
</div>
<RevealOnScroll>

  <h2 className=" text-balance text-lg font-medium mb-12 pb-4">
Keep track of manifestation with the journal function, including a number of scripting techniques so you can find just the right fit for you.
</h2>
</RevealOnScroll>
<div className="items-center justify-center flex mb-5 bg-sky-200">
<RevealOnScroll>

<Image src='/landingpic7.png' className='px-2  bg-transparent border-b-2 border-black border-spacing-4' height={130} width={180} alt="" />
</RevealOnScroll>
</div>
 
  
   </div>
   </div>
<section id="download" className="bg-sky-200" ref={sectionRef2}>

<RevealOnScroll>

<link></link>
<Download ></Download>
</RevealOnScroll>
</section>
</div>

    
    
</div>
    )
}



