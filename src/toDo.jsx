import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from './list'

const Todolist = () => {
    const [item, setitem] = useState('');
    const [itemval, setitemval] = useState([]);

    const itemEvent = (event) => {
        setitem(event.target.value)
    }
    const submit = () => {
        setitemval((preval) => {
            return [...preval, item]
        });
        setitem('')
    }

    return (
        <>
            <div className='main'>
                <div className='center'>
                    <br/>
                    <h1>Todolist</h1>
                    <br />
                  <div className='style'>
                        <input type='text' placeholder='Add an Items' onChange={itemEvent} value={item} />
                        <Button className='new-btn' onClick={submit}><AddCircleIcon /></Button>
                        <br />
                        <ol>
                            {
                                itemval.map((val,index) => {
                                    return <List key={index} text={val}/>
                                })
                            }  
                          
                        </ol>
                  </div>
                </div>
            </div>

        </>
        
    )
}
export default Todolist;
