import React from 'react';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleName = this.handleName.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleAmmount = this.handleAmmount.bind(this);
        this.handleTerm = this.handleTerm.bind(this);
        this.sendUserData = this.sendUserData.bind(this);
        this.state = {
            id: 1,
            name: '',
            surname: '',
            ammount: '',
            term: '',
            messages: {
                warningNum: '',
                warningNum1: '',
                warningLet: '',
                warningLet1: ''
            },
            alerts: {
                alertNum: '',
                alerttNum1: '',
                alertLet: '',
                alertLet1: ''
            }
        }
    }

    handleName(e) {
        this.setState({
            messages: { warningLet: '' },
            alerts: { alertLet: '' }
        })
        let reg = new RegExp('^[a-zA-Z-]+$');
        if (reg.test(e.target.value)) {
            this.setState({
                name: e.target.value
            })
        } else {
            this.setState({
                messages: { warningLet: 'This field should contain only letters!' },
                alerts: { alertLet: 'red' }
            })
        }
    }

    handleSurname(e) {
        this.setState({
            messages: { warningLet1: '' },
            alerts: { alertLet1: '' }
        })
        let reg = new RegExp('^[a-zA-Z-]+$');
        if (reg.test(e.target.value)) {
            this.setState({
                surname: e.target.value
            })
        } else {
            this.setState({
                messages: { warningLet1: 'This field should contain only letters!' },
                alerts: { alertLet1: 'red' }
            })
        }
    }

    handleAmmount(e) {
        this.setState({
            messages: { warningNum: '' },
            alerts: { alertNum: '' }
        })

        let reg = new RegExp('^\\d+$');
        if (reg.test(e.target.value)) {
            this.setState({
                ammount: e.target.value
            })
        } else {
            this.setState({
                messages: { warningNum: 'This field should contain only numbers!' },
                alerts: { alertNum: 'red' }
            })
        }
    }


    handleTerm(e) {
        this.setState({
            messages: { warningNum1: '' },
            alerts: { alertNum1: '' }
        })

        let reg = new RegExp('^\\d+$');
        if (reg.test(e.target.value)) {
            this.setState({
                term: e.target.value
            })
        } else {
            this.setState({
                messages: { warningNum1: 'This field should contain only numbers!' },
                alerts: { alertNum1: 'red' }
            })
        }
    }

    sendUserData() {
        let id = this.state.id;
        let name = this.state.name;
        let surname = this.state.surname;
        let ammount = this.state.ammount;
        let term = this.state.term;
        this.props.onClick({ id, name, surname, ammount, term });

        let newId = id += 1;
        this.setState({
            id: newId
        })
    }

    render() {
        return (
            <div>
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Client name</label>
                        <input type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Client name"
                            onChange={this.handleName} />
                        <small id="emailHelp" className={`form-text text-muted ${this.state.alerts.alertLet}`}>{this.state.messages.warningLet}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Client surname</label>
                        <input type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Client surname"
                            onChange={this.handleSurname} />
                        <small id="emailHelp" className={`form-text text-muted ${this.state.alerts.alertLet1}`}>{this.state.messages.warningLet1}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleCheck1">Amount</label>
                        <input type="text"
                            className="form-control"
                            id="exampleCheck1"
                            placeholder="Amount"
                            onChange={this.handleAmmount}
                        />
                        <small id="emailHelp" className={`form-text text-muted ${this.state.alerts.alertNum}`}>{this.state.messages.warningNum}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleCheck1">Term</label>
                        <input type="text"
                            className="form-control"
                            id="exampleCheck1"
                            placeholder="Term"
                            onChange={this.handleTerm} />
                        <small id="emailHelp" className={`form-text text-muted ${this.state.alerts.alertNum1}`}>{this.state.messages.warningNum1}</small>
                    </div>
                    <div>
                        <button type="button" onClick={this.sendUserData}><i className="fab fa-telegram-plane"></i>&nbsp;Send</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputComponent;