import React from 'react'
import { Link } from 'react-router-dom'
import './info-page.css'
const infoPage = () => {
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <h2 className="section-heading">О проекте</h2>
                        <h3 className="section-subheading text-muted">Пару слов о проекте</h3>
                    </div>
                </div>
                <div className="row jumbotron">
                    <div className="col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                        <p className="large text-muted"><b>ErlangJobs.ru</b> является некоммерческим проектом. Основная цель и идея
                        разработки - популяризация технологии и поддержка сообщества разработчиков.</p>
                        <p className="large text-muted"> Все вакансии публикуются бесплатно. Размещаемая информация передается "as is" и
                        принадлежит ее авторам.</p>
                        <p className="large text-muted"> По всем идеям и предложениям:</p>
                        <p className="large text-muted"> Электронная почта: <Link to='/'>Nastya&Darya@gmail.com</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default infoPage;