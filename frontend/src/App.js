import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {getCategories, getBlogs, postBlog} from './controllers/api';

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
          <ul>
            <li><a href="#">Kategorie 1</a>
                <ul className="dropdown" aria-label="submenu">
                    <li className="active"><a href="#">Blog 1</a></li>
                    <li><a href="#">Blog 2</a></li>
                </ul>
            </li>
            <li><a href="#">Kategorie 2</a>
                <ul className="dropdown" aria-label="submenu">
                    <li className="active"><a href="#">Blog 1</a></li>
                    <li><a href="#">Blog 2</a></li>
                    <li><a href="#">Blog 3</a></li>
                </ul>
            </li>
            <li><a href="#">Kategorie 3</a>
                <ul className="dropdown" aria-label="submenu">
                    <li className="active"><a href="#">Blog 1</a></li>
                    <li><a href="#">Blog 2</a></li>
                    <li><a href="#">Blog 3</a></li>
                </ul>
            </li>
            <li><a href="#">Kategorie 4</a>
                <ul className="dropdown" aria-label="submenu">
                    <li className="active"><a href="#">Blog 1</a></li>
                    <li><a href="#">Blog 2</a></li>
                    <li><a href="#">Blog 3</a></li>
                </ul>
            </li>
          </ul>
        </nav>
        <main>
          <section className="preview">
              <h3>Blog 1</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <a href="#">Read more</a>
          </section>
          <section className="preview">
              <h3>Blog 2</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <a href="#">Read more</a>
          </section>
          <section className="preview">
              <h3>Blog 3</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <a href="#">Read more</a>
          </section>
          <section className="preview">
              <h3>Blog 4</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <a href="#">Read more</a>
          </section>
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