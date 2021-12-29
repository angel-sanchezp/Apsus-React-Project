// import { eventBusService } from "../services/event-bus.service.js"


const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {

    state = {
        carsCount: 0
    }

    removeEventBus

    // componentDidMount() {
    //     this.removeEventBus = eventBusService.on('cars-count', (carsCount) => {
    //         this.setState({ carsCount })
    //     })
    // }

    // componentWillUnmount() {
    //     this.removeEventBus()
    // }

    render() {
        return (
            <header className="app-header" >
                <h1 onClick={() => this.props.history.push('/')}>Apsus App</h1>
                <nav className="main-nav">
                    <NavLink activeClassName="my-active" exact to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/book">Book</NavLink>
                    <NavLink to="/mail">Mail</NavLink>
                    <NavLink to="/notes">Notes</NavLink>
                </nav>
            </header>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)