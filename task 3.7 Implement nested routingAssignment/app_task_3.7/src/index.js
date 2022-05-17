import { createRoot } from "react-dom/client";
import App from "./App";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { userReducer } from "./reducers/userReducer";
import { BrowserRouter } from "react-router-dom";
import { postsReducer } from "./reducers/postsReducer";
import { todolistReducer } from "./reducers/todolistReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  users: userReducer,
  posts: postsReducer,
  todos: todolistReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
