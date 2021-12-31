export function About(props) {

    // function onGoShop(){
    //     props.history.push('/book')
    // }

    return (
        <section className="about-app">
            <div className="card-about-app">
                <img src="../../img/angel1.jpeg" alt="angel" style={{width: "100%"}}/>
                <h1>Angelica Serebnitsky</h1>
                <p className="title-about-app">Technical Software & Full Stack Developer Student</p>
                <p>Hi! I'm Angelica S...</p>
                <div style={{margin: "24px 0"}}>
                    <a className="a-about-app" href="#"><i className="fa fa-dribbble"></i></a>
                    <a className="a-about-app" href="#"><i className="fa fa-twitter-in"></i></a>
                    <a className="a-about-app" href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a className="a-about-app" href="#"><i className="fa-brands fa-facebook"></i></a>
                </div>
                <p><button className="btn-about-app">Contact</button></p>
            </div>
            <p>welcome to aou Apsus App... we work with JS/CSS/REACT</p>
            <div className="card-about-app">
                <img src="../../img/liat.jpeg" alt="liat" style={{width: "100%"}}/>
                <h1>Liat Biton</h1>
                <p className="title-about-app">Full Stack Developer Student</p>
                <p>Hi! I'm Liat Biton...</p>
                <div style={{margin: "24px 0"}}>
                    <a className="a-about-app" href="#"><i className="fa fa-dribbble"></i></a>
                    <a className="a-about-app" href="#"><i className="fa fa-twitter"></i></a>
                    <a className="a-about-app" href="#"><i className="fa fa-linkedin"></i></a>
                    <a className="a-about-app" href="#"><i className="fa fa-facebook"></i></a>
                </div>
                <p><button className="btn-about-app">Contact</button></p>
            </div>
        </section>
    )
}

