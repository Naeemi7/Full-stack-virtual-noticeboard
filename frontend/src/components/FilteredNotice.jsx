import { useRef } from "react";
import axios from "axios";

function FilteredNotice({ fetchNotice }) {
  const textRef = useRef(""); // Use an empty string as the initial value
  const authorRef = useRef(""); // Use an empty string as the initial value

  const addNotice = async () => {
    try {
      // Get the values from the input fields
      const noticeName = textRef.current.value;
      const noticeAuthor = authorRef.current.value;

      // Check if the values are empty
      if (!noticeName || !noticeAuthor) {
        console.error("Text and author fields must not be empty.");
        return;
      }

      // Create an object to represent the new notice
      const newNotice = {
        text: noticeName,
        author: noticeAuthor,
      };

      // Send a POST request to your API to add the new notice
      await axios.post("/.netlify/functions/addNotice", newNotice);

      // Call the fetchNotice function to update the list of notices
      fetchNotice();

      // Clear the input fields
      textRef.current.value = "";
      authorRef.current.value = "";
    } catch (error) {
      console.error("Error adding notice", error);
    }
  };

  const clearNotice = async () => {
    try {
      // Send a DELETE request to your API to clear all notices
      await axios.delete("/.netlify/functions/clearNotice");

      // Call the fetchNotice function to update the list of notices
      fetchNotice();

      console.log("The notices are deleted");
    } catch (error) {
      console.error("Error clearing notices", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Notice Board</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-3">
          <input
            ref={textRef}
            type="text"
            className="form-control"
            placeholder="Enter the notice name"
          />
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
          <input
            ref={authorRef}
            type="text"
            className="form-control"
            placeholder="Enter the notice author"
          />
        </div>
        <div className="col-md-2 col-sm-12 d-flex justify-content-center">
          <div className="input-group">
            <button
              onClick={addNotice}
              className="btn btn-outline-success"
              type="button"
            >
              Add
            </button>
            <div className="ms-2"></div>
            <button
              onClick={clearNotice}
              className="btn btn-outline-danger"
              type="button"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilteredNotice;
