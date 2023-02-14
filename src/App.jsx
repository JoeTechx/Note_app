import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./pages/Notes"
import CreateNotes from "./pages/CreateNote"
import EditNotes from "./pages/EditNote"
import dummyNotes from "./dummy_notes"
import { useState } from "react"


const App = () => {
  const [notes, setNote] = useState(dummyNotes)

  return (
<main id="app">
<BrowserRouter>
    <Routes >
    <Route path="/" element={<Notes notes={notes}/>} />
    <Route path="/create-note" element={<CreateNotes/>} />
    <Route path="/edit-note/:id" element={<EditNotes/>} />
    </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App