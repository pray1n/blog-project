import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getCategories, getBlogs, postBlog} from './controllers/api';
import Categories from './views/categories';
import Blogs from './views/blogs';
import SpecialBlogs from './views/specialblogs';
import AllInclusiveBlogs from './views/beachHolidaysBlogs';
import BeachHolidaysBlogs from './views/beachHolidaysBlogs';

import Blogdetail from './views/blogs_detail';
import Loader from './views/loader';


function App() {
  const [data, setData] = useState({categories: [], blogs: [], specialblogs: [],allInclusiveBlogs: []});
  const [isDataLoading, setIsDataLoading] = useState(true);

  async function readData() {
    const blogs = await getBlogs();
    const categories = await getCategories();
    const specialblogs = blogs.filter(blog => {return blog.special === true;});
    const nonspecialblogs = blogs.filter(blog => {return blog.special === false;});
    const allInclusiveBlogs = blogs.filter(blog => {return blog.category_name === "all-inclusive";});
    const beachHolidaysBlogs = blogs.filter(blog => {return blog.category_name === "beach-holidays";});

    
    setData((prev) => {return {...prev, categories, blogs, nonspecialblogs, specialblogs, allInclusiveBlogs, beachHolidaysBlogs}});
    if(data)
      setIsDataLoading(false);
  }

  useEffect(() => {
    readData();
  }, [])

  return isDataLoading ? (
    <Loader />
  ) : (
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
        <Routes>
          <Route path='/all-inclusive' element={<AllInclusiveBlogs allInclusiveBlogs={data.allInclusiveBlogs} />} />
          <Route path='/beach-holidays' element={<BeachHolidaysBlogs blogs={data.beachHolidaysBlogs} />} />
          <Route path='/city-tours' element={<Blogs blogs={data.blogs} />} />
          <Route path='/' element={<Blogs blogs={data.nonspecialblogs} />} />
          <Route path="/:id" element={<Blogdetail blogs={data.blogs} />} />
        </Routes>
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