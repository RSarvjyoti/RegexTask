import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FetchData = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_limit=5&_page=${page}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((res) => {
        console.log(res);
        setLoading(false);
        setError(false);
        setData(res);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setData([]);
      });
  }, [page]);

  const handlePageNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePagePrev = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };


  const handleCardClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
      {loading && <h3>Loading....</h3>}
      {error && <h3>Something Error....</h3>}

      <div className="card-div">
        {data.map(({ id, name }) => {
          return (
            <div key={id} className="card" onClick={() => handleCardClick(id)}>
              {name}
            </div>
          );
        })}
      </div>

      <div className="btn-group">
        <button className="btn" onClick={handlePagePrev}>Prev</button>
        <span>{page}</span>
        <button className="btn" onClick={handlePageNext}>Next</button>
      </div>
    </>
  );
};

export default FetchData;

// [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     }]
