import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function NotFoundPage() {
  return (
    <p>Cannot find such a page. <Link to={AppRoute.Root}>You can go to start page</Link></p>
  );
}
