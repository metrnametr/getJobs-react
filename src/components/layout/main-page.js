import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import JobsList from '../jobs-list'
import JobsPagintaion from '../jobs-pagination'
import withApi from '../hoc/withApi'
import './main-page.css'

class MainPage extends Component{

    state = {
        pageCount: 1,
        jobsData: null
    }

    togglePageCount = (pageCount) => {
        this.setState({ pageCount })
    }

    componentDidMount(){
        const { currentPage, pageSize, api} = this.props
        api.getJobs(currentPage, pageSize)
            .then( data => this.setState({ jobsData: data }))
    }

    componentDidUpdate(prevProps, prevState){
        const { currentPage, pageSize, api} = this.props
        if(this.state.jobsData !== prevState.jobsData){
            this.togglePageCount(this.state.jobsData.pageCount)
        }
       
        if(this.props.currentPage !== prevProps.currentPage){
            api.getJobs(currentPage, pageSize)
                .then( data => this.setState({ jobsData: data }))
        }
        
    }

    render(){
        const { currentPage, pageSize, toggleCurrentPage } = this.props
        const { jobsData, pageCount } = this.state
        return(
            <section className="bg-faded" id="portfolio">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Elixir / Erlang jobs</h2>
                        <h3 className="section-subheading text-muted">Публикация совершенно бесплатна и не требует регистрации.
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <Link to='/page-add' className="btn btn-xl" id="add_event" role="button">Добавить вакансию</Link>
                    </div>
                </div>
                    <JobsList 
                        jobsData={jobsData}
                        togglePageCount={this.togglePageCount}
                        currentPage={currentPage} 
                        pageSize={pageSize}/>
                    <JobsPagintaion 
                        toggleCurrentPage={toggleCurrentPage}
                        pageCount={pageCount}
                        currentPage={currentPage} 
                    />
                </div>
            </section>
        )
    }
}
export default withApi()(MainPage);