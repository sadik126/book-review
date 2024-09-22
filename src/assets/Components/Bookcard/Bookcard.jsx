import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { RiFilePdf2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Bookcard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    bookId,
  } = book;
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl p-5 lg:w-8/12 sm:w-full mx-auto">
        <figure className="lg:w-2/12">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="flex flex-col lg:flex-row ">
            <p className="font-extrabold">tag</p>
            {tags.map((tag, index) => (
              <p className="text-green-400" key={index}>
                #{tag}
              </p>
            ))}
            <CiLocationOn className="text-xl mr-3" />{" "}
            <p>Year of publishing: {yearOfPublishing}</p>
          </div>
          <div className="flex">
            <FaUserFriends className="text-xl mr-3" />{" "}
            <p>Publisher: {publisher}</p>
            <RiFilePdf2Line className="text-xl mr-3" />
            <p>Page : {totalPages}</p>
          </div>
          <div className="card-actions">
            <button className="btn bg-sky-300 rounded-full">
              Category: {category}
            </button>
            <button className="btn bg-orange-300 rounded-full">
              Rating: {rating}
            </button>

            <Link to={`/book/${bookId}`}>
              <button className="btn bg-green-300 rounded-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookcard;
