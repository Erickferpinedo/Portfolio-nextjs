"Use client";

const Projects = () => {
  return (
    <div>
  <div id="Projects" className="w-full flex flex-col py-12 justify-center items-center">
    <h2 className="mb-5 mt-5">
      <small className="font-medium text-lg text-blue-600 dark:text-blue-400">Browse My</small>
    </h2>
    <h3 className="text-4xl font-bold dark:text-white">Projects</h3>
  </div>

<div className="flex flex-col w-full lg:flex-row ">
<div className="flex p-6 flex-col items-center w-full  sm:flex-row justify-around py-12 space-y-6 sm:space-y-0 sm:space-x-6">
<div className="flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl min-h-[650px] dark:border-gray-700">
      <img
        src="/sema.png"
        width={100}
        alt=""
        className="w-full h-48 "
      />

      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <a href="#">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-gray-900">
SEMA            </h2>
          </a>
          <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-600">
            I led the development of a disaster preparedness app aimed at providing
            real-time alerts and critical resources for various natural disasters. I
            integrated multiple APIs, including NOAA and Google Maps, to display live
            location-based alerts and nearby shelters. Additionally, I developed an AI
            chatbot using OpenAI's GPT-3.5 Turbo to offer users personalized guidance related
            to disaster situations. The app delivers a smooth, responsive experience, helping
            users stay informed and prepared.
          </p>
        </div>
        <div className="w-full flex justify-center mt-7">
          <a href="https://github.com/sebilune/plutohacks-2024" target="_blank">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Github
            </button>
          </a>
          <a href="https://plutohacks-2024.vercel.app/" target="_blank">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>

    <div className="flex-grow max-w-sm bg-white border min-h-[650px] border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl  dark:border-gray-700">
      <img
        src="/githubproject.jpg"
        width={100}
        alt=""
        className="w-full h-48 "
      />

      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <a href="#">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-gray-900">
MedicalWise Ai            </h2>
          </a>
          <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-600">
          I led the frontend development of MedicalWise AI, creating a responsive interface with React, Tailwind CSS, and TypeScript. I made API calls to fetch crucial data on drug interactions and patient histories, ensuring smooth communication between the backend and UI. The project is ongoing, but you can view my contributions in the GitHub repository. Once completed, MedicalWise AI will help healthcare providers make informed decisions by analyzing medication interactions and potential side effects in real time.
          </p>
        </div>
        <div className="w-full flex justify-center mt-7">
          <a href="https://github.com/Erickferpinedo/medical-records" target="_blank">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Github
            </button>
          </a>
        
        </div>
      </div>
    </div>

  
</div>

  <div className="flex p-6 flex-col items-center w-full  sm:flex-row justify-around py-12 space-y-6 sm:space-y-0 sm:space-x-6">
  <div className="flex-grow max-w-sm bg-white border min-h-[650px] border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl  dark:border-gray-700">
      <img
        src="/LogoCholes.png"
        width={150}
        alt="Chole's Team logo"
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <a href="">
            <h2 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900">
              Choles Team
            </h2>
          </a>
          <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-600">
            I developed a comprehensive and fully responsive website for the
            Choles Team Basketball Club, utilizing Next.js, Tailwind CSS,
            JavaScript, and TypeScript. The site features detailed sections about the
            club and a user registration form connected to Firebase, allowing users to sign
            up and receive information. The site ensures a seamless experience across
            all devices and is actively used by many users.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-12">
          <a href="https://github.com/Erickferpinedo/CholesTeamWeb" target="_blank">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Github
            </button>
          </a>
          <a href="https://choles-team.web.app/" target="_blank">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>

    <div className="flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl min-h-[650px] dark:border-gray-700">
      <img
        src="/LogoJP.png"
        width={200}
        alt="JP Ingenieria-Construcciones Sas Logo"
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <a href="#">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-gray-900">
              Jp Ing Contrucciones S.A.S
            </h2>
          </a>
          <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-600">
            I created a detailed and fully responsive website for JP
            Ingeniería-Construcciones Sas, a civil engineering firm, using
            Next.js, Tailwind CSS, JavaScript, and TypeScript. This site
            includes comprehensive information about the company's offerings
            and features a user-friendly form connected to Firebase. The site provides
            an optimal experience across all devices and is actively used by many users.
          </p>
        </div>
        <div className="w-full flex justify-center mt-7">
          <a href="https://github.com/Erickferpinedo/JP_ING_SAS" target="_blank">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Github
            </button>
          </a>
          <a href="https://jpingobras.com" target="_blank">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

 




 

</div>

  );
};

export default Projects;
