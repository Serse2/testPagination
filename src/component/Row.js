import React from 'react'

export default function Row({name, email}) {
    return (
        <div className="row-container">
            <h5>{name}</h5>
            <div>{email}</div>
        </div>
    )
}
