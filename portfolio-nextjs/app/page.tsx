'use client';
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      {/* header */}
      <div className="w-full p-0 md:p-5 lg:p-5 mb-4 md:mb-0 lg:mb-0 flex justify-around flex-col md:flex-row lg:flex-row items-center">
        <div className="w-full md:w-2/5 lg:w-2/5 mb-4 md:mb-0 lg:mb:0 flex justify-center">
          <h2 className="text-4xl font-extrabold dark:text-white">Erick Pinedo</h2>
        </div>
        <div className="w-full md:w-2/5 flex justify-between ">
          <a href="#about">About</a>
          <a href="#Experience">Experience</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>


      {/* intro */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
        {/* image */}
        <div style={{ borderRadius: '400px', overflow: 'hidden' }}
          className="relative h-44 w-44 md:h-96 md:w-96 lg:h-96 lg:w-96">
          <Image
            src="/profile-rounded.jpg"
            // width={500}
            // height={500}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover" />
        </div>
        {/* info */}
        <div className="w-full flex flex-col 
        justify-center items-center">

          <p className="mb-5 mt-5"><small className="font-medium text-lg text-gray-500 dark:text-gray-400">Hello I'm</small></p>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Erick Pinedo </h1>
          <h1 className="mb-5 mt-5 flex items-center text-5xl font-extrabold dark:text-white"><span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">Full Stack Developer</span></h1>

          {/* <h2 className="mb-4 mt-4"><span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Full Stack Developer</span></h2> */}
          <div className="mb-4 mt-4 flex flex-row">
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Downloadd CV</button>
            <button type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >Contact Info</button> <a></a>
            

          </div>
          <div className="mb-4 mt-4 flex flex-row justify-between">
              <a href="https://www.linkedin.com/in/erick-pinedo-murgas-a27332272/">
              <Image
              src="/linkedin.png"
              width={30}
              height={30}
              alt="Picture of the author"
              className="ml-2 mr-2" />
              </a>
              <a href="https://github.com/Erickferpinedo">
              <Image
              src="/github.png"
              width={30}
              height={30}
              alt="Picture of the author"
              className="ml-2 mr-2" />
              </a>
            
              <a href="https://www.instagram.com/erickferpinedo/">
              <Image
              src="/logo-instagram-black and white.avif"
              width={30}
              height={30}
              alt="Picture of the author"
              className="ml-2 mr-2" />
              </a>
              <a href="https://wa.me/17862006991">
              <Image
                src="/whatsaapimage.jpg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2"
            />
              </a>
          </div>

        </div>
      </div>
     <div id="about" className="w-full flex flex-col 
        justify-center items-center" >
<p className="mb-5 mt-5">          <small className="font-medium text-lg text-gray-500 dark:text-gray-400">Get to Know More </small></p>
          <h1 className="text-4xl font-bold dark:text-white">About Me </h1>
     </div>
<div>
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
    

    <div className="container mx-auto px-4 md:px-8 py-6">
    <div className="flex flex-col md:flex-row gap-4">
    <div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center">
            <div className="w-full flex flex-col 
            justify-center items-center" >
    <Image
                  src="/experience.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                  className="ml-2 mr-2" />
       </div>
       <div className="w-full flex flex-col 
            justify-center items-center">
     <h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">Experience </h1>
     <h1 className="font-medium text-lg text-gray-500 dark:text-gray-400">1 + Years Of Experience</h1>
    <h1 className="font-medium text-lg text-gray-500 dark:text-gray-400">Full-Stack Development</h1>
    </div>
    </div>
    
    <div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center">
    <div className="w-full flex flex-col 
            justify-center items-center" >

    <Image
                  src="/education.png"
                  width={30}
                  height={30}
                  alt="Picture of the author"
                  className="ml-2 mr-2" />
       </div>
       <div className="w-full flex flex-col 
            justify-center items-center">
     <h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">Education </h1>
    <h1 className="font-medium text-lg text-gray-500 dark:text-gray-400">B.Sc. Bachelors Degree</h1>
    <h1 className="font-medium text-lg text-gray-500 dark:text-gray-400">Information Technology</h1>
    </div>
    
    </div>

    </div>

    </div>
    
    
    
    </div>
    
    </div>
    
         


    <div className="w-full flex flex-col 
        justify-center items-center">
<h1 className="mb-5 mt-5 flex items-center text-5xl font-extrabold dark:text-white"><span className="text-center font-medium text-lg text-black dark:text-white">I'm Erick Pinedo, a driven Information Technology student deeply passionate about leveraging technology to solve real-world problems. As an active member and leader at FNUTech Club, I thrive in collaborative environments and enjoy exploring the latest advancements in IT. With a background in collegiate soccer, I bring a strong work ethic, teamwork skills, and a knack for time management to everything I do. Eager to apply my blend of technical knowledge and leadership experience to contribute positively to a forward-thinking organization.</span></h1>
    </div>

<div id="Experience">
<div  className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
<p className="mb-5 mt-5">          <small className="font-medium text-lg text-gray-500 dark:text-gray-400">Explore My</small></p>

</div >
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
<h1 className="text-4xl font-bold dark:text-white mb-3">Experience </h1>
</div>

<div className="flex flex-col md:flex-row ">
  <div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center mt-4 md:mt-2 md:mr-2">
    <div >
      <div className="w-full flex flex-col justify-center items-center">
      <h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">Front-End Development</h1>
      </div>
     
     <div className="mb-4 mt-4 flex flex-col md:flex-row lg:flex-row justify-between">
     <article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>

<article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>

<article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>
     </div>

     <div className="mb-4 mt-4 flex flex-col md:flex-row lg:flex-row justify-between">
     <article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>

<article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>

<article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>
     </div>
      


    </div>
  </div>

  <div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center mt-4 md:mt-2">
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Back-End Development</h1>
    </div>
    <div className="mb-4 mt-4 flex flex-col md:flex-row lg:flex-row justify-between">
     <article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>

<article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>

<article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>
     </div>

     <div className="mb-4 mt-4 flex flex-col md:flex-row lg:flex-row justify-between">
     <article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>

<article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>

<article className="flex flex-row items-start">
  <Image
    src="/checkmark.png"
    width={30}
    height={30}
    alt="Picture of the author"
    className="ml-2 mr-2"
  />
  <div className="flex flex-col">
    <h3 className="text-left text-lg font-bold dark:text-black">Html</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>
     </div>
  </div>
</div>
</div>


<div id="Projects">
<div id="about" className="w-full flex flex-col 
        justify-center items-center" >
<p className="mb-5 mt-5">          <small className="font-medium text-lg text-gray-500 dark:text-gray-400">Browse My </small></p>
          <h1 className="text-4xl font-bold dark:text-white">Projects </h1>
</div>
</div>
<div className="flex flex-col md:flex-row ">
<div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center mt-4 md:mt-2 md:mr-2">
<div className="w-full flex flex-col justify-center items-center">
<Image
    src="/comingsoon1.jpg"
    width={300}
    height={200}
    alt="Picture of the author"
    className="ml-2 mr-2" />
</div>
<div className="w-full flex flex-col justify-center items-center">
<h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white mt-4">Project One</h1>
</div>
<div className="w-full flex justify-center items-center">
  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
  <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
</div>

</div>
<div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center mt-4 md:mt-2 md:mr-2">
<div className="w-full flex flex-col justify-center items-center">
<Image
    src="/comingsoon1.jpg"
    width={300}
    height={200}
    alt="Picture of the author"
    className="ml-2 mr-2" />
</div>
<div className="w-full flex flex-col justify-center items-center">
<h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white mt-4">Project two</h1>
</div>
<div className="w-full flex justify-center items-center">
  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
  <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
</div>
</div>
<div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center mt-4 md:mt-2 md:mr-2">
<div className="w-full flex flex-col justify-center items-center">
<Image
    src="/comingsoon1.jpg"
    width={300}
    height={200}
    alt="Picture of the author"
    className="ml-2 mr-2" />
</div>
<div className="w-full flex flex-col justify-center items-center">
<h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white mt-4">Project three</h1>
</div>
<div className="w-full flex justify-center items-center">
  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
  <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
</div>
</div>

</div>

<div> 
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center ">
<p className="mb-5 mt-5">          <small className="font-medium text-lg text-gray-500 dark:text-gray-400"></small>Get In Touch</p>
</div>
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
<h1 className="text-4xl font-bold dark:text-white mb-3" id="Contact">Contact Me</h1>
</div>
</div>


<div className="details-container flex-1 bg-white p-4 md:p-6 pl-4 md:pl-6 rounded-2xl border border-gray-300 text-center mt-4 md:mt-2 md:mr-2 justify-between">
    <div className="mb-4 mt-8 md:mt-0 flex flex-col md:flex-row lg:flex-row justify-between">
        <div className="flex items-center mb-2 md:mb-0 dark:text-black">
            <Image
                src="/email.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2"
            />
            <a href="mailto:erickfprogrammer@gmail.com">erickfprogrammer@gmail.com</a>
        </div>

        <div className="flex items-center mb-2 md:mb-0 dark:text-black mt-5">
            <Image
                src="/linkedin.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2"
            />
            <a href="https://www.linkedin.com/in/erick-pinedo-murgas-a27332272/">Linkedin</a>
        </div>

        <div className="flex items-center dark:text-black mt-5">
            <Image
                src="/logo-instagram-black and white.avif"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2"
            />
            <a href="https://www.instagram.com/erickferpinedo/">Instagram</a>
        </div>
    <div className="flex items-center dark:text-black mt-5">
    <Image
                src="/github.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2"
            />
            <a href="https://github.com/Erickferpinedo">Github</a>
        </div>
        <div className="flex items-center dark:text-black mt-5">
    <Image
                src="/whatsaapimage.jpg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2"
            />
            <a href="https://wa.me/17862006991">WhatsApp</a>
        </div>
    </div>
</div>


<div className="flex items-center justify-center w-full bg-white p-4 text-sm text-gray-500 mt-20">
    Copyright © 2023 Erick Pinedo. All Rights Reserved.
</div>

    </main>

    );
  }