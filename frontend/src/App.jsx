import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Noice from "./components/Noice";
import FilteredNotice from "./components/FilteredNotice";

function App() {
  const [notice, setNotice] = useState([]);

  // Define the fetchNotice function here
  const fetchNotice = async () => {
    try {
      const res = await axios.get("/.netlify/functions/getNotice", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);

      setNotice(res.data);
      /*    console.log(res.data); */

      console.log("Fetch Notice");
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        setNotice([]);
      }
      console.log("Error fetching Notice Data", error);
    }
  };

  useEffect(() => {
    // Call the fetchNotice function when the component mounts
    fetchNotice();
  }, []);

  return (
    <>
      <FilteredNotice fetchNotice={fetchNotice} />
      <Noice notice={notice} />
    </>
  );
}

export default App;
