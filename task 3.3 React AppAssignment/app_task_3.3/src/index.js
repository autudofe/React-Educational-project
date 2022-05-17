import {createRoot} from 'react-dom/client';
import App from './App';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {userReducer} from "./reducers/userReducer";
import {BrowserRouter} from "react-router-dom";
import {postsReducer} from "./reducers/postsReducer";
import {todolistReducer} from "./reducers/todolistReducer";

const reducers = combineReducers({users: userReducer, posts: postsReducer, lists: todolistReducer})

const store = createStore(reducers);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

