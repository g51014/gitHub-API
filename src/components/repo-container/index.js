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
    
      handleScroll = e => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
          let oldData = this.state.data;
          this.state.data.forEach(
            e => {
              oldData.push(e)
            }
          )
          this.setState({...this.state,...{data: oldData}})
        }
      }

      componentDidMount() {
        this.state.$api.repo$.subscribe(
          data => {
            this.setState({ ...this.state, ...{data: data} })
          }
        )
      }

    render() {
        return (
            <div className={'Repo'}>
            {!!this.state.data ?
              <div style = {{height: window.innerHeight}} onScroll = {this.handleScroll} className={'Repo__Container container'}>
                {this.state.data.map(
                  (e, i) => <RepoCard key={i} data={e} service={this.state.$api} />
                )}
              </div> : null}
          </div>
        )
    }
} 
