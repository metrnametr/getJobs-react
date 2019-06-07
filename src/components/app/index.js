import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import MainPage from '../layout/main-page'
import JobInfoPage from '../layout/job-info-page'
import InfoPage from '../layout/info-page'
import AddPage from '../layout/add-page'
import './style.css'
class App extends Component{

    state = {
        currentPage: 1,
        pageSize: 4
    }
    renderMainPage = (currentPage) => {
        const { pageSize } = this.state
        return <MainPage 
                currentPage={currentPage}
                pageSize={pageSize}
                toggleCurrentPage={this.toggleCurrentPage}/>
    }
    toggleCurrentPage = (newCurrentPage) => {
        this.setState({ currentPage: newCurrentPage})
    }
    render(){
        const { currentPage } = this.state
        return(
            <div id="page-top">
                    <Router>
                        <Route path='/' component={Header}/>
                        <Switch>
                            <Route 
                                path={`/`} 
                                exact
                                render={ () => this.renderMainPage(currentPage)}/>
                            <Route 
                                path={`/page=:id`} 
                                exact
                                render={ ({match}) => this.renderMainPage(match.params.id)}
                            />
                            <Route path='/vacancies/:id' 
                                   render={ ({ match }) => {return <JobInfoPage id={match.params.id}/>}} 
                                   exact/>
                            <Route path='/infoProject' component={InfoPage} exact/>
                            <Route path='/page-add' component={AddPage}/>
                            <Redirect to='/'/>
                        </Switch>

                    </Router>
                    <Footer/>
            </div>
        )
    }
}

export default App;