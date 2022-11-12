import { Link } from 'react-router-dom';
import { Paths } from 'app/App';

function NotFoundPage() {
  return (
    <div className="wrapper">
      <h1>404</h1>
      This page doesn&apos;t exist. Go <Link to={Paths.home}>home</Link>
    </div>
  );
}

export default NotFoundPage;
