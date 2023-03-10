import { connect } from 'react-redux';
import * as actions from '../actions';

function Header({ auth }) {
  function renderContent() {
    if (auth === null) {
      return;
    } else if (auth === false) {
      return <li><a href='/auth/google'>Login With Google</a></li>;
    } else {
      return <li><a href='/api/logout'>Logout</a></li>;
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">
          Emaily
        </a>
        <ul className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Header);
