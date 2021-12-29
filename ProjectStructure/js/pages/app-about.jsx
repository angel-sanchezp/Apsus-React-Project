export function About(props) {

    function onGoShop(){
        props.history.push('/book')
    }

    return (
        <section className="about">
            <img  className="img-about" src="./img/about-img.jpg"/>
            <p>Welcome!, we are a little book shop... provident reprehenderit eaque similique quia nemo commodi 
                et laboriosam ab est sunt dolor velit repellat illum placeat.</p>
            <h1>join with us... Reading Lovers!</h1>
            <button className="btn back-btn" onClick={onGoShop}>Go back</button>
        </section>
    )
}
