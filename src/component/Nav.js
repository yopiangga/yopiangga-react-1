
import '../assets/css/css-reset.css';
import '../assets/scss/style.css';

function Nav() {
  return (
    <nav>
      <div className="content">
        <div className="left">
          <div className="logo">
            <h2>Valco Inc</h2>
          </div>
        </div>
        <div className="center">
          <div className="menu">
            <ul>
              <a className="active"><li>Home</li><hr></hr></a>
              <a><li>New Arrival</li><hr></hr></a>
              <a><li>Accessories</li><hr></hr></a>
              <a><li>Promo</li><hr></hr></a>
              <a><li>Contact</li><hr></hr></a>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="button">
            <button className="btn-login">Log In</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Nav;
