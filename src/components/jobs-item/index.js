import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const jobsItem = ({ job }) => {
    const { id, organizationName, city, title, date } = job;
    const dateString = date.slice(0,10).split('-').reverse().join('-');
    const time = date.slice(11,16)
    return(
        <div className="col-md-12 col-sm-12 portfolio-item ">
            <div className="portfolio-caption hidden-xs-down">
                <div className="row">
                    <div className="col-md-8 col-sm-7">
                        <h4>{ title }</h4>
                        <p className="text-muted">{ organizationName } - {city}</p>
                    </div>
                    <div className="col-md-4 col-sm-5 -right">
                        <p>{ dateString } { time }</p>
                        <Link className="btn btn-red" to={'/vacancies/' + id} role="button">Посмотреть больше</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default jobsItem;