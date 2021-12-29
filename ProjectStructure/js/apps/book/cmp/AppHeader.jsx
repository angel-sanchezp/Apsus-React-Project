
const { NavLink, withRouter } = ReactRouterDOM;

class _AppHeader extends React.Component {
  render() {
    return (
      <header className="app-header">
        <img onClick={() => this.props.history.push('/')} className="logo-img-header" src="./img/logo.png"/>
        <nav className="main-nav">
          <NavLink activeClassName="my-active" to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/book">Contact Us</NavLink>
        </nav>
      </header>
    );
  }
}

export const AppHeader = withRouter(_AppHeader);