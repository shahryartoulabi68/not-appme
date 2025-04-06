import { useReducer, useState } from "react";
import "./App.css";
// import NoteList from "./Components/NoteList.jsx";
import NoteList from './components/NoteList'
import NoteStatus from "./Components/NoteStatus";
import NoteHeader from "./Components/NoteHeader";
import AddNewNote from "./Components/AddNewNote";

// function noteReduser(count, { type, payload }) {
//     if (type === "addNewNote") return setNotes((count) => [...count, payload])
// }

function App() {
    const [notes, setNotes] = useState([]);
    // const [state, dispatch] = useReducer(noteReduser, [])

    const [sortBy, setSortBy] = useState("latest")

    const handleNote = (newNote) => {
        return setNotes((prevNotes) => [...prevNotes, newNote])
    }
    const handelDelete = (id) => {
        const filterNotes = notes.filter((n) => n.id !== +(id))
        setNotes(filterNotes)
    }
    const handleComplete = (e) => {
        const noteId = Number(e.target.value)
        // const newNotes = notes.map((note) => {
        //     return note.id === noteId ? { ...note, completed: !note.completed } : note
        // })
        setNotes((prevNotes) => prevNotes.map((note) => {
            return note.id === noteId ? { ...note, completed: !note.completed } : note
        }))
    }

    let sortedNodes = notes;
    if (sortBy === "latest") sortedNodes = [...notes].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    if (sortBy === "latest") sortedNodes = [...notes].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    if (sortBy === "cpmpleted") sortedNodes = [...notes].sort(
        (a, b) => Number(a.completed) - Number(b.completed))

    return (
        <div className="container">
            <NoteHeader notes={notes} sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
            <div className="note-app">
                <AddNewNote onAddedNote={handleNote} />
                <div className="note-container">
                    <NoteStatus notes={notes} />
                    <NoteList notes={sortedNodes} onDelete={handelDelete} onComplete={handleComplete} />
                </div>
            </div>
        </div>
    )
}

export default App;

