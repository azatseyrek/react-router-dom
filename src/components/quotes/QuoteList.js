import {Fragment} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// useLocation query parametremizi okumak icin kullanilacak. Burda sort(siralama) islemi yapacagiz. asagida changeSortingHandlerda query ekledik ve bu query i alip ona gore sorting yapacagiz.
// useLocation bulundugumuz  sayfa hakkinda bilgileri almamizi saglar ({
//     "pathname": "/quotes",
//     "search": "",
//     "hash": "",
//     "key": "ef4p7j"
// })

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // Yapilanlarin ozeti : Burasi Cok onemli bir bolum. Biz burda bir siralama islemi yapmak istiyoruz bunun icin ilk olarak query ayarlamasi yapmak icin history metodunun kullanarak biur query ekledik(asc). sonra bu quere ulasmak icin react - router-dom da bulunan useLocation i kullandik burda amacimiz sadece location.search icerisindeki parametreye ulasmak. cunku useLcation bulundugum sayfanin urline ait tum bilgileri bize veriyor. Aldigimiz bu parametreyi javascripte bulunan  new URLSearchParams `a parametre olarak verip oyle bir query var mi yok mu anliyoruz. Daha sonra bunu ornegini buton ismini ve query yi dinamik hale getirmek icin kullaniyoruz

  // quoteleri siralama yapmak icinbasit bir helper siralama fonksiyonu yazalim

  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? ' Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {/* {props.quotes.map((quote) => ( sort icin sortedQuotesleri aliyoruz */}
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
