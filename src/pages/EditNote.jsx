import { IoIosArrowBack } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Link, useParams, useNavigate } from "react-router-dom"
const EditNote = ({notes, setNotes}) => {
    const {id} = useParams();
    const note = notes.find((item) => item.id == id)
    
    const [title, setTitle] = useState(note.title)
    const [details, setDetails] = useState(note.details)
    const date = useCreateDate();
    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventdefault()

        if(title && details){
            const newNote = {...note, title, details, date}

            const newNotes = notes.map(item => {
                if(item.id == id){
                    item = newNote;
                }
                return item;
            })
            setNotes(newNotes);
        }
           // redirect to home page
           navigate("/")
    }


    const handleDelete = () => {
        const newNote = notes.filter(item == item.id != id);

        setNotes(newNotes);
        navigate("/")
    }


    return(
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><IoIosArrowBack/></Link>
                <button className="btn lg primary" onclick={handleForm}>save</button>
                <button className="btn lg danger" onclick={handleDelete}><RiDeleteBin6Line/></button>
            </header>
            <form className= "create-note__form" onsubmit={handleForm}>
                <input type="text" placeholder="Title" autoFocus  value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea rows="10" placeholder="Note details..."  value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            </form>
        </section>
    )
}

export default EditNote