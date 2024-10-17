import React, { useState } from 'react';
import './NotesSection.css';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function NotesSection() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Building Management - 28/02/2018', description: 'Check with unit 101 for the key' },
    { id: 2, title: 'Peter Graham - 7/10/2016', description: 'Check all Mechanical Equipment' },
    { id: 3, title: 'Omar Farrer - 05/12/2016', description: 'Check rooftop boilers' },
    { id: 4, title: '23432 43243 - 01/02/2017', description: 'Contact Sally' },
    { id: 5, title: '23432 43243 - 28/10/2016', description: 'Parcel waiting at concierge' },
  ]);

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="notes-section">
      <div className="notes-header">
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search notes" />
        </div>
        <button className="add-note-btn">
          <AddIcon />
        </button>
      </div>

      <ul className="notes-list">
        {notes.map(note => (
          <li key={note.id} className="note-item">
            <div className="note-content">
              <h4>{note.title}</h4>
              <p>{note.description}</p>
            </div>
            <DeleteIcon className="delete-icon" onClick={() => handleDelete(note.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesSection;
