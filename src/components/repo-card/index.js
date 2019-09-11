import React from 'react';
import './style.scss';

export default class RepoCard extends React.Component {
    render() {
        return (
            <div className={'repoCard col-12'}>
                <div className={'w-full repoCard__Container'}>
                    <div className={'repoCard__Header'}>
                        <h1>{this.props.data.name}</h1>
                        <span><a href={this.props.data.html_url}>{this.props.data.html_url}</a></span>
                    </div>
                    <div className={'repoCard__Body'}>
                        <span><h3>owner</h3><p>{this.props.data.owner.login}</p></span>
                        <span><h3>file size</h3><p>{this.props.data.size}</p></span>
                        <span><h3>description</h3><p>{!!this.props.data.description ? this.props.data.description : 'nothing'}</p></span>
                        <span><h3>created at</h3><p>{this.props.data.created_at}</p></span>
                        <span><h3>updated at</h3><p>{this.props.data.updated_at}</p></span>
                    </div>


                </div>
            </div>
        )
    }
} 
