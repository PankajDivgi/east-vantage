import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function UserInfo() {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setData(response.data.results[0]);
      localStorage.setItem(
        "UserInfo",
        JSON.stringify(response.data.results[0])
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <div>
        <h1>Random User</h1>
        <p>
          Name: {data?.name?.title} {data?.name?.first} {data?.name?.last}
        </p>
        <p>Email: {data.email}</p>
        <button onClick={() => fetchData()}>Refresh</button>
      </div>
    </div>
  );
}

export default UserInfo;
