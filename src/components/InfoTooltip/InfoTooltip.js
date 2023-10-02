import React from 'react';

import failed from '../../images/cross.png';
import success from '../../images/checkmark.png';

export default function InfoTooltip({ isOpened, isSuccess, onClose }) {
    return (
        <div className={`popup ${isOpened ? 'popup_opened' : ''}`}>
            <div className='popup__content'>
                <button type='button' className='popup__close' onClick={onClose} />
                <span className='popup__message'>{isSuccess ? 'Данные успешно изменены!' : 'Не удалось обновить данные'}</span>
                <img className='popup__icon' src={isSuccess ? success : failed} alt={isSuccess ? 'Данные изменены' : 'Не удалось обновить данные'} />
            </div>
        </div>
    )
}