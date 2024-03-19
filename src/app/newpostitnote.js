"use client";
import { useState } from 'react';
//import styles from './NewPostItNote.module.css';

export default function NewPostItNote({ onCreateNote }) {
  const [note, setNote] = useState('');

  const handleCreateNote = () => {
    onCreateNote(note);
    setNote('');
  };

  return (
    <div>
      <input
        type="text"
        value={note}
        onChange={e => setNote(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={handleCreateNote}>
        Create New Note
      </button>
    </div>
  );
}
