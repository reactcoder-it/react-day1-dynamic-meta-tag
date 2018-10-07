import React, {Component} from 'react'
import {Jumbotron} from 'reactstrap'

class Page extends Component {
    render() {
        const title = this.props.title;
        const desc = this.props.desc;
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">{title}</h1>
                    <p className="lead">{desc}</p>
                </Jumbotron>
            </div>
        )
    }
}

export default Page;