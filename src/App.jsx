import { Route, Switch } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <PageContent>
            <HomePage />
          </PageContent>
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
