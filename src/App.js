import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import BehaviorsPage from './pages/BehaviorsPage';
import CitationsPage from './pages/CitationsPage';
import ContactPage from './pages/ContactPage';
import FactsPage from './pages/FactsPage';
import HomePage from './pages/HomePage';
import SubspeciesPage from './pages/SubspeciesPage';
import WarmingPage from './pages/WarmingPage';
import './App.css';

const pageComponents = {
  home: HomePage,
  facts: FactsPage,
  behaviors: BehaviorsPage,
  warming: WarmingPage,
  subspecies: SubspeciesPage,
  contact: ContactPage,
  citations: CitationsPage,
};

const pageTitles = {
  home: 'Sharks',
  facts: 'Shark Facts',
  behaviors: 'Shark Behaviors',
  warming: 'Poaching and Global Warming',
  subspecies: 'Shark Subspecies',
  contact: 'Contact',
  citations: 'Citations',
};

function getPageFromHash() {
  const page = window.location.hash.slice(1);
  return Object.hasOwn(pageComponents, page) ? page : 'home';
}

function App() {
  const [page, setPage] = useState(getPageFromHash);
  const Page = pageComponents[page];

  useEffect(() => {
    document.title = pageTitles[page];
  }, [page]);

  useEffect(() => {
    function handleHashChange() {
      const nextPage = getPageFromHash();
      setPage(nextPage);
      if (nextPage !== page) window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [page]);

  return (
    <div id="content" className={page === 'contact' ? 'contact-content' : ''}>
      <a className="skip" href="#main-content">
        Skip to main content
      </a>
      {page !== 'contact' && <Header currentPage={page} />}
      <Page />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
