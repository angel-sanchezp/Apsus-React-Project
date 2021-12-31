const { Link } = ReactRouterDOM

export function About(props) {

    // function onGoShop(){
    //     props.history.push('/book')
    // }

    return (
        <section className="about-app">
            <div className="card-about-app">
                <img src="../../img/angel1.jpeg" alt="angel" style={{width: "100%"}}/>
                <div className="card-about-txt">
                    <h1>Angelica Serebnitsky</h1>
                    <p className="title-about-app">Technical Software & Full Stack Developer Student</p>
                    <p>Hi! I'm Angelica Serebnitsky</p>
                    <div style={{margin: "24px 0"}}>
                        <a href="https://www.linkedin.com/in/angelica-serebnitzki-165153192/"><img src="../../img/icons/linkdin.png" className="linkdin-icon"/></a>
                        <a href="https://github.com/angel-sanchezp"><img src="../../img/icons/github-icon.png" className="github-icon"/></a>
                    </div>
                </div>
                   <a href="mailto: angelsa9292@gmail.com" ><button className="btn-about-app">Contact me</button></a>
            </div>
            <p>welcome to our Apsus App... we work with JS/CSS/REACT</p>
            <div className="card-about-app">
                <img src="../../img/liat.png" alt="liat" className = "liat-img"/>
                {/* <div className="about-txt-section"> */}
                    <h1>Liat Biton</h1>
                    <p className="title-about-app">Full Stack Developer Student<br></br><br></br></p>
                    <p>Hi! I'm Liat Biton</p>
                    <div style={{margin: "24px 0"}}>
                        <a href="https://www.linkedin.com/in/liat-biton-486923186/"><img src="../../img/icons/linkdin.png" className="linkdin-icon"/></a>
                        <a href="https://github.com/LiatBiton"><img src="../../img/icons/github-icon.png" className="github-icon"/></a>
                    {/* </div> */}
                    </div>
                <a href="mailto: liatbiton7@gmail.com" ><button className="btn-about-app">Contact me</button></a>
            </div>
        </section>
    )
}

