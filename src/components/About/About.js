import React from 'react';

export default function About() {
    return (
        <section className='about' id="about">
            <h2 className='about__title'>О проекте</h2>
            <div className='about__diploma'>
                <h3 className='about__text about__text_title'>Дипломный проект включал 5 этапов</h3>
                <h3 className='about__text about__text_title'>На выполнение диплома ушло 5 недель</h3>
                <p className='about__text about__text_subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='about__text about__text_subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <article className='about__tracker'>
                <span className='about__line about__line_green'>1 неделя</span>
                <span className='about__line about__line_grey'>4 недели</span>
                <h3 className='about__techs'>Back-end</h3>
                <h3 className='about__techs'>Front-end</h3>
            </article>
        </section>
    )
}