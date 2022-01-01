import { AppFooter } from '../cmps/AppFooter.jsx'
const { Link } = ReactRouterDOM

export function Home() {
    return (
        <section className="home-app">
            <img src="../../img/logo.jpg"/>
            <h1>Welcome to our Apsus App</h1>
            <p>All You Need in One App!</p>
            <AppFooter/>
        </section>
    )
}