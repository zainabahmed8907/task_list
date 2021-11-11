import React  from 'react'


function Task({task}) {

     return (
          <div>
               {task.map((task)=>{
                         const {taskname,image,time}=task;

                    return(
                      <div className='p-3 tasklist bg-white w-25 rounded shadow mb-3 mx-auto'>
                        <section key={task.id} className='row task'>
                            <div className='col-md-6'>
                            <img src={image} alt="tasks" className='mb-2'/>


                            </div>
                            <div className='col-md-6 pe-5'>
                            <div>
                              <h4>{taskname}</h4>
                              <p>{time}</p>

                              </div>
                            </div>
                         </section>
                     </div>
                    )
               })}
               
          </div>
     )
}

export default Task
