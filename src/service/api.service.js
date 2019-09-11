import axios from 'axios';
import { Subject} from "rxjs";
import { startWith} from "rxjs/operators";

export default class ApiService {
    constructor() {

        this.repo = new Subject();
        this.repo$ = this.repo.asObservable();
        this.getGitHubRepo = this.getGitHubRepo.bind(this);
    }

    getGitHubRepo() {
        axios.get(`https://api.github.com/users/g51014/repos`)
            .then(res => {
                this.repo.next(res.data);
            })
    }
}