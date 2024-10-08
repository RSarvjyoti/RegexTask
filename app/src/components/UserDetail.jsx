import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <h3>Loading user details...</h3>;
  if (error) return <h3>Failed to load user details.</h3>;

  return (
    <div>
      {user && (
        <>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
          <p>Address: {user.address.street}, {user.address.city}</p>
        </>
      )}
    </div>
  );
};

export default UserDetail;
