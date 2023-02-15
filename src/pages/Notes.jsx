import { CiSearch } from "react-icons/ci"
import { BsPlusLg } from "react-icons/bs"
import { Link } from "react-router-dom"
import NoteItem from "../components/NoteItem"
import { useState, useEffect } from "react"

const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);


  const handleSearch = () =>{
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLowerCase())){
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text, notes])

    return(
       <section>
        <header className="notes__header">
           {!showSearch && <h2>My Note</h2>}
            { showSearch && <input type='text' value={text} onchange={(e) => {setText(e.target.value);handleSearch();}} autofocus placeholder="Keyword..." /> }
            <button className='btn' onclick={() => setShowSearch(prevState => !prevState)}><CiSearch/></button>
        </header>
        <div className="notes__container">
         {
           filteredNotes.map(note => <NoteItem key={note.id} note= {note} />)
         }
        </div>
        <Link to="/create-note" className="btn add__btn"><BsPlusLg/></Link>
       </section>
    )
}

export default Notes