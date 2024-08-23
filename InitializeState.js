import React from "react";

function InitializeState() {
  const [post, setPost] = React.useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  // here we will get an error message that name is no defined
  // it is because the callback function inside the useEffect method will be called only after
  // the component has been rendered and mounted to the DOM.
  // So, before the component is rendered, we are trying to access a property called name on post which is not defined.
  // To fix this error, we need to define the initial state of post before using it in the useEffect callback function.

  // const [post, setPost] = React.useState({name: '', age: ''})
  // useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/posts/1')
  //        .then(response => response.json())
  //        .then(data => setPost(data))
  // }, [])

  // return (
  //     <div>
  //         <h1>{post?.name}</h1>
  //         <h1>{post?.age}</h1>
  //     </div>
  // )

  // we could do this but a cleaner solution would be use somekind of loading state
  // means not load anything until we get data from the api server

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <h1>{post.name}</h1>
          <h1>{post.age}</h1>
        </>
      )}
    </div>
  );
}

export default InitializeState;
