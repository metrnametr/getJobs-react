import React, { Component } from 'react'
import JobsItem from '../jobs-item'
import './style.css'
class JobsList extends Component{

    state = {
        loading: true
    }
    componentDidMount(){
        this.setState({
            loading: true
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.jobsData !== this.props.jobsData){
            this.setState({ loading: false})
        }
        if(prevProps.currentPage !== this.props.currentPage){
            this.setState({
                loading: true
            })
        }
    }
    
    render(){
        const { jobsData } = this.props
        const { loading } = this.state
        if(loading) return <div className='loading'>Loading</div>
        return(
            <div className="row portfolio_row">
                {jobsData.elements.map( job => <JobsItem key={job.id} job={job}/>)}
            </div>
        )
    }
}

export default JobsList;