import { useState } from "react";

function NoteHeader({ notes, sortBy, onSort }) {
    return (
        <div className="note-header">

            <h1 className="titleHeader">my Notes ({notes.length})</h1>

            <select value={sortBy} onChange={onSort}>
                <option value="latest">Sort latest</option>
                <option value="earlieast">Sort earlieast</option>
                <option value="cpmpleted">Sort cpmpleted</option>
            </select>

        </div>

    )
}

export default NoteHeader;