import React from 'react'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.getMoney = this.getMoney.bind(this)
    }
    
    
    getMoney(){
        const money = this.props.money;
        return money.map((mon, index) => {
            return<span key={index} className='money' >
             <span className='monItem'>{mon.ccy}</span>
             <span className="currency"><strong>BUY:</strong> {Math.round(mon.buy*100)/100} {mon.base_ccy} &nbsp;
            <strong>SALE:</strong> {Math.round(mon.sale*100)/100} {mon.base_ccy}</span>
             </span>
    
        })
    }
    
    
        render() {
            const getMoney = this.getMoney();
        
        return (
                <div className="row section-content">
                    <h1 className='content-header'><span className='get'>Get</span>Money With Best Credit Online</h1>
                    <h3>24/7 Support. Free games for best clients!</h3>
                    <div>
                        {getMoney}
                    </div>
                </div>
        )
    }
}

export default Header;