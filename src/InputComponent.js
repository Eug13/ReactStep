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
            id:1,
            name: '',
            surname: '',
            ammount: '',
            term: ''
        }
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSurname(e) {
        this.setState({
            surname: e.target.value
        })
    }

    handleAmmount(e) {
        this.setState({
            ammount: e.target.value
        })
    }


    handleTerm(e) {
        this.setState({
            term: e.target.value
        })
    }

    sendUserData(){
        let id = this.state.id;
        let name = this.state.name;
        let surname = this.state.surname;
        let ammount = this.state.ammount;
        let term = this.state.term;
     this.props.onClick({id,name,surname,ammount,term});

        let newId = id +=1;
     this.setState({
         id:newId
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
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Client surname</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Client surname"
                        onChange={this.handleSurname} />
                     
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleCheck1">Amount</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleCheck1" 
                        placeholder="Amount"
                        onChange={this.handleAmmount} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleCheck1">Term</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleCheck1" 
                        placeholder="Term"
                        onChange={this.handleTerm} />
                      
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