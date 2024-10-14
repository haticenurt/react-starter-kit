
import { Route,Routes,Link,NavLink, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Page404 from "./pages/404";
import Profile from "./pages/Profile";
import Login from "./pages/auth/login";
import ToDo from "./pages/blog/ToDo";
import { useTranslation } from "react-i18next";
function App(){
 const {t,i18n}=useTranslation();
 const clickHandle= async lang=>{
  await i18n.changeLanguage(lang)
 }
  return(
    <>
    
    <BrowserRouter>

    <nav>
    <NavLink to="/">Anasayfa</NavLink><br/>
    <NavLink to="/contact">İletişim</NavLink><br/>
    <NavLink to="/blog">Blog</NavLink><br/>
    <NavLink to ="/profile">Profile</NavLink>
    </nav>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<BlogLayout/>}>
      <Route index={true} element={<Blog/>}/>
       
          <Route path="Blog"></Route>
          <Route path="Categories" element={<Categories/>}/>
          <Route path="Post/:url" element={<Post/>}/>
          <Route path="todo" element={<ToDo/>}/>
       </Route>
       <Route path="*" element={<Page404/>}/>
       <Route path="/Profile" element={<privateRoute><Profile/></privateRoute>}/>
       <Route path="/auth/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    <div>
      Aktif dil:{i18n.language}
      <nav>
        <button onClick={()=>{clickHandle('tr')}}>türkçe</button>
        <button onClick={()=>{clickHandle('en')}}>english</button>
      </nav><br/>
     
    </div>
    </>
  );
}
export default App;