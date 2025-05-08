import { Link } from '@tanstack/react-router';
import { useDeletePostMutation, useGetPostsQuery } from '../features/api/apiSlice';

const Home = () => {
  const { data, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User List</h2>
      <Link to="/add">Add New User</Link>
      <ul>
        {data?.users?.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
            <button onClick={() => deletePost(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
