import { Home } from './ProjectStructure/js/pages/app-home.jsx'
import { About } from './ProjectStructure/js/pages/app-about.jsx'
import { BookApp } from './ProjectStructure/js/apps/book/pages/BookApp.jsx'

// import {RenderBookApp} from './ProjectStructure/js/apps/book/RenderBookApp.jsx'


import { AppHeader } from './ProjectStructure/js/cmps/AppHeader.jsx'

// import { UserMessage } from './cmp/UserMessage.jsx'



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

          <h1>welcome </h1>
          <Switch>
            <Route component={BookApp} path="/book" />
            <Route component={About} path="/about" />
            <Route component={Home} path="/" />
          </Switch>
        </main>
      </section>
     {/* <UserMessage/> */}
    </Router>
  );
}
