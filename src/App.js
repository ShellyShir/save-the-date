import { Route, Switch} from 'react-router-dom'
import AllDatesPage from './pages/AllDatesPage';
import FavoritesDatesPage from './pages/FavoritesDatesPage';
import NewDatePage from './pages/NewDatePage';
import Layout from './components/components/layout/Layout';

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllDatesPage />
          </Route>
          <Route path="/favorites">
            <FavoritesDatesPage />
          </Route>
          <Route path="/add-new-date">
            <NewDatePage />
          </Route>
        </Switch>  
      </Layout>
  );
}

export default App;
