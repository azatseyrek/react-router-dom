import {Redirect, Route, Switch} from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';
import NotFound from './components/pages/NotFound';
import QuoteDetail from './components/pages/QuoteDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" component={AllQuotes} exact />
        <Route path="/quotes/:quoteId" component={QuoteDetail} />
        <Route path="/new-quote" component={NewQuote} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
