import { useState, useEffect } from "react";
import axios from "axios";

function UserInfo() {
  const [data, setData] = useState<any>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      console.log(response.data);
      setData(response.data.results[0]);
      localStorage.setItem(
        "name",
        JSON.stringify(response.data.results[0].name)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Random User:</h1>
      <p>
        Name: {data?.name?.title} {data?.name?.first} {data?.name?.last}
      </p>
      <p>Email: {data.email}</p>
      <button onClick={()=>setData(data)}>Refresh</button>
    </div>
  );
}

export default UserInfo;
