// components/PostItNote.js

import React from 'react';

const PostItNote = ({ text, position }) => {
  return (
    <div
      className={styles.postItNote}
      style={{ top: position.y, left: position.x }}
    >
      {text}
    </div>
  );
};

export default PostItNote;
