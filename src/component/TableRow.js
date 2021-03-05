import React from 'react'
import Row from './Row';

export default function TableRow({peopleDisplay}) {
    return (
        <div className="table-container">
          {peopleDisplay.length > 0 ? peopleDisplay.map((p,i) => (
            <Row key={i} name={p.name} email={p.email} />
          ))
          :
          <div>Sorry, People not found</div>
        }
        </div>
    )
}
