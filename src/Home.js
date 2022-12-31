import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("mario");

//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter((blog) => blog.id != id);
//     setBlogs(newBlogs);
//   };

  // use Effect will run a function whenever the page renders, the function ran will be the function defined in the hook
  // we can call useEffect to do some fetch functions to get Data
  // this reminds me of a mounted hook with a watcher in vue if we apply an array
  useEffect(() => {
    console.log("useEffect ran");
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        //.json turns a json object into javascript object IMPORTANT it is asynchronus
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
    // we use an empty dependency array only runs the function after first initial render
    // we can specify when this function is called when a specific value/data changes
    //if we put name inside now function will only be called when name changes
  }, []);

  return (
    <div className="home">
        {/* we use && to do conditional rendering here as with && it will check the property on the left if truthy then it will run the property on the right */}
      { blogs &&
        <BlogList
          blogs={blogs}
          title="All Blogs!!!"
        //   handleDelete={handleDelete}
        ></BlogList>
      }
    </div>
  );
};

export default Home;
