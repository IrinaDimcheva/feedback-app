import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import Payments from './Payments';

function Header({ auth }) {
  function renderContent() {
    if (auth === null) {
      return;
    } else if (auth === false) {
      return <li><a href="/auth/google">Login With Google</a></li>;
    } else {
      return [
        <li key="1"><Payments /></li>,
        <li key="2"><a href="/api/logout">Logout</a></li>
      ];
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={auth ? '/surveys' : '/'}
          className="left brand-logo"
        >
          Emaily
        </Link>
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

export default connect(mapStateToProps)(Header);
