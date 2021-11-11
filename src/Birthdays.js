import React, { useState } from 'react'
import data from './data'
import List from './List'

function Birthdays() {
     const[people,setPeople]=useState(data)
     return (
          <div>
                <main>
                    <section className='container'>
                    <h3>{people.length} birthdays today</h3>
                    <List people={people}/>
                    <button type='button' onClick={()=>setPeople([])}>
                         Clear All
                    </button>

                    </section>
                </main> 
          </div>
     )
}

export default Birthdays
