import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mainData } from '../../mockedData/mockedData';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) {
      const element = mainData.find((elt) => elt.id.toString() === id);
      // Redirect to 404 error page if user change id parameter to an undefined one
      if (element === undefined) {
        navigate('/404');
      } else {
        setUser(element);
      }
    }
  }, []);
  return (
    <main>
      {user ? (
        <div key={user.id}>
          <h1>
            Bonjour,
            {user.userInfos.firstName}
          </h1>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </main>
  );
}

export default User;
