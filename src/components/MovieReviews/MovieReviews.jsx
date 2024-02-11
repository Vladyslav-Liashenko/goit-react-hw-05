import { getReviews } from '../Services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviewsData, setMovieReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews(movieId);
        if (data && data.results) {
          setMovieReviewsData(data.results);
        } else {
          setMovieReviewsData([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("This didn't work.");
        throw error;
      }
    };
    fetchData();
  }, [movieId]);
  console.log(movieReviewsData);

  if (loading) return <div>Loading cast data...</div>;

  return (
    <div>
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
      ;
    </div>
  );
};
