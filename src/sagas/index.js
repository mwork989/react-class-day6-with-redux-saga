import axios  from "axios"
import { put , takeLatest, all } from 'redux-saga/effects';

//basically sagas help in splitting the api section into a different file structure
// so state management is pure and it doent create dependency on api call



//worker sagas does the actual api call and their by trigger secondary actions
function* fetchLatestIndiaNews(){
    const url =  'https://newsapi.org/v2/top-headlines?country=in&apiKey=362d5cd20958413dbd382057cd77b44f';
    
    const newsRecords  = yield axios.get(url).then(response=>response)
    yield put({type:"INDIA_NEWS_RECEIVED", news:newsRecords.data})
}

function* fetchLatestUSNews(){
    const url =  'https://newsapi.org/v2/top-headlines?country=us&apiKey=362d5cd20958413dbd382057cd77b44f';
    
    const newsRecords  = yield axios.get(url).then(response=>response)
    yield put({type:"US_NEWS_RECEIVED", news:newsRecords.data})
}


// watcher saga
function* actionWatcher(){
    yield takeLatest('GET_INDIA_LATEST_NEWS', fetchLatestIndiaNews)
    yield takeLatest('GET_US_LATEST_NEWS', fetchLatestUSNews)
}

export default function* rootSaga(){
    yield all([actionWatcher()])
}


//A generator function is the same as a normal function, but whenever it needs to generate a value it uses the 'yield' keyword rather than 'return'.The 'yield' keyword halts the function execution and sends a value back to the caller.

// Async workflow in js
// callbacks
// promises , obseravbles 
// async await
// generator function   (sagas use generator functions)