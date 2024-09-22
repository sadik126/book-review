import { useLoaderData, useParams } from "react-router-dom";
import {
  getreadlist,
  Savereadlist,
  Savewishlist,
} from "../../Utilities/Localstorage";
import toast, { Toaster } from "react-hot-toast";

const Bookdetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const bookdetails = books.find((book) => book.bookId === idInt);
  // console.log(bookdetails);

  const handlewishlist = () => {
    const getallreadlist = getreadlist();
    if (books.length > 0) {
      const allreadbooks = books.filter((book) =>
        getallreadlist.includes(book.bookId)
      );
      // এখানে যা যা books আছে সেগুলো FILTER করবে এবং localstorage থেকে যে array
      //  পাওয়া যায় সেখানে থেকে book id চেক করবো পাওয়া যায় কিনা
      console.log(allreadbooks);
      const exixts = allreadbooks.find((book) => book.bookId === idInt);
      console.log(exixts);

      if (!exixts) {
        Savewishlist(idInt);
        toast.success("Thanks for adding wishlist this book😍");
      } else {
        toast.error(
          "sorry you already read this book.you can not add your wishlist.please try another one😓"
        );
      }
    }
  };

  const handlereadlist = () => {
    Savereadlist(idInt);
    toast.success("Thanks for reading this book🥰");
  };
  return (
    <>
      <div className="card lg:card-side min-h-screen bg-base-100 shadow-xl">
        <figure className="p-48">
          <img src={bookdetails.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center text-6xl">
            {bookdetails.bookName}
          </h2>
          <p className="text-3xl border-b-4 border-black">
            By : {bookdetails.author}
          </p>
          <p className="text-3xl ">{bookdetails.category}</p>

          <p>Review:{bookdetails.review}</p>

          <p>
            Tag:{" "}
            {
              <div className="flex text-green-700">
                {bookdetails.tags.map((tag, index) => (
                  <p key={index}>#{tag}</p>
                ))}
              </div>
            }
          </p>
          <hr />
          <p>
            Number of pages :{" "}
            <span className="font-extrabold">{bookdetails.totalPages}</span>{" "}
          </p>
          <p>
            Publisher :{" "}
            <span className="font-extrabold">{bookdetails.publisher}</span>{" "}
          </p>
          <p>
            Year of publishing :{" "}
            <span className="font-extrabold">
              {bookdetails.yearOfPublishing}
            </span>{" "}
          </p>
          <p>
            Rating :{" "}
            <span className="font-extrabold">{bookdetails.rating}</span>{" "}
          </p>

          <div className="card-actions justify-start">
            <button onClick={handlereadlist} className="btn mr-3">
              Read
            </button>
            <button onClick={handlewishlist} className="btn btn-info">
              Wishlist
            </button>
          </div>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: "green",
                color: "white",
              },
            },
            error: {
              style: {
                background: "red",
                color: "white",
              },
            },
          }}
        ></Toaster>
      </div>
    </>
  );
};

export default Bookdetails;
