import { IoIosArrowBack } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Link } from "react-router-dom"
const EditNote = () => {
    return(
        <section>
            <header className="create-note__header">
                <Link to="/" className="btn"><IoIosArrowBack/></Link>
                <button className="btn lg primary">save</button>
                <button className="btn lg danger"><RiDeleteBin6Line/></button>
            </header>
            <form>
                <input type="text" placeholder="Title" autoFocus />
                <textarea rows="10" placeholder="Note details..."></textarea>
            </form>
        </section>
    )
}

export default EditNote