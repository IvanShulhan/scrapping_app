// src/App.js
import { useState } from 'react';
import { BidCard, Error, Layout, SearchBar } from './components';
import { handleGetId, handleScrapPage } from './services/scrapping';
import { IBidData } from './types/types';
import { REGEXES } from './common/regexes';

type Status = 'idle' | 'loading' | 'success' | 'failed';

function App() {
  const [bidId, setBidId] = useState('');
  const [bidData, setBidData] = useState<IBidData>({} as IBidData);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState(false);

  const handleChangeBidId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setStatus('idle');
    setBidId(e.target.value);
  };

  const handleScrape = async () => {
    try {
      const isValidId = REGEXES.ID.test(bidId);

      if (!isValidId) {
        setError(true);
        return;
      }

      setStatus('loading');
      const id = await handleGetId(bidId);

      const data = await handleScrapPage(id, bidId);

      console.log(data);
      

      if (!data.title.length) {
        setStatus('failed');
        return;
      }

      setBidData(data);
      setStatus('success');
      setBidId('');
    } catch (e) {
      setStatus('failed');
    }
  };

  return (
    <Layout>
      <SearchBar
        value={bidId}
        onChange={handleChangeBidId}
        onSubmit={handleScrape}
        loading={status === 'loading'}
        error={error}
      />
      {status === 'failed' && (
        <p style={{ color: 'red' }}>
          <Error text='Oops! Some trouble while scrapping the Bid' />
        </p>
      )}

      {status === 'success' && <BidCard data={bidData} />}
    </Layout>
  );
}

export default App;
