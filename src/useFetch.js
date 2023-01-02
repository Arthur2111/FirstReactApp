import { useState, useEffect } from "react";

// custom hooks need to start with use
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // use Effect will run a function whenever the page renders, the function ran will be the function defined in the hook
  // we can call useEffect to do some fetch functions to get Data
  // this reminds me of a mounted hook with a watcher in vue if we apply an array
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data");
          }
          //.json turns a json object into javascript object IMPORTANT it is asynchronus
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);

    // we use an empty dependency array only runs the function after first initial render
    // we can specify when this function is called when a specific value/data changes
    //if we put url inside, now function will only be called when url changes
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
