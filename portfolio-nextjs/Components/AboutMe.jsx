"Use client";

const AboutMe = () => {
  return (
    <div>
      <div
        id="about"
        className="w-full flex flex-col 
        justify-center items-center pt-5"
      >
        <p className="mb-5 mt-5">
          {" "}
          <small className="font-medium text-lg text-gray-500 dark:text-gray-400 ">
            Get to Know More{" "}
          </small>
        </p>
        <h1 className="text-4xl font-bold dark:text-white ">About Me </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center p-5">
        <p className="  flex items-center text-5xl font-extrabold dark:text-white">
          <span className="text-center  font-medium text-lg  dark:text-white">
            I'm Erick Pinedo, a driven Information Technology student deeply
            passionate about leveraging technology to solve real-world problems.
            As an active member and leader at FNUTech Club, I thrive in
            collaborative environments and enjoy exploring the latest
            advancements in IT. With a background in collegiate soccer, I bring
            a strong work ethic, teamwork skills, and a knack for time
            management to everything I do. Eager to apply my blend of technical
            knowledge and leadership experience to contribute positively to a
            forward-thinking organization.
          </span>
        </p>
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
