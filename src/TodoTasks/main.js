import React, { useState } from 'react'
import "../App.css"
import Task from './Task';
import taskList from './taskList'

function Main() {
     const [list,setList]=useState(taskList);

     return (
          <div>

               <div className='container'>

                    <h3 className='d-flex justify-content-center'>{list.length}&nbsp;Tasks</h3>
                    <Task task={list}/>

                   <button type='button' onClick={()=>setList([])} className='border-0 p-2 mx-auto d-block mt-3 bg-success text-white'>
                         Clear All
                    </button>

               </div>


             
                    
          </div>
               

               
     );
}

export default Main
