import React, {Fragment} from 'react';
import {Link, Route, useParams} from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

const DUMY_QUOTES = [
  {id: 'q1', author: 'Miran', text: 'Learning React'},
  {id: 'q2', author: 'Ali', text: 'Learning NextJS'},
  {id: 'q3', author: 'Burcu', text: 'Learning Git'},
  {id: 'q4', author: 'Azat', text: 'Learning Jest'},
];

const QuoteDetail = () => {
  const params = useParams();
  const quoteId = params.quoteId;

  const quote = DUMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No qute found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${quoteId}/comments`} component={Comments} />
    </Fragment>
  );
};

export default QuoteDetail;
