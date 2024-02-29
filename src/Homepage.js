import { useState } from 'react';
import BlogList from './BlogList';

const Homepage = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'pranav', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'sagar', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'john', id: 3 }
      ])

    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="All Blogs"/>
      </div>
     );
}
 
export default Homepage;