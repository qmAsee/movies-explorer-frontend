import React from 'react';

export default function Student() {
    return (
        <section className='student'>
            <h2 className='student__title'>Студент</h2>
            <div className='student__about'>    
                <div className='student__description'>
                    <h3 className='student__name'>Максим</h3>
                    <h4 className='student__subtitle'>Фронтенд-разработчик, 23 года</h4>
                    <div className='student__info'>Простой парень с большими амбициями из города Перми. Картограф-геоинформатик по образованию. Всегда была интересна IT-сфера, поэтому я решил сменить вектор развития и пройти курс по веб-разработке в Яндексе и не прогадал! С каждым спринтом на курсе я все больше понимал, что двигаюсь в правильном направлении. Навыки, полученные во время обучения, точно пригодятся мне в новой профессии.</div>
                    <a href='https://github.com/qmAsee' target='blank' className='student__github'>Github</a>
                </div>
                <div className='student__photo'></div>
            </div>
            <span className='student__portfolio'>Портфолио</span>
            <a href='https://github.com/qmAsee/how-to-learn' target='_blank' className='student__link'>
                <div className='student__work'>
                    <span className='student__site'>Статичный сайт</span>
                    <div className='student__arrow'></div>
                </div>
            </a>
            <a href='https://qmasee.github.io/russian-travel/' target='_blank' className='student__link'>
                <div className='student__work'>
                    <span className='student__site'>Адаптивный сайт</span>
                    <div className='student__arrow'></div>
                </div>
            </a>
            <a href='https://mskupchin-mesto.nomoreparties.sbs/' target='_blank' className='student__link'>
                <div className='student__work'>
                    <span className='student__site'>Одностраничное приложение</span>
                    <div className='student__arrow'></div>
                </div>
            </a>
        </section>
    )
}