const Notification = ({ message }) => {
  const success = {
    color: "green",
    background: "lightgray",
    fontSize: "20px",
    borderStyle: "solid",
    padding: "10px",
    marginBottom: "10px",
  };

  if (message === null) return null;

  return <div style={success}>{message}</div>;
};

export default Notification;
