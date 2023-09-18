import { useRef } from "react";
import axios from "axios";

function FilteredNotice({ fetchNotice }) {
  const textRef = useRef(null);
  const authorRef = useRef(null);

  const addNotice = async () => {
    try {
      // Get the values from the input fields
      const noticeName = textRef.current.value;
      const noticeAuthor = authorRef.current.value;

      // Create an object to represent the new notice
      const newNotice = {
        text: noticeName,
        author: noticeAuthor,
      };

      // Send a POST request to your API to add the new notice
      await axios.post("http://localhost:3001/notices/new", newNotice);

      // Call the fetchNotice function to update the list of notices
      fetchNotice();

      // Clear the input fields
      textRef.current.value = "";
      authorRef.current.value = "";
    } catch (error) {
      console.log("Error adding notice", error);
    }
  };

  const clearNotice = async () => {
    try {
      // Send a DELETE request to your API to clear all notices
      await axios.delete("http://localhost:3001/notices/clear");

      // Call the fetchNotice function to update the list of notices

      console.log("The notice are deleted");
      fetchNotice();
    } catch (error) {
      console.log("Error clearing notices", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Notice Board</h1>
      <div className="input-group mb-3">
        <input
          ref={textRef}
          type="text"
          className="form-control"
          placeholder="Enter the notice name"
        />
        <input
          ref={authorRef}
          type="text"
          className="form-control"
          placeholder="Enter the notice author"
        />
        <div className="input-group-append">
          <button
            onClick={addNotice}
            className="btn btn-outline-success"
            type="button"
          >
            Add Notice
          </button>
          <button
            onClick={clearNotice}
            className="btn btn-outline-danger"
            type="button"
          >
            Clear All Notices
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilteredNotice;
