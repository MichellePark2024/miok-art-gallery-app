// components/Comments.js
import React from 'react';

function Comments({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <p>Date: {comment.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
