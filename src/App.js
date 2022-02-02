import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Homepage/Home';
import Posts from './components/Posts/Posts';
import PostBlog from './components/WriteBlog/PostBlog';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Reset from './components/ResetPassword/Reset';
import Forgot from './components/ForgotPassword/Forgot'
import MyBlog from './components/MyBlog/MyBlog';
import ViewBlog from './components/ViewBlog/ViewBlog';
import EditBlog from './components/Editblog/EditBlog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/write-blog" element={<PostBlog />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/MyPostedBlogs" element={<MyBlog />} />
        <Route exact path="/forgot/:id" element={<Reset />} />
        <Route exact path="/view/:id" element={<ViewBlog />} />
        <Route exact path="/myBlog/view/:id" element={<ViewBlog />} />
        <Route exact path="/edit-blog/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
