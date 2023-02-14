import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid"



const CreateNote = () => {
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
 
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(title && details){
            const note = {id: uuid(), title, details}
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