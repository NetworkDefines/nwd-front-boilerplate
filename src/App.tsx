import React, { ReactElement, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { userState } from './store/atoms';

const serverURL = process.env.REACT_APP_SERVER_URL;

function App(): ReactElement {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useRecoilState(userState);

  const getUser = async () => {
    try {
      const response = await fetch(serverURL + `/api/user`, {
        credentials: 'include',
      });
      const jsonResponse = await response.json();
      const result = jsonResponse.data;
      setUser(result);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  useEffect(() => {
    (async () => {
      const promisedGetUser = getUser();
      await Promise.all([promisedGetUser]);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      )}
    </>
  );
}

export default App;
