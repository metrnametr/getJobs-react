import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import withApi from '../hoc/withApi'
import './job-info-page.css'

class JobInfoPage extends Component{

    state = {
        jobInfo: null,
        currencyType: ['EUR', 'RUB', 'USD'],
        workingCondition: ['Contract', 'Freelance', 'Full time', 'Part time']
    }

    componentDidMount(){
        const { id, api } = this.props
        api.getJobById(id)
            .then( jobInfo => this.setState({ jobInfo }))
    }
    render(){  
        const { jobInfo } = this.state
        if(!jobInfo) return <div className='loading'>Loading</div>
        const { title, 
            description, 
            city, 
            date, 
            email, 
            organizationName, 
            contactPartner,
            companyURL,
            salary,
            phoneNumber,
            currencyType,
            workingCondition,
            isRemoteWorking } = jobInfo;
        const dateString = date.slice(0,10).split('-').reverse().join('-');
        const time = date.slice(11,16)
        return(
            <section className="bg-faded" id="portfolio">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                    <div className="modal-body">
                        <h2>{ title }</h2>
                        <p className="item-intro text-muted">{ organizationName }</p>
                        <h2 className="item-intro text-muted">{ salary } { this.state.currencyType[currencyType]}</h2>
                        <article className="job_article" dangerouslySetInnerHTML={ { __html: description }}/>
                        <ul className="list-inline">
                            <li>Город: { city }</li>
                            <li>Занятость: {this.state.workingCondition[workingCondition]}</li>
                            <li>Удаленая форма: { (isRemoteWorking) ? 'поддерживаем' : 'не поддерживаем'}</li>
                            <li>Дата публикации: { dateString } { time }</li>
                            <li>Сайт компании: { companyURL }</li>
                            <li>Контактное лицо: { contactPartner }</li>
                            <li>Телефон: { phoneNumber }</li>
                            <li>Email: <Link to={`mailto:${email}`}>{ email }</Link></li>
                        </ul>
                        <div className='social_share'>
                            <div className="ya-share2" data-services="vkontakte,facebook,twitter,telegram"></div>
                        </div> 
                        <Link to='/' className="btn btn-primary"><i className="fa fa-arrow-left"></i> Назад</Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}


export default withApi()(JobInfoPage);