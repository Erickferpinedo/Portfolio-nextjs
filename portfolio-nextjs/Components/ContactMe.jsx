"Use client";

const ContactMe = () => {
  return (
    <div>
      <div> 
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center py-6">
<h2 className="mb-5 mt-5">          <small className="font-medium text-lg text-gray-500 dark:text-gray-400"></small>Get In Touch</h2>
</div>
<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center pb-6">
<h3 className="text-4xl font-bold dark:text-white mb-3" id="Contact">Contact Me</h3>
</div>
</div>


<div className=" details-container flex-1  p-4 md:p-6 pl-4 md:pl-6 rounded-2xl border border-gray-300 text-center mt-4 md:mt-2 md:mr-2 justify-between ">
    <div className="mb-4 mt-8 md:mt-0 flex flex-col md:flex-row lg:flex-row justify-between py-12">
        <div className="flex items-center mb-2 md:mb-0 dark:text-white mt-5">
            <a href="mailto:erickfprogrammer@gmail.com">
            <img
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
            <img
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
           <img
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
      <img
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
          <img
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
    </div>
  )
}

export default ContactMe;