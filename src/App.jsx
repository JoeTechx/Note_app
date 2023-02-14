import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./pages/Notes"
import CreateNotes from "./pages/CreateNote"
import EditNotes from "./pages/EditNote"
// import dummyNotes from "./dummy_notes"
import { useState } from "react"


const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(() =>{
      localStorage.setItem(notes, JSON.stringify(notes))
  },[notes])

  return (
<main id="app">
<BrowserRouter>
    <Routes >
    <Route path="/" element={<Notes notes={notes}/>} />
    <Route path="/create-note" element={<CreateNotes setNotes={setNotes}/>} />
    <Route path="/edit-note/:id" element={<EditNotes notes={notes} setNotes={setNotes} />} />
    </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App