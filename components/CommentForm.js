// components/CommentForm.js
import React, { useState } from 'react';

function CommentForm({ onSubmitComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default CommentForm;
