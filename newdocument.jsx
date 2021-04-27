var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="device-width, initial-scale=1.0" />
        <title>Document</title> 
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="big-container">
          <div className="container">
            <header>
              <div className="logo">
                <h1> </h1>
              </div>
              <nav>
                <ul>
                  <li> <a href="#">HOME</a></li>
                  <li> <a href="#">ABOUT</a></li>
                  <li> <a href="#">CONTACT</a></li>
                  <li> <a href="#">BLOG</a></li>
                  <li> <a href="#" className="active">GET STARTED</a></li>
                </ul>
                <form>
                  <input type="text" name="srch" id="srch" required placeholder="Enter your search" />
                  <button type="submit"><i className="fa fa-search" /></button>
                </form>
              </nav>
            </header>
            <section>
              <h2>EFFECT OF COVID-19 ON AIR TRAVEL</h2>
              <a href="#" className="active">Get started</a>
            </section>
            <footer>
              <h2>About us</h2>
              <p>write some text</p>
              <h3>
                Follow us on social media
              </h3>
              <div className="row">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-instagram" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
            </footer>
            <video src="videoplayback.webm" autoPlay muted loop />
          </div>
        </div>
      </div>
    );
  }
});