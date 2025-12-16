import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch random user using api with async await for syncronus behavior
  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
    setLoading(false);
  };

  // Fetch user on page load
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container mt-5">
      <div
        className="card mx-auto p-4 shadow"
        style={{ maxWidth: "420px" }}
      >
        <h3 className="text-center mb-3">Random User Generator</h3>

        {loading && (
          <p className="text-center">Loading user...</p>
        )}

        {user && !loading && (
          <>
            <img
              src={user.picture.large}
              alt="User"
              className="rounded-circle mx-auto d-block mb-3"
            />

            <p><b>Name:</b> {user.name.first} {user.name.last}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p>
              <b>DOB:</b>{" "}
              {new Date(user.dob.date).toDateString()}
            </p>
            <p>
              <b>Address:</b>{" "}
              {user.location.city}, {user.location.state},{" "}
              {user.location.country}
            </p>
          </>
        )}

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={fetchUser}
        >
          Generate New User
        </button>
      </div>
    </div>
  );
};

export default App;
