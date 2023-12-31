import Download from "@/components/Download";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowAltCircleDown, FaChevronDown, FaHeadphonesAlt, FaListUl } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";



export default function LandingPage(){

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

    return (

      
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
  <Button className="rounded-full text-white bg-sky-300 text-lg hover:bg-sky-400">Download</Button>
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

<h1 className="font-semibold text-2xl text-center pb-4 mb-0 underline underline-offset-8 ">Features </h1>


</div>
<div className=" flex sm:text-center sm:justify-center bg-gradient-to-b from-white to-sky-200    " > 

<div className=" text-center p-16 mx-4">


<div className="items-center justify-center flex mb-16">

<Image src='/landingpic2.png' className='px-1  bg-transparent' height={100} width={140} alt="" />
<Image src='/landingpic3.png' className='px-1  bg-transparent' height={100} width={140} alt="" />

</div>
<div className="font-semibold text-2xl text-center mb-8 mt-4 pt-1 flex justify-center ">

<FaListUl />
</div>

  <h2 className=" text-balance text-sm">
  Promise is a mindfulness and mental health app that helps you achieve a more positive mindset. The app includes an affirmation/subliminal generator, personal AI-generated meditations, soundscapes for relaxation, sleep and sleep, an affirmation recorder, daily positive reminders and even more customizable options.
  </h2>

   </div>



</div> 
  
<div className=" flex sm:text-center sm:justify-center bg-sky-200   " > 

<div className=" text-center p-16 mx-4">


<div className="items-center justify-center flex mb-5">

<Image src='/landingpic4.png' className='px-2 mt-0  bg-transparent' height={130} width={180} alt="" />

</div>
  <div className="font-semibold text-2xl text-center mb-8 mt-14 pt-1 flex justify-center ">

   <FaHeadphonesAlt />
</div>

  <h2 className=" text-balance text-sm">
Promise allows you to customize what you want to hear, when you want to hear it. With our relaxing perfect frequency soundscapes, AI prompt generation for Subliminals and affirmations, as well as customizability in all aspects, you'll reach your desires in no time. </h2>


  
   </div>




</div>


<div className=" flex sm:text-center sm:justify-center bg-sky-200  " > 



<div className=" text-center p-16 mx-4">


<div className="items-center justify-center flex mb-5">


<Image src='/landingpic6.png' className='px-2 bg-transparent' height={170} width={140} alt="" />
<Image src='/landingpic5.png' className='px-2 bg-transparent' height={170} width={140} alt="" />

</div>
  <div className="font-semibold text-2xl text-center mb-8 mt-14 pt-1 flex justify-center ">

   <FaHeadphonesAlt />
</div>

  <h2 className=" text-balance text-sm mb-12 pb-4">
Keep track of manifestation with the journal function, including a number of scripting techniques so you can find just the right fit for you.
</h2>
<div className="items-center justify-center flex mb-5 bg-sky-200">

<Image src='/landingpic7.png' className='px-2  bg-transparent' height={130} width={180} alt="" />

</div>
 
  
   </div>
   </div>
<section id="download" className="bg-sky-200">

<Download></Download>

</section>
</div>

    
    
    )
}



