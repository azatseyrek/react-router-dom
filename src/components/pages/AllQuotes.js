import QuoteList from "../quotes/QuoteList";

const DUMY_QUOTES = [
  {id: 'q1', author: 'Miran', text: 'Learning React'},
  {id: 'q2', author: 'Ali', text: 'Learning NextJS'},
  {id: 'q3', author: 'Burcu', text: 'Learning Git'},
  {id: 'q4', author: 'Azat', text: 'Learning Jest'},
];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMY_QUOTES}/>
  )
};

export default AllQuotes;
