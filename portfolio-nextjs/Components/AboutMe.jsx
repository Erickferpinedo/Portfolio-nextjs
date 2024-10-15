"use client";

const AboutMe = () => {
  return (
    <div className="">
      <div className="w-full  dark:from-gray-800 dark:to-gray-900 py-6">
        <section
          id="about"
          className="w-full max-w-screen-lg mx-auto flex flex-col justify-center items-center text-center px-4 py-8"
        >
          <p className="text-md font-medium text-blue-600 dark:text-blue-400 mb-2">
            Get to Know Me
          </p>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl font-light text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
          I'm Erick Pinedo, an enthusiastic Information Technology student specializing in software development and web development. I am passionate about leveraging innovative technologies to address real-world challenges and create user-friendly solutions. I thrive in collaborative settings and continuously explore emerging IT trends to stay ahead in the field. With leadership experience at FNUTech Club and a strong background in collegiate soccer, I bring effective teamwork, time management, and dedication to every project. I’m eager to apply my skills to help forward-thinking organizations achieve their goals.
          </p>
        </section>
      </div>
      <div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
          <div className="container mx-auto px-4 md:px-8 py-3">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center">
                <div
                  className="w-full flex flex-col 
            justify-center items-center"
                >
                  <img
                    src="/experience.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="ml-2 mr-2"
                  />
                </div>

                <div
                  className="w-full flex flex-col 
            justify-center items-center"
                >
                  <h2 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">
                    Experience{" "}
                  </h2>
                  <h3 className="font-medium text-lg text-gray-500 dark:text-gray-400">
                    1 + Years Of Experience
                  </h3>
                  <h4 className="font-medium text-lg text-gray-500 dark:text-gray-400">
                    Full-Stack Development
                  </h4>
                </div>
              </div>

              <div className="details-container flex-1 bg-white p-6 pl-8 md:pl-6 rounded-2xl border border-gray-300 text-center">
                <div
                  className="w-full flex flex-col 
            justify-center items-center"
                >
                  <img
                    src="/education.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="ml-2 mr-2"
                  />
                </div>
                <div
                  className="w-full flex flex-col 
            justify-center items-center"
                >
                  <h2 className="mb-2 text-lg md:text-xl lg:text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-black">
                    Education{" "}
                  </h2>
                  <h3 className="font-medium text-lg text-gray-500 dark:text-gray-400">
                    B.Sc. Bachelors Degree
                  </h3>
                  <h4 className="font-medium text-lg text-gray-500 dark:text-gray-400">
                    Information Technology
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
