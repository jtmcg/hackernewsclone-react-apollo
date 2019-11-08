import React, { Component } from 'react';

export default class Link extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.link.description} ({this.props.link.url})
                </div>
            </div>
        )
    }
}
