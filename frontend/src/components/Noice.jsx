function Noice({ notice }) {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <table
          className="table table-bordered table-responsive-md"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {notice.map((item) => (
              <tr key={item._id}>
                <td>{item.text}</td>
                <td>{item.author}</td>
                <td>{new Date(item.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Noice;
