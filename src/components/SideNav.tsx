
export default function SideNav() {

  const toggleNav = () => {
    console.log('click nav');
  }
  return (
    <div className="container-fluid">
      <div
        className="col-xs-12 col-sm-4 col-md-4 col-lg-3 side-bar"
        id="side-nav"
      >
        <div className="name">
          <h1>&lt;philip.wisner&gt;</h1>
          <h2>web developer</h2>
        </div>
        <ul className="list">
          <li><a href="/skills">Skills</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/websites">Websites</a></li>
          <li><a href="/apps" id="active">`{`Apps`}`</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/photography">Photography</a></li>
          <li><a href="/design">Design</a></li>
          <li><a href="/travel">Travel</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <ul className="social">
          <li>
            <a href="https://github.com/philipwisner" target="_blank"
            ><i className="fa fa-github fa-2x" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/philipwisner" target="_blank"
            ><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
        <ul className="about-contact">
          <li><a href="/about">about</a></li>
          <li><a href="/contact">contact</a></li>
        </ul>
      </div>
    </div>
  );
}
