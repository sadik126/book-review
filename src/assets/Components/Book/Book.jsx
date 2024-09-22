import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, tags, author, category, rating, bookId } = book;
  return (
    <>
      <Link to={`/book/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="h-[486px]">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex text-green-700">
              {tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p className="font-extrabold">By : {author}</p>
            <div className="flex mt-5">
              <p>{category}</p>
              <p className="flex items-center justify-end">
                {rating} <FaStar></FaStar>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Book;
