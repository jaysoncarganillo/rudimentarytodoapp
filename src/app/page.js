"use client";
import NewPostItNote from "./newpostitnote";
import { useState, useEffect } from 'react';


export default function Page() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const handleCreateNote = (note) => {
    let newNotes;
    if (editNote !== null) {
      newNotes = notes.map((item, index) => 
        index === editNote ? editText : item
      );
      setEditNote(null);
      setEditText('');
    } else {
      newNotes = [...notes, note];
    }
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const handleDoneEditing = () => {
    const newNotes = notes.map((item, index) => 
      index === editNote ? editText : item
    );
    setNotes(newNotes);
    setEditNote(null);
    setEditText('');
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((item, i) => i !== index);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  return (
    <div>
      <h1>Simple To Do List App</h1>
      <NewPostItNote onCreateNote={handleCreateNote} />
      
      {notes.map((note, index) => (
        <div key={index}>
          {editNote === index ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={e => setEditText(e.target.value)}
              />
              <button onClick={handleDoneEditing}>Done</button>
            </div>
          ) : (
            <p>{note}</p>
          )}
          <button onClick={() => handleEditNote(index)}>Edit</button>
          <button onClick={() => handleDeleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}