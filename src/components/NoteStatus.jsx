function NoteStatus({ notes }) {
    const allNotes = notes.length;
    const completed = notes.filter((n) => n.completed).length
    const open = notes.filter((n) => !n.completed).length

    if (!allNotes) return <h2>not not in is</h2>

    return (
        <ul className="note-status">
            <li>
                All <span>{allNotes}</span>
            </li>
            <li>
                Completed <span>{completed}</span>
            </li>
            <li>
                Open <span>{open}</span>
            </li>
        </ul>
    )
}

export default NoteStatus;