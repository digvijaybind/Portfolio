import Login from "../components/login/Login";
import styled from "styled-components";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../store/rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

const Container = styled.div``;

export default function Home() {
  return (
    <Container>
      <Provider store={store}>
        <Login />
      </Provider>
    </Container>
  );
}
