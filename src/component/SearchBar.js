import React from 'react'

export default function SearchBar({searchInput}) {
    return (
        <div className="searchBar">
            <input type="text" placeholder="Write to search people..." onChange={(e) => searchInput(e.target.value)}/>
        </div>
    )
}
