import { useEffect, useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Pagesread = () => {
  // const books = useLoaderData();
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("./books_data.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <BarChart width={1430} height={550} data={books}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPages" fill="red" />
      </BarChart>
    </div>
  );
};

export default Pagesread;
