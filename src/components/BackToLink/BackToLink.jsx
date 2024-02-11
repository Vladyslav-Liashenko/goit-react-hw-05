import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackToLink = ({to, children}) => {
  return (
    <div>
      <Link to={to}>
        <HiArrowLeft size="24" />
        {children}
      </Link>
    </div>
  );
};
