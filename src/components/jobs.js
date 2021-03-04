import React, { Component } from 'react';

class Jobs extends Component {

    render(){
       

        return (
            <section className="job">
                <h2>{ this.props.jobTitle}</h2>
                <h3>{ this.props.jobTime}</h3>
                <h4>{ this.props.jobDescription }</h4>
            </section>
            
        )
    }
}


export default Jobs;