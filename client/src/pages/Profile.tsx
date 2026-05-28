import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile Page</h1>

      <h2>{user?.name}</h2>

      <h2>{user?.email}</h2>
    </div>
  );
}

export default Profile;