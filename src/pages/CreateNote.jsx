import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"
import useCreateDate from "../components/useCreateDate"



const CreateNote = ({setNotes}) => {
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const date = useCreateDate()
    const navigate = useNavigate()
 
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(title && details){
            const note = {id: uuid(), title, details, date}
            // add note to the Notes array
            setNotes(prevNotes => [note, ...prevNotes]);

            // redirect to home page
            navigate("/")
        }
    }
    return(
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><IoIosArrowBack/></Link>
                <button className="btn lg primary" onClick={handleSubmit}>save</button>
            </header>
            <form className="create-note__form" onsubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea rows="10" placeholder="Note details..." value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </form>
        </section>
    )
}

export default CreateNote