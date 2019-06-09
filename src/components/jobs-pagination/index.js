import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class JobsPagination extends Component {
    
    state = {
        countPage: [],
        visiblePage: []
    }
    itemsPagination = () => {
        const { pageCount, currentPage } = this.props;
        const newArray = []
        for(let i = 1; i <= pageCount; i++){
            newArray.push(i)
        }

        this.setState({ countPage: [...this.state.countPage, ...newArray]})


        const sliceStart = (((parseInt(currentPage) - 3) > 0)  ? (parseInt(currentPage) - 3) : 0);
        const sliceEnd = ( ((parseInt(currentPage) - 1) > 0) ? (parseInt(currentPage) + 3) : (parseInt(currentPage) + 5))
        const sliceArray = newArray.slice( sliceStart , sliceEnd )
        this.setState({ visiblePage: [...sliceArray]})
        
    }

    slide = (value) => {
        const { toggleCurrentPage, currentPage } = this.props
        toggleCurrentPage( parseInt(currentPage) + value)
    }
    componentDidMount(){
        this.itemsPagination()
    }
    componentDidUpdate(prevProps){
        if(this.props.pageCount !== prevProps.pageCount){
            this.itemsPagination()
        }
        if(this.props.currentPage !== prevProps.currentPage){
            this.itemsPagination()
        }
    }
    renderListPagination = () => {
        const { toggleCurrentPage, currentPage } = this.props
        return this.state.visiblePage.map( (i, index) => 
                    <li key={index} className={(parseInt(currentPage) === i)  ? 'page-item active' : 'page-item'}>
                        <Link 
                            className="page-link" 
                            to={'/page=' + i} 
                            onClick={() => toggleCurrentPage(i)}
                            rel="canonical"
                        >{i}</Link>
                    </li>
        )
    }
    liPrevNext = (type, value, itemPlus) => {
        const { currentPage } = this.props
        return <li 
                    onClick={() => (parseInt(currentPage) === value) ? null : this.slide(itemPlus)} 
                    className="page-item" 
                >
                    <Link 
                        to={'/page=' + ( parseInt(currentPage) === value ) ? '': (parseInt(currentPage) + itemPlus)} 
                        className="page-link" aria-label={type}
                    >
                        <span >{type}</span>
                    </Link>
                </li>
    }
    render(){
        const { pageCount } = this.props
        return(
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    {this.liPrevNext('Previous',1, -1)}
                    {this.renderListPagination()}
                    {this.liPrevNext('Next', pageCount, 1)}
                </ul>
            </nav>
        )
    }
}

export default JobsPagination;