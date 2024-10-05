"Use client";

const Header = () => {
  return (
    <div className="py-6">
        <div className="w-full  top-0  p-0 md:p-5 lg:p-5 mb-4 md:mb-0 lg:mb-0 flex justify-around flex-col md:flex-row lg:flex-row items-center">
        <div className="w-full md:w-2/5 lg:w-2/5 mb-4 md:mb-0 lg:mb:0 flex justify-center">
          <p className="text-4xl font-extrabold dark:text-white">Erick Pinedo</p>
        </div>
        <div className="w-full md:w-2/5 flex justify-around ">
          <a href="#about">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Experience">Experience</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </div>
  )
}
export default Header;