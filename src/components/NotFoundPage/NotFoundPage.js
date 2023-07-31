import React from "react";

import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <section className="notfound">
            <h1 className="notfound__title">404</h1>
            <span className="notfound__message">Страница не найдена</span>
            <button type="button" onClick={() => navigate(-1)} className="notfound__backbutton">Назад</button>
        </section>
    )
}