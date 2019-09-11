import React from 'react';
import './style.scss';

export default class RepoCard extends React.Component {
    render() {
        return (
            <div className={'repoCard col-12'}>
                <div className={'w-full repoCard__Container'}>
                    <h1>{this.props.data.name}</h1>
                    <p>{this.props.data.description}</p>
                    <a href={this.props.data.html_url}>{this.props.data.html_url}</a>
                </div>
            </div>
        )
    }
} 
