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
      <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row justify-center items-center">
        {/* image */}
        <div style={{ borderRadius: '400px', overflow: 'hidden'  }}
          className="relative h-44 w-44 md:h-96 md:w-96 lg:h-96 lg:w-96">
          <Image
            src="/profile-rounded.jpg"
            // width={500}
            // height={500}
            alt="Picture of the author"
            layout="fill"
            className="object-cover"
            />
        </div>
        {/* info */}
        <div className="w-full flex flex-col 
        justify-center items-center">

          <p className="mb-5 mt-5"><small className="font-medium text-lg text-gray-500 dark:text-gray-400">Hello I'm</small></p>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Erick Pinedo </h1>
          <h1 className="mb-5 mt-5 flex items-center text-5xl font-extrabold dark:text-white"><span className="bg-blue-100 py-1 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-xl dark:bg-blue-200 dark:text-blue-800 ms-2">Full Stack Developer</span></h1>

          {/* <h2 className="mb-4 mt-4"><span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Full Stack Developer</span></h2> */}
          <div className="mb-4 mt-4 flex flex-row">
           <a href="/ResumeErickP.pdf">
           <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Resume</button>
           </a>
            
            <a href="#Contact">
            <button type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >Contact Info</button>
            </a>

          </div>
          <div className="mb-4 mt-4 flex flex-row justify-between details-container flex-1 bg-white p-4 md:p-6 pl-4 md:pl-6 rounded-2xl border border-gray-300">
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
              src="/instagram.png"
              width={30}
              height={30}
              alt="Picture of the author"
              className="ml-2 mr-2" />
              </a>
              <a href="https://wa.me/17862006991">
              <Image
                src="/whatsapp.png"
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
        justify-center items-center pt-12" >
<p className="mb-5 mt-5">          <small className="font-medium text-lg text-gray-500 dark:text-gray-400 ">Get to Know More </small></p>
          <h1 className="text-4xl font-bold dark:text-white pb-12">About Me </h1>
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
     <h1 className="font-medium text-lg text-gray-500 dark:text-gray-400">3 + Years Of Experience</h1>
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
<div  className="flex flex-col md:flex-row lg:flex-row justify-center items-center py-6">
<p className="mb-5 mt-5">          <small className="font-medium text-lg text-gray-500 dark:text-gray-400">Explore My</small></p>
</div >
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center pb-6">
<h1 className="text-4xl font-bold dark:text-white mb-3">Experience </h1>

</div>

<div className="flex flex-col md:flex-row ">
  <div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center mt-4 md:mt-2 md:mr-2">
    <div >
      <div className="w-full flex flex-col justify-center items-center">
      <h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">Languages</h1>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Html/Css</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Tailwind Css</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Javascript</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Java</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Php</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">MySQL</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Typescript</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Swift</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>
     </div>
      


    </div>
  </div>

  <div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center mt-4 md:mt-2">
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">Technologies</h1>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Express.js</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Next.JS</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">React</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Angular</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Laravel</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Firebase</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Git</h3>
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
    <h3 className="text-left text-lg font-bold dark:text-black">Bootstrap</h3>
    <p className="text-left dark:text-black">Experienced</p>
  </div>
</article>
     </div>
  </div>
</div>
</div>


<div id="Projects">
<div id="Projects" className="w-full flex flex-col py-12 justify-center items-center" >
<p className="mb-5 mt-5">          <small className="font-medium text-lg text-gray-500 dark:text-gray-400">Browse My </small></p>
          <h1 className="text-4xl font-bold dark:text-white"> Projects </h1>
</div>
</div>


<div className="flex flex-col items-center sm:flex-row justify-around py-12 space-y-6 sm:space-y-0 sm:space-x-6">
  <div className="flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl max-w-full h-auto min-h-[650px]  dark:border-gray-700">
    
      <img
        src="/LogoCholes.png"
        width={200}
        alt="Picture of the author"
        className="w-full h-48 object-cover rounded-t-lg"
      />
    
    <div className="p-5 flex flex-col justify-between h-full">
      <div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 ">Project one</h5>
        </a>
        <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-600 "> I developed a comprehensive and fully responsive website for the Choles Team Basketball Club, utilizing Next.js, Tailwind CSS, JavaScript, and TypeScript. This informative platform features detailed sections about the club and a user registration form connected to Firebase, allowing users to sign up and receive more information. The website, which I designed and developed, ensures a seamless experience across all devices and is actively used by numerous users to stay informed about the club.</p>
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <a href="https://github.com/Erickferpinedo/CholesTeamWeb">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
        </a>
        <a href="https://choles-team.web.app/">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
        </a>
      </div>
    </div>
  </div>

  <div className="flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl max-w-full h-auto min-h-[550px] dark:bg-white dark:border-gray-700">
    
      <img
        src="/LogoJP.png"
        width={200}
        alt="Picture of the author"
        className="w-full h-48 object-cover "
      />
    
    <div className="p-5 flex flex-col justify-between h-full">
      <div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-gray-900">Project two</h5>
        </a>
        <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-600">I created a detailed and fully responsive website for JP Ingeniería-Construcciones Sas, a civil engineering firm, using Next.js, Tailwind CSS, JavaScript, and TypeScript. This site includes comprehensive information about the company's offerings and features a user-friendly form connected to Firebase, allowing visitors to submit project-related questions. The website, which I both designed and developed, provides an optimal experience on all devices and is frequently utilized by many users to engage with the business and access professional insights.</p>
      </div>
      <div className="w-full flex justify-center mt-7">
        <a href="https://github.com/Erickferpinedo/JP_ING_SAS">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
        </a>
        <a href="https://jp-ing-sas.web.app">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
        </a>
      </div>
    </div>
  </div>

  <div className=" hidden flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl max-w-full h-auto min-h-[550px] dark:bg-white dark:border-gray-700">
    <a href="#">
      <img
        src="/comingsoon1.jpg"
        width={400}
        alt="Picture of the author"
        className="w-full h-48 object-cover rounded-t-lg"
      />
    </a>
    <div className="p-5 flex flex-col justify-between h-full">
      <div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-black">Project three</h5>
        </a>
        <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-600">Nuestro equipo de entrenadores expertos y programas de alta calidad aseguran que tu marca se asocie con la excelencia y el profesionalismo, brindando reconocimiento y prestigio</p>
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <a href="https://github.com/Erickferpinedo/JP_ING_SAS">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
        </a>
        <a href="https://jp-ing-sas.web.app">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
        </a>
      </div>
    </div>
  </div>

  <div className=" hidden flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl max-w-full h-auto min-h-[550px] dark:bg-white dark:border-gray-700">
    <a href="#">
      <img
        src="/idea.png"
        width={400}
        alt="Picture of the author"
        className="w-full h-48 object-cover rounded-t-lg"
      />
    </a>
    <div className="p-5 flex flex-col justify-between h-full">
      <div>
        <a href="#">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-black">Eventos y Torneos</h5>
        </a>
        <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-600">Participa activamente en nuestros eventos y torneos, obteniendo un espacio exclusivo para mostrar tu marca a nuestra audiencia y conectarte con la comunidad de baloncesto local</p>
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <a href="https://github.com/Erickferpinedo/JP_ING_SAS">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
        </a>
        <a href="https://jp-ing-sas.web.app">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
        </a>
      </div>
    </div>
  </div>
</div>






<div className="flex flex-col md:flex-row hidden ">
<div className="details-container flex-1  p-6 pl-8 md:pl-6 rounded-2xl border border-gray-900 text-center mt-4 md:mt-2 md:mr-2">
<div className="w-full flex flex-col justify-center items-center">
<Image
    src="/comingsoon1.jpg"
    width={300}
    height={200}
    alt="Picture of the author"
    className="ml-2 mr-2" />
</div>
<div className="w-full flex flex-col justify-center items-center">
<h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white mt-4">Project four</h1>
</div>
<div className="w-full flex justify-center items-center">
  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
  <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
</div>

</div>
<div className="details-container flex-1  p-6 pl-8 md:pl-6 rounded-2xl border border-gray-900 text-center mt-4 md:mt-2 md:mr-2">
<div className="w-full flex flex-col justify-center items-center">
<Image
    src="/comingsoon1.jpg"
    width={300}
    height={200}
    alt="Picture of the author"
    className="ml-2 mr-2" />
</div>
<div className="w-full flex flex-col justify-center items-center">
<h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white mt-4">Project five</h1>
</div>
<div className="w-full flex justify-center items-center">
  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
  <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
</div>
</div>
<div className="details-container flex-1  p-6 pl-8 md:pl-6 rounded-2xl border border-gray-900 text-center mt-4 md:mt-2 md:mr-2">
<div className="w-full flex flex-col justify-center items-center">
<Image
    src="/comingsoon1.jpg"
    width={300}
    height={200}
    alt="Picture of the author"
    className="ml-2 mr-2" />
</div>
<div className="w-full flex flex-col justify-center items-center">
<h1 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white mt-4">Project six</h1>
</div>
<div className="w-full flex justify-center items-center">
  <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Github</button>
  <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Live Demo</button>
</div>
</div>

</div>

<div> 
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center py-6">
<p className="mb-5 mt-5">          <small className="font-medium text-lg text-gray-500 dark:text-gray-400"></small>Get In Touch</p>
</div>
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center pb-6">
<h1 className="text-4xl font-bold dark:text-white mb-3" id="Contact">Contact Me</h1>
</div>
</div>


<div className=" details-container flex-1  p-4 md:p-6 pl-4 md:pl-6 rounded-2xl border border-gray-900 text-center mt-4 md:mt-2 md:mr-2 justify-between ">
    <div className="mb-4 mt-8 md:mt-0 flex flex-col md:flex-row lg:flex-row justify-between py-12">
        <div className="flex items-center mb-2 md:mb-0 dark:text-white mt-5">
            <a href="mailto:erickfprogrammer@gmail.com">
            <Image
                src="/email.png"
                width={28}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2 "
            />
            </a>
            <a href="mailto:erickfprogrammer@gmail.com" className="">erickfprogrammer@gmail.com</a>
        </div>

        <div className="flex items-center mb-2 md:mb-0 dark:text-white mt-5">
            <a href="https://www.linkedin.com/in/erick-pinedo-murgas-a27332272/">
            <Image
                src="/linkedin.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2"
            />
            </a>
            <a href="https://www.linkedin.com/in/erick-pinedo-murgas-a27332272/">Linkedin</a>
        </div>

        <div className="flex items-center dark:text-white mt-5">
           <a href="https://www.instagram.com/erickferpinedo/">
           <Image
                src="/instagram.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2"
            />
           </a>
            <a href="https://www.instagram.com/erickferpinedo/">Instagram</a>
        </div>
    <div className="flex items-center dark:text-white mt-5">
      <a href="https://github.com/Erickferpinedo">
      <Image
                src="/github.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2"
            />
      </a>
            <a href="https://github.com/Erickferpinedo">Github</a>
        </div>
        <div className="flex items-center dark:text-white mt-5">
          <a href="/https://wa.me/17862006991">
          <Image
                src="/whatsapp.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="ml-2 mr-2 dark:text-white "
            />
          </a>
            <a href="https://wa.me/17862006991">WhatsApp</a>
        </div>
    </div>
</div>

<footer className="flex items-center justify-center w-full  p-4 text-sm text-gray-500 mt-20 dark:text-white ">

    Copyright © 2023 Erick Pinedo. All Rights Reserved.

</footer>


    </main>

    );
  }