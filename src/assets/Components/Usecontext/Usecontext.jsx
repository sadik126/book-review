import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const Usecontextapi = ({ children }) => {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/public/books_data.json")
      .then((res) => res.json())
      .then((data) => {
        setbooks(data);
        setLoading(false);
      });
  }, []);

  const authInfo = {
    books,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Usecontextapi;
