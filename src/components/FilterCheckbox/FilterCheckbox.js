import React from "react";

export default function FilterCheckbox() {
    return (
        <label className='filtercheckbox' for="checkbox">
            <input type='checkbox' className='filtercheckbox__checkbox' id="checkbox"></input>
            <span className="filtercheckbox__shortmovs">Короткометражки</span>
        </label>
    )
}