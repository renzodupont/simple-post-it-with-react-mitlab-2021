import React from "react";

const PostItCard = ({ index, postIt, onEdit, onDelete }) => {
  return (
    <div
      className={
        postIt.type === "Normal"
          ? "post-it alert alert-warning"
          : postIt.type === "Reminder"
          ? "post-it alert alert-primary"
          : "post-it alert alert-danger"
      }
      role="alert"
    >
      <div className="buttons">
        <button className="btn btn-danger" onClick={() => onDelete(index)}>
          DELETE
        </button>
        <button className="btn btn-info" onClick={() => onEdit(index)}>
          EDIT
        </button>
      </div>
      <h4>{postIt.title}</h4>
      <p>{postIt.description}</p>
    </div>
  );
};

export default PostItCard;
