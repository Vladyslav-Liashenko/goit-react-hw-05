import { Link } from 'react-router-dom';

export const BackToLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};