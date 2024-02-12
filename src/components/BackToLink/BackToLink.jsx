import { Link } from 'react-router-dom';

export const BackToLink = ({ to, query, children }) => {

  console.log(to);

  return <Link to={`${to}?query=${query}`}>{children}</Link>;
};