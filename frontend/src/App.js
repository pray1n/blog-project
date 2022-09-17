import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getCategories, getBlogs, postBlog} from './controllers/api';
import Categories from './views/categories';
import Blogs from './views/blogs';

function App() {
  const [data, setData] = useState({categories: [], blogs: []});

  async function readData() {
    const blogs = await getBlogs();
    const categories = await getCategories();
    console.log(blogs);
    console.log(categories);
    setData((prev) => {return {...prev, categories, blogs}});
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
            <section className="special">
                <h4>Special Blog 1</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr ....</p>
            </section>
            <section className="special">
                <h4>Special Blog 2</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr ....</p>
            </section>
            <section className="special">
                <h4>Special Blog 3</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr ....</p>
            </section>
        </aside>
      </div>
    </div>
  );
}

export default App;