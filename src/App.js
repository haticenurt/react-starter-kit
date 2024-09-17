
import { Route,Routes,Link,NavLink, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Page404 from "./pages/404";
function App(){

  return(
    <>
    
    <BrowserRouter>

    <nav>
    <NavLink to="/">Anasayfa</NavLink><br/>
    <NavLink to="/contact">İletişim</NavLink><br/>
    <NavLink to="/blog">Blog</NavLink><br/>
    </nav>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<BlogLayout/>}>
      <Route index={true} element={<Blog/>}/>
       <Route>path="Blog"</Route>
       <Route path="Categories" element={<Categories/>}/>
       <Route path="Post/:url" element={<Post/>}/>
      
       </Route>
       <Route path="*" element={<Page404/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;