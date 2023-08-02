import React from 'react';

export default function About() {
    return (
        <section className='about' id="about">
            <h2 className='about__title'>О проекте</h2>
            <div className='about__diploma'>
                <h3 className='about__subtitle' id="about-diploma">Дипломный проект включал 5 этапов</h3>
                <h3 className='about__subtitle' id="about-diploma">На выполнение диплома ушло 5 недель</h3>
                <p className='about__text' id="about-diploma">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='about__text' id="about-diploma">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <article className='about__tracker'>
                <div className='about__line_green'>1 неделя</div>
                <div className='about__line_grey'>4 недели</div>
                <p className='about__techs'>Back-end</p>
                <p className='about__techs'>Front-end</p>
            </article>
        </section>
    )
}