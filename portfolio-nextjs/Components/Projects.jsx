"Use client";

const Projects = () => {
  return (
    <div>
      <div id="Projects">
        <div
          id="Projects"
          className="w-full flex flex-col py-12 justify-center items-center"
        >
          <h2 className="mb-5 mt-5">
            {" "}
            <small className="font-medium text-lg text-gray-500 dark:text-gray-400">
              Browse My{" "}
            </small>
          </h2>
          <h3 className="text-4xl font-bold dark:text-white"> Projects </h3>
        </div>
      </div>

      <div className="flex p-6 flex-col items-center sm:flex-row justify-around py-12 space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl max-w-full h-auto min-h-[650px]  dark:border-gray-700">
          <img
            src="/LogoCholes.png"
            width={150}
            alt="Chole's Team logo"
            className="w-full h-48 object-cover rounded-t-lg"
          />

          <div className="p-5 flex flex-col justify-between h-full">
            <div>
              <a href="">
                <h2 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 ">
                  Project one
                </h2>
              </a>
              <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-600 ">
                {" "}
                I developed a comprehensive and fully responsive website for the
                Choles Team Basketball Club, utilizing Next.js, Tailwind CSS,
                JavaScript, and TypeScript. This informative platform features
                detailed sections about the club and a user registration form
                connected to Firebase, allowing users to sign up and receive
                more information. The website, which I designed and developed,
                ensures a seamless experience across all devices and is actively
                used by numerous users to stay informed about the club.
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-12">
              <a
                href="https://github.com/Erickferpinedo/CholesTeamWeb"
                target="_blank"
              >
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Github
                </button>
              </a>
              <a href="https://choles-team.web.app/" target="_blank">
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-grow max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer transition transform hover:scale-105 hover:shadow-xl max-w-full h-auto min-h-[550px] dark:bg-white dark:border-gray-700">
          <img
            src="/LogoJP.png"
            width={200}
            alt="JP Ingenieria-Construcciones Sas Logo"
            className="w-full h-48 object-cover "
          />

          <div className="p-5 flex flex-col justify-between h-full">
            <div>
              <a href="#">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-gray-900">
                  Project two
                </h2>
              </a>
              <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-600">
                I created a detailed and fully responsive website for JP
                Ingeniería-Construcciones Sas, a civil engineering firm, using
                Next.js, Tailwind CSS, JavaScript, and TypeScript. This site
                includes comprehensive information about the company's offerings
                and features a user-friendly form connected to Firebase,
                allowing visitors to submit project-related questions. The
                website, which I both designed and developed, provides an
                optimal experience on all devices and is frequently utilized by
                many users to engage with the business and access professional
                insights.
              </p>
            </div>
            <div className="w-full flex justify-center mt-7">
              <a
                href="https://github.com/Erickferpinedo/JP_ING_SAS"
                target="_blank"
              >
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Github
                </button>
              </a>
              <a href="https://jpingobras.com" target="_blank">
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
