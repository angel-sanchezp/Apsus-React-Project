import { BookApp } from './pages/BookApp.jsx'
import { BookDetails } from './pages/BookDetails.jsx'


import { AppHeader } from './cmp/AppHeader.jsx'
import { UserMessage } from './cmp/UserMessage.jsx'


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function RenderBookApp() {
  return (
    <Router >
      <header className="main-header">
       <AppHeader/>
      </header>
      <section className="app" >
        <main>
          <Switch>
            <Route component={BookDetails} path="/book/:bookId" />
            <Route component={BookApp} path="/book" />
          </Switch>
        </main>
      </section>
     <UserMessage/>
    </Router>
  );
}
