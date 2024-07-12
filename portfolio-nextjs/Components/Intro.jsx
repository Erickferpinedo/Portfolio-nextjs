"Use client";

const intro = () => {
  return (
    
       <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row justify-center items-center">
        {/* image */}
        <div style={{ borderRadius: '400px', overflow: 'hidden'  }}
          className=" relative h-44 w-44 md:h-full md:w-96 lg:h-full lg:w-96">
          <img
            src="/profile-rounded.jpg"
            alt=" picture from Erick pinedo"
            layout="fill"
            className="object-cover "
            />
        </div>
        {/* info */}
        <div className="w-1/2 flex flex-col  justify-center items-center">

          <p className="mb-5 mt-5"><small className="font-medium text-lg text-gray-500 dark:text-gray-400">Hello I'm</small></p>

          <h1 className=" text-center mb-5 text-5xl font-extrabold leading-none  text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> Erick Pinedo </h1>
          <h2 className=" text-center mb-5 mt-5 flex items-center text-5xl font-extrabold dark:text-white"><span className="bg-blue-100 py-1 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-xl dark:bg-blue-200 dark:text-blue-800 ms-1">Full Stack Developer</span></h2>

          {/* <h2 className="mb-4 mt-4"><span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Full Stack Developer</span></h2> */}
          <div className="mb-4 mt-4 flex flex-row">
           <a href="/ResumeErickP.pdf">
           <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Resume</button>
           </a>
            
            <a href="#Contact">
            <button type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >Contact</button>
            </a>

          </div>
          <div className="mb-4 mt-4 flex flex-row justify-between details-container flex-1 bg-white p-4 md:p-6 pl-4 md:pl-6 rounded-2xl border border-gray-300">
              <a href="https://www.linkedin.com/in/erick-pinedo-murgas-a27332272/">
              <img
              src="/linkedin.png"
              width={30}
              height={30}
              alt="Erick's Linkedin"
              className="ml-2 mr-2" />
              </a>
              <a href="https://github.com/Erickferpinedo">
              <img
              src="/github.png"
              width={30}
              height={30}
              alt="Erick's Github"
              className="ml-2 mr-2" />
              </a>
            
              <a href="https://www.instagram.com/erickferpinedo/">
              <img
              src="/instagram.png"
              width={30}
              height={30}
              alt="Erick's Instagram"
              className="ml-2 mr-2" />
              </a>
              <a href="https://wa.me/17862006991">
              <img
                src="/whatsapp.png"
                width={30}
                height={30}
                alt="Erick's Whatsapp"
                className="ml-2 mr-2"
            />
              </a>
          </div>

        </div>
      </div>
    
  )
}

export default intro;