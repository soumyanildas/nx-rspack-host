import { loadRemote } from '@module-federation/runtime';
import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/home';
// @ts-expect-error different type but it works as expected
const RemoteApp = lazy(async () => await loadRemote('mf_remote/App'));

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
          element={<Home />}
        />
        <Route path="/remote/*"
          element={<RemoteApp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
