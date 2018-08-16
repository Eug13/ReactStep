import React from 'react';

class LeftTable extends React.Component {
    constructor(props) {
        super(props);
        this.getUsers = this.getUsers.bind(this);
        this.getDetails = this.getDetails.bind(this);
    }


    getUsers() {
        const users = this.props.users;
    
    if(users) {
        return users.map((user, index) => {
            return <tr key={index} className='tr' onClick={this.getDetails}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.ammount}</td>
                <td>{user.term}</td>
            </tr>
        })
    }
}


getDetails(e) {
const id = e.currentTarget.childNodes[0].innerText;
const name = e.currentTarget.childNodes[1].innerText;
const surname = e.currentTarget.childNodes[2].innerText;
const ammount = e.currentTarget.childNodes[3].innerText;
const term = e.currentTarget.childNodes[4].innerText;

    this.props.selected({id,name,surname,ammount,term});
}


render() {
    let userData = this.getUsers();

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Ammount</th>
                        <th scope="col">Term</th>
                    </tr>
                </thead>
                <tbody>
                     {userData}
                </tbody>
            </table>
        </div>
    );
}
}


export default LeftTable;
