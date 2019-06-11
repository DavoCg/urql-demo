import App from '../components/App';
import { useRouter } from 'next/router';
import Submit from '../components/Submit';
import PostList from '../components/PostList';

export default () => {
  const { query } = useRouter();
  return (
    <App>
      <Submit />
      <PostList />
    </App>
  );
};
