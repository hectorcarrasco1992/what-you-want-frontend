import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const HistoryAPI = (location) => {
    return history.push(location);
};
