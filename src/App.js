import React, { Suspense } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
// import QuotesDetail from "./pages/QuoteDetail";
// import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
// import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuotesDetail = React.lazy(() => import("./pages/QuoteDetail")); 
const NotFound = React.lazy(()=>import("./pages/NotFound"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />{" "}
          </div>
        }
      >
        <Switch>
          <Route path="/guestbook" exact>
            <Redirect to="/guestbook/quotes" />
          </Route>
          <Route path="/guestbook/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/guestbook/quotes/:quoteId">
            <QuotesDetail />
          </Route>
          <Route path="/guestbook/new-quote">
            <NewQuote />
          </Route>
          <Route path="/guestbook/*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
