import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getreadlist, getwishlist } from "../../Utilities/Localstorage";
import Bookcard from "../Bookcard/Bookcard";
import { Helmet } from "react-helmet-async";

const Listedbooks = () => {
  const books = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [allbooks, setAllbooks] = useState([]);
  // const [displayBooks, displaysetBooks] = useState([]);
  // const [displaywishlist, displaysetWishlist] = useState([]);
  const [displayinformation, displaysetInformation] = useState([]);
  // const [filterjobs, setFilteredjobs] = useState([]);

  // if (!books) {
  //   return (
  //     <ReactLoading
  //       className="mx-auto"
  //       type={"cylon"}
  //       color={"black"}
  //       height={667}
  //       width={375}
  //     />
  //   );
  // }

  useEffect(() => {
    fetch("/books_data.json")
      .then((res) => res.json())
      .then((data) => setAllbooks(data));
  }, []);
  console.log(allbooks);

  const handlefilterjobs = (filter) => {
    if (filter === "all") {
      displaysetInformation(displayinformation);
    } else if (filter === "rating") {
      const ratingfilter = displayinformation.filter((book) => book.rating);
      const sortratings = ratingfilter.sort((a, b) => b.rating - a.rating);
      displaysetInformation(sortratings);
    } else if (filter === "numberofpages") {
      const pages = displayinformation.filter((book) => book.totalPages);
      const sortpages = pages.sort((a, b) => b.totalPages - a.totalPages);
      displaysetInformation(sortpages);
    } else if (filter === "yearOfPublishing") {
      const years = displayinformation.filter((book) => book.yearOfPublishing);
      const sortyears = years.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      displaysetInformation(sortyears);
    }
  };

  useEffect(() => {
    const storedreadbooks = getreadlist();
    // setLoading(true);
    if (books.length > 0) {
      const alleverybooks = allbooks.filter((book) =>
        storedreadbooks.includes(book.bookId)
      );

      displaysetInformation(alleverybooks);
      // setLoading(false);
    }
  }, [allbooks]);

  const handlewishlist = () => {
    const storedwishlistbooks = getwishlist();
    if (books.length > 0) {
      const alleverybooks = allbooks.filter((book) =>
        storedwishlistbooks.includes(book.bookId)
      );
      displaysetInformation(alleverybooks);
    }
  };

  const handlereadlist = () => {
    const storedreadbooks = getreadlist();
    if (books.length > 0) {
      const alleverybooks = allbooks.filter((book) =>
        storedreadbooks.includes(book.bookId)
      );
      displaysetInformation(alleverybooks);
    }
  };
  return (
    <div className="w-3/4 mx-auto">
      <Helmet>
        <title>All books</title>
      </Helmet>
      <h1 className="text-center text-5xl mt-5">Books</h1>
      <div className="dropdown flex justify-center my-9">
        <div tabIndex={0} role="button" className="btn btn-success m-1">
          Sort by
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-12"
        >
          <li>
            <a>All</a>
          </li>
          <li onClick={() => handlefilterjobs("rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => handlefilterjobs("numberofpages")}>
            <a>Number of pages</a>
          </li>
          <li onClick={() => handlefilterjobs("yearOfPublishing")}>
            <a>Publisher year</a>
          </li>
        </ul>
      </div>
      <button onClick={handlereadlist} className="btn">
        Read Books
      </button>
      <button onClick={handlewishlist} className="btn">
        Wishlist Books
      </button>
      <hr />
      {displayinformation.map((book) => (
        <Bookcard key={book.bookId} book={book}></Bookcard>
      ))}
    </div>
  );
};

export default Listedbooks;
