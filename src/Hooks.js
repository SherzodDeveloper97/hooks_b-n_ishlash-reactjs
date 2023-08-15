import {useState, useMemo} from 'react'
import ChildMessages from "./components/ChildMessages";

// hooks -> re-charging (useState)

const Hooks = () => {

    const [message,setMessage] = useState(0);

    const [state,setState] = useState({
        userName: "Sherzod dev",
        gender: "👨‍🦱male",
    })

    function changeContact(){
        setState((prev) => {
            return {
                ...prev,
                userName: "Sevaraxon",
                gender: "👩‍🦰female",
            }
        })
    }

    const childMessages = useMemo(() => {
        return <ChildMessages />
    },[])

  return (
    <div className='container'>
        <div className="card">
            <div className='notification'>
                <h1>
                    <i className="fa-solid fa-message message"></i> Message: {message}
                    <span className='alert-messages'>{message}</span>
                </h1>
            </div>
            <hr />

            {childMessages}

            <hr />

            <div className="contact">
                <h3>
                    <i className="fa-solid fa-user user"></i>
                    {state.userName} - {state.gender}
                </h3>
                <div className="edit" onClick={changeContact}>
                    <i className="fa-solid fa-pen edit-pen"></i>
                    <span>edit</span>
                </div>
            </div>

            <hr />
            <button className='btn btn-success' onClick={() => setMessage((prev) => prev + 1)}>Add</button>
            <button className='btn btn-danger' onClick={() => setMessage((prev) => prev - 1)}>Delete</button>
        </div>
    </div>
  )
}

export default Hooks;
