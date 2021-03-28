import PostCreate from './PostCreate'
import PostList from './PostList'

function App() {
  return (
    <div className="container">
        <h1>Create post</h1>
        <PostCreate />
        <hr />
        <h1>Blog posts</h1>
        <PostList />
    </div>
  );
}

export default App;
