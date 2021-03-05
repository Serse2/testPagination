import React from 'react'
import {useSelector} from 'react-redux'
import store from '../store'
import {setCurrentPage, prevCurrentPage, nextCurrentPage} from '../actions/peopleAction'

export default function Pagination({pages}) {
    const {currentPage} = useSelector(state => state)
    console.log(pages.length)
    return (
        <div className="pagination">
            {(currentPage !== 1 && pages.length !== 0) && <button onClick={() => store.dispatch(prevCurrentPage(1))} className="pag-btn">˂</button>}
            {pages.map(page => (
                <button key={page} onClick={() => store.dispatch(setCurrentPage(page))} className={`pag-btn ${currentPage === page ? 'active' : ''}`}>{page}</button>
            ))}
            {(currentPage !== pages.length && pages.length !== 0) && <button onClick={() => store.dispatch(nextCurrentPage(1))} className="pag-btn">˃</button>}
        </div>
    )
}
