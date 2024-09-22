import { NavLink } from "react-router-dom";
import img from "../../../img/banner.avif";
const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="flex justify-around flex-col lg:flex-row-reverse gap-6 w-full">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="flex flex-col justify-center gap-7 sm:items-center md:items-start">
            <h1 className="md:text-7xl text-2xl font-bold">
              Books to freshen up
            </h1>
            <p className="md:text-7xl text-2xl font-bold">your bookshelf</p>
            <button className="btn w-1/4 btn-success mt-5">
              <NavLink to="/listedbooks"> View the list</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
