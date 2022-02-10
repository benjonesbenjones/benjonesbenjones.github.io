import logo from './images/logo.svg';
import pic01 from './images/college.png'
import './css/main.css';

function App() {
  return (
    <>
  <title>Benjamin Jones</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=no"
  />
  <link rel="stylesheet" href="css/main.css" />
  <noscript>
    &lt;link rel="stylesheet" href="assets/css/noscript.css" /&gt;
  </noscript>
  {/* Wrapper */}
  <div id="wrapper">
    {/* Header */}
    <header id="header" className="alt">
      <span className="logo">
        <img src={ logo } alt="" className="logo"/>
      </span>
      <h1>Hi, I'm Ben!
      <br />
      I'm a Politics major at Pomona College in Claremont, California. </h1>
      <br />
      <p>  
      </p>
    </header>
    {/* Nav */}
    <nav id="nav">
      <ul>
        <li>
          <a href="#intro" className="active">
            Introduction
          </a>
        </li>
        <li>
          <a href="#first">First Section</a>
        </li>
        <li>
          <a href="#second">Second Section</a>
        </li>
        <li>
          <a href="#cta">Get Started</a>
        </li>
      </ul>
    </nav>
    {/* Main */}
    <div id="main">
      {/* Introduction */}
      <section id="intro" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2>Ipsum sed adipiscing</h2>
            </header>
            <p>
              Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat
              magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor
              tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit
              amet aliquam.
            </p>
            <ul className="actions">
              <li>
                <a href="generic.html" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
          <span className="image">
            <img src={ pic01 } alt="" />
          </span>
        </div>
      </section>
      {/* First Section */}
      <section id="first" className="main special">
        <header className="major">
          <h2>Magna veroeros</h2>
        </header>
        <ul className="features">
          <li>
            <span className="icon solid major style1 fa-code" />
            <h3>Ipsum consequat</h3>
            <p>
              Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
              consequat tempus veroeros sed consequat.
            </p>
          </li>
          <li>
            <span className="icon major style3 fa-copy" />
            <h3>Amed sed feugiat</h3>
            <p>
              Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
              consequat tempus veroeros sed consequat.
            </p>
          </li>
          <li>
            <span className="icon major style5 fa-gem" />
            <h3>Dolor nullam</h3>
            <p>
              Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
              consequat tempus veroeros sed consequat.
            </p>
          </li>
        </ul>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="generic.html" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </footer>
      </section>
      {/* Second Section */}
      <section id="second" className="main special">
        <header className="major">
          <h2>Ipsum consequat</h2>
          <p>
            Donec imperdiet consequat consequat. Suspendisse feugiat congue
            <br />
            posuere. Nulla massa urna, fermentum eget quam aliquet.
          </p>
        </header>
        <ul className="statistics">
          <li className="style1">
            <span className="icon solid fa-code-branch" />
            <strong>5,120</strong> Etiam
          </li>
          <li className="style2">
            <span className="icon fa-folder-open" />
            <strong>8,192</strong> Magna
          </li>
          <li className="style3">
            <span className="icon solid fa-signal" />
            <strong>2,048</strong> Tempus
          </li>
          <li className="style4">
            <span className="icon solid fa-laptop" />
            <strong>4,096</strong> Aliquam
          </li>
          <li className="style5">
            <span className="icon fa-gem" />
            <strong>1,024</strong> Nullam
          </li>
        </ul>
        <p className="content">
          Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu
          arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu
          sit amet, fermentum pellentesque et purus. Integer maximus varius
          lorem, sed convallis diam accumsan sed. Etiam porttitor placerat
          sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut
          non nisl a mollis est efficitur vestibulum. Integer eget purus nec
          nulla mattis et accumsan ut magna libero. Morbi auctor iaculis
          porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent
          eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur
          lacinia.
        </p>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="generic.html" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </footer>
      </section>
      {/* Get Started */}
      <section id="cta" className="main special">
        <header className="major">
          <h2>Congue imperdiet</h2>
          <p>
            Donec imperdiet consequat consequat. Suspendisse feugiat congue
            <br />
            posuere. Nulla massa urna, fermentum eget quam aliquet.
          </p>
        </header>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="generic.html" className="button primary">
                Get Started
              </a>
            </li>
            <li>
              <a href="generic.html" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </footer>
      </section>
    </div>
    {/* Footer */}
    <footer id="footer">
      <section>
        <h2>More information and work</h2>
        <p>
          I'm currently open to internship and job offers. Send me an email or Twitter DM if you'd like
          to work with me!
        </p>
      </section>
      <section>
        <h2>Contact me!</h2>
        <dl className="alt">
          <dt>Address</dt>
          <dd>2908 Carriage Way • West Linn, OR 97068 • USA</dd>
          <dt>Phone</dt>
          <dd>(503) 319-9014</dd>
          <dt>Email</dt>
          <dd>
            <a href="mailto:bdja2018@mymail.pomona.edu">bdja2018@mymail.pomona.edu</a>
          </dd>
        </dl>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter alt">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="" className="icon brands fa-github alt">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </section>
      <p className="copyright">
        built with &#9829; by <a href='https://www.github.com/benjonesbenjones'>benjamin jones</a>
      </p>
    </footer>
  </div>
  {/* Scripts */}
</>

  );
}

export default App;
