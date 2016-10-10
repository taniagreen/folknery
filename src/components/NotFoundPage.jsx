import React from 'react';
import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <div>
      <h4>eslint
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
}

export default NotFoundPage;
