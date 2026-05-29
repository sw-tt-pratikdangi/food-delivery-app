import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  return (
    <div className='max-w-4xl mx-auto py-8 px-4'>
      <h1 className='text-3xl font-bold mb-6'>{user?.name}'s Profile</h1>

      <h2 className=''>{user?.name}</h2>

      <h2>{user?.email}</h2>
    </div>
  );
}

export default Profile;