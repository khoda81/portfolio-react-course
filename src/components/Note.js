import React, { useState } from "react";
import "./Note.css";

export default function Note() {
    const [notes, setNotes] = useState([]);
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

    const handleAddNote = () => {
        const newNote = {
            title: "New Note",
            content: "",
        };
        setNotes([...notes, newNote]);
        setSelectedNoteIndex(notes.length);
    };

    const handleNoteSelect = (index) => {
        setSelectedNoteIndex(index);
    };

    const handleNoteUpdate = (updatedNote) => {
        const updatedNotes = [...notes];
        updatedNotes[selectedNoteIndex] = updatedNote;
        setNotes(updatedNotes);
    };

    const handleNoteDelete = () => {
        if (selectedNoteIndex !== null) {
            const updatedNotes = [...notes];
            updatedNotes.splice(selectedNoteIndex, 1);
            setNotes(updatedNotes);
            setSelectedNoteIndex(null);
        }
    };

    return (
        <div className="note-app">
            <NoteList
                notes={notes}
                selectedNoteIndex={selectedNoteIndex}
                onNoteSelect={handleNoteSelect}
                onAddNote={handleAddNote}
            />
            {selectedNoteIndex !== null ? (
                <NoteEditor
                    note={notes[selectedNoteIndex]}
                    onUpdateNote={handleNoteUpdate}
                    onDeleteNote={handleNoteDelete}
                />
            ) : (
                <div className="no-note-selected">
                    <p>Select a note or create a new one.</p>
                </div>
            )}
        </div>
    );
}

function NoteList({ notes, selectedNoteIndex, onNoteSelect, onAddNote }) {
    return (
        <div className="note-list">
            <ul>
                {notes.map((note, index) => (
                    <li
                        key={index}
                        className={index === selectedNoteIndex ? "selected" : ""}
                        onClick={() => onNoteSelect(index)}
                    >
                        {note.title}
                    </li>
                ))}
            </ul>
            <button onClick={onAddNote}>Add Note</button>
        </div>
    );
}

function NoteEditor({ note, onUpdateNote, onDeleteNote }) {
    const handleTitleChange = (e) => {
        onUpdateNote({ ...note, title: e.target.value });
    };

    const handleContentChange = (e) => {
        onUpdateNote({ ...note, content: e.target.value });
    };

    return (
        <div className="note-editor">
            <div className="note-header">
                <input type="text" value={note.title} onChange={handleTitleChange} placeholder="Note Title" />
                <button onClick={onDeleteNote}>Delete</button>
            </div>
            <textarea value={note.content} onChange={handleContentChange} placeholder="Enter your note here..." />
        </div>
    );
}
