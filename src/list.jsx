import React, { useState } from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const List = (props) => {
    const [line, setline] = useState(false);
    const cutit = () => {
        setline(true)
    }

    return (<>
           <div className='todo-style'>
        <span onClick={cutit}><RemoveCircleIcon className='deleteicon' /></span>
        <li style={{textDecoration:line?"line-through":"none"}}>{props.text}</li>
    </div>
    </>)

}
export default List;