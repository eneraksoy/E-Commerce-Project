import { Route, Switch } from "react-router-dom";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <PageContent>
            <HomePage />
          </PageContent>
        </Route>
        <Route path="/shop">
          <PageContent>
            <ShopPage />
          </PageContent>
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
