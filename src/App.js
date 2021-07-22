import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Theme from 'theme/Theme';
import routes from 'routes';
import GlobalStyles from 'theme/GlobalStyle';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route path={routes.home} exact></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
