import { Link } from 'react-router-dom';

export const BackToLink = ({ to, children }) => {

  console.log(to);

  return <Link to={to}>{children}</Link>;
};