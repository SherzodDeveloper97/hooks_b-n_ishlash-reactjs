import {useEffect} from 'react'

let childMessageCount = 0;
const ChildMessages = () => {

    useEffect(() => {
        childMessageCount++;
    });

  return (
    <div className='child_message--container'>
        <div className="child-box">
            <h2>Child Message: {childMessageCount}</h2>
        </div>
    </div>
  )
}

export default ChildMessages
