import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getCategories, getBlogs, postBlog} from './controllers/api';
import Categories from './views/categories';
import Blogs from './views/blogs';
import SpecialBlogs from './views/specialblogs';

function App() {
  const [data, setData] = useState({categories: [], blogs: [], specialblogs: []});

  async function readData() {
    const blogs = await getBlogs();
    const categories = await getCategories();
    const specialblogs = blogs.filter(blog => {return blog.special === true;});
    console.log(specialblogs);
    setData((prev) => {return {...prev, categories, blogs, specialblogs}});
  }

  useEffect(() => {
    readData();
  }, [])

  return (
    <div id="wrapper">
      <header>
        <h2>Travel blog</h2>
      </header>
      <div id="content">
        <nav>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <Categories categories={data.categories} />
        </nav>
        <main>
          <Blogs blogs={data.blogs} />
        </main>
        <aside>
            <h3>Special offers</h3>
            <SpecialBlogs specialblogs={data.specialblogs} />
        </aside>
      </div>
    </div>
  );
}

export default App;