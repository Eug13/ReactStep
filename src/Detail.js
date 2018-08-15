import React from 'react'

class Detail extends React.Component{
    render(){
         const user = this.props.userDetail;
        return(
            <div className='creditDetail'>
                <div className='credit-detail'>
                   <h3>Credit Detail</h3>
                </div>
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
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.ammount}</td>
                            <td>{user.term}</td>
                        </tr>

                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default Detail;