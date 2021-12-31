import { Home } from './ProjectStructure/js/pages/app-home.jsx'
import { About } from './ProjectStructure/js/pages/app-about.jsx'
// BOOKSHOP
import {BookDetails} from './ProjectStructure/js/apps/book/pages/BookDetails.jsx'
import { BookApp } from './ProjectStructure/js/apps/book/pages/BookApp.jsx'
// KEEPAPP
import { KeepApp } from './ProjectStructure/js/apps/keep/keepApp.jsx'
// MAILSAPP
import { MailApp } from './ProjectStructure/js/apps/mail/pages/MailApp.jsx'
import { MailDetails } from './ProjectStructure/js/apps/mail/pages/MailDetails.jsx'
// GENERAL COMPONENTS
import { AppHeader } from './ProjectStructure/js/cmps/AppHeader.jsx'
import { UserMsg } from './ProjectStructure/js/cmps/user-msg.jsx'
import { AppFooter } from './ProjectStructure/js/cmps/AppFooter.jsx'
// RAUTERING
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return (
    <Router >
      <header className="main-header">
       <AppHeader/>
      </header>
      <section className="app" >
        <main>
          <Switch>
            <Route component={MailDetails} path="/mail/details/:mailId" />
            <Route component={BookDetails} path="/book/:bookId" />
            <Route component={BookApp} path="/book" />
            <Route component={KeepApp} path="/notes" />
            <Route component={MailApp} path="/mail" />
            <Route component={About} path="/about" />
            <Route component={Home} path="/" />
          </Switch>
        </main>
      </section>
     <UserMsg/>
     <AppFooter/>
    </Router>
  );
}
