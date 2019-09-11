import React from 'react';
import './style.scss';
import ApiService from '../../service/api.service';
import RepoCard from '../repo-card';

export default class Repo extends React.Component {
    constructor(props) {
        super(props);
        let $api = new ApiService();
        $api.getGitHubRepo();
        this.state = {
          $api: $api
        }
      }
    
      componentDidMount() {
        this.state.$api.repo$.subscribe(
          data => {
            console.log(data)
            this.setState({ ...this.state, ...{ data: data } })
          }
        )
      }

    render() {
        return (
            <div className={'Repo'}>
            {!!this.state.data ?
              <div className={'Repo__Container container'}>
                {this.state.data.map(
                  (e, i) => <RepoCard key={i} data={e} service={this.state.$api} />
                )}
              </div> : null}
          </div>
        )
    }
} 
