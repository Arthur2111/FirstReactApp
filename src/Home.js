import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  useEffect(() => {
    console.log(blogs, isPending, error);
  }, []);

  // we can rename the returned value so that we can be more detailed while being reusable
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div className="loading">Loading....</div>}

      {/* we use && to do conditional rendering here as with && it will check the property on the left if truthy then it will run the property on the right */}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!!!"
          //   handleDelete={handleDelete}
        ></BlogList>
      )}
    </div>
  );
};

export default Home;
