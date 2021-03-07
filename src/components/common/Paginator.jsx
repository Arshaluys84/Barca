import React, { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = ({ totalCount, count, currentPage, onChanged, portionSize = 5 }) => {
    let pageCount = Math.ceil(totalCount / count);
    let pages = [];
    for (let index = 1; index <= pageCount; index++) {
        pages.push(index);
    }
    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionSize * portionNumber;

    return (
        <div className={s.pagesSpans}>
            { portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>
                Previous </button>}
            { pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span className={currentPage === p ? s.selectedPage : undefined}
                        onClick={(e) => { onChanged(p) }} key={p}>{p}</span>
                })}
            {portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>
                Next </button>}
        </div>
    )
}
export default Paginator;

