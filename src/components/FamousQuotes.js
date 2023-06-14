import React, { useState, useEffect } from 'react';

const FamousQuotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          headers: {
            'X-Api-Key': 'OJOHmkWoAqsbBjmeUmFoyA==yHzMMITPwxpUa3WY',
          },
        });
        const data = await response.json();
        setData(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (data) {
    return (
      <div className="quotePageDiv">
        <div className="quoteDiv">
          <div>{`"${data.quote}" -- ${data.author}`}</div>
        </div>
      </div>
    );
  }

  return null;
};

export default FamousQuotes;
