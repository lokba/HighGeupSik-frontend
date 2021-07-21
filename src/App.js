import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './theme/GlobalStyle';
import Theme from './theme/Theme';
import routes from './routes';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            Hello
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
