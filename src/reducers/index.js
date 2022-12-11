const appState ={}

const reducers = (state = appState,action)=>{
    switch(action.type){
        case 'GET_INDIA_LATEST_NEWS':
            return { ...state, isLoading: true }
        case 'GET_US_LATEST_NEWS':
                return { ...state, isLoading: true }
        case 'INDIA_NEWS_RECEIVED':
        case 'US_NEWS_RECEIVED':
                return { ...state, news: action.news.articles, isLoading: false }
        default:
            return state;
    }
}

export default reducers