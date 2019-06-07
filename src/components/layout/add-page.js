import React, { Component } from 'react'
import withApi from '../hoc/withApi'
class AddPage extends Component{

    state = {
        reqData: {
            title: '',
            workingCondition: 0,
            description: '',
            city: '',
            isRemoteWorking: false,
            organizationName: '',
            email: '',
            companyURL: '',
            phoneNumber: '',
            contactPartner: '',
            salary: '',
            currencyType: 0,
        },
        itemsArray: [
            { title: 'Заголовок', name:'title'},
            { title: 'Тип занятости', name:'workingCondition', select: true, 
              value: [
                { value: 0, title:'Full time' }, 
                { value: 1, title:'Part time' }, 
                { value: 2, title:'Contract'  }, 
                { value: 3, title:'Freelance' }
            ]},
            { title: 'Описание занятости', name:'description', textarea: true},
            { title: 'Город', name:'city'},
            { title: 'Удаленная работа?', name:'isRemoteWorking', type: 'checkbox', value: true},
            { title: 'Наименование организации', name:'organizationName'},
            { title: 'Email', name:'email'},
            { title: 'Сайт компании', name:'companyURL'},
            { title: 'Номер телефона', name:'phoneNumber'},
            { title: 'Контактное лицо', name:'contactPartner'},
            { title: 'Зарплата', name:'salary'},
            { title: 'Валюта оплаты', name:'currencyType', select: true,
            value: [ 
                {value: 0, title: 'Rub'}, 
                {value: 1, title: 'USD'}, 
                {value: 2, title:'EUR'}
            ]}
        ]
    }

    toggleInput = (e) =>{
        const name = e.target.name
        const value = e.target.value 
        this.setTarget(name, value)
        if(e.target.name === 'isRemoteWorking') this.setTarget(name, e.target.checked)
    }

    setTarget = (option, value) => {
        this.setState({ reqData: {
            ...this.state.reqData,
            [option]: value
        } })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { api, history } = this.props
        api.postJob(this.state.reqData);
        history.push('/')
        }


    renderFormInput = () => {
        return this.state.itemsArray.map( item => {
            if(item.select) {
                    return <div key={item.title} className="form-group">
                                <label>{item.title}</label>
                                <select 
                                    onChange={this.toggleInput}
                                    className="form-control" 
                                    name={item.name}
                                   
                                    >
                                {item.value.map( (item, index) => 
                                <option 
                                    key={index} 
                                    value={item.value}
                                >{item.title}</option>)}
                                </select>
                            </div>
                
            }
            if(item.textarea){
                return this.chooseFormField(<textarea 
                                            key={item.title}
                                            onChange={this.toggleInput}
                                            className="form-control" 
                                            name={item.name}
                                            >
                                            </textarea>, item.id, item.title)
                            
            }
            return this.chooseFormField(<input 
                                            key={item.title}
                                            onChange={this.toggleInput}
                                            className="form-control" 
                                            name={item.name} 
                                            type={(item.type) ? item.type : 'text'}
                                        />, item.id, item.title)
        })
    }

    chooseFormField = (field, id, title) => {
        return <div key={id} className="form-group">
                <label>{title}</label>
                {field}
            </div>
    } 
    render(){
        console.log(this.state.reqData.isRemoteWorking)
        return(
        <section className="bg-faded" id="portfolio">
            <div className="container">
                <h2>Новая вакансия</h2>
                <form 
                    onSubmit={this.handleSubmit}
                >
                    <input 
                        name="_csrf_token" 
                        type="hidden"
                        value="EGlLVR8UDQVkejcIFQZaDw8hKX84EAAAcZsf4EWuR/pOeJ+zVOxFIg=="
                    />
                    <input 
                        name="_utf8" 
                        type="hidden" 
                        value="✓"
                    />

                    {this.renderFormInput()}

                    <div className="form-group">
                        <button className="btn btn-xl" type="submit">Сохранить</button> 
                    </div>
                </form>
            </div>
        </section>
        )
    }
}

export default withApi()(AddPage);