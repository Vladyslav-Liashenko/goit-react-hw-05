import { getReviews } from '../Services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { ErrorMassage } from '../ErrorMassage/ErrorMassage';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviewsData, setMovieReviewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews(movieId);
        if (data && data.results) {
          setLoading(true);
          setMovieReviewsData(data.results);
        } else {
          setMovieReviewsData([]);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  console.log(movieReviewsData);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {movieReviewsData && (
        <div>
          <ul>
            {movieReviewsData.map(review => (
              <li key={review.id}>
                <h2> {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default MovieReviews;