import React from "react";

export default function FilterCheckbox({ isShort, onFilter }) {
    return (
        <label className='filtercheckbox' htmlFor="checkbox">
            <input checked={isShort} onChange={onFilter} type='checkbox' className='filtercheckbox__checkbox' id="checkbox"></input>
            <span className="filtercheckbox__shortmovs">Короткометражки</span>
        </label>
    )
}