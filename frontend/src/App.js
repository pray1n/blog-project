import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getCategories, getBlogs, postBlog} from './controllers/api';
import Categories from './views/categories';
import Blogs from './views/blogs';
import SpecialBlogs from './views/specialblogs';
import Blogdetail from './views/blogs_detail';
import Loader from './views/loader';

function App() {
  const [data, setData] = useState({categories: [], blogs: [], specialblogs: []});
  const [isDataLoading, setIsDataLoading] = useState(true);

  async function readData() {
    const blogs = await getBlogs();
    const categories = await getCategories();
    const specialblogs = blogs.filter(blog => {return blog.special === true;});
    const nonspecialblogs = blogs.filter(blog => {return blog.special === false;});
    //const allInclusiveBlogs = categories.filter(categories => {return categories.name === 'All-Inclusive';});

    //console.log(specialblogs);
    setData((prev) => {return {...prev, categories, blogs, nonspecialblogs, specialblogs}});
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
          <Route path='/all-inclusive' element={<Blogs blogs={data.blogs} />} />
          <Route path='/beach-holidays' element={<Blogs blogs={data.blogs} />} />
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