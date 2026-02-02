import React, { useEffect, useState } from 'react'
import Table from './components/Table.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsfetch } from './redux/action.js'

const App = () => {
//  const [posts, setPosts] = useState([]);
//  const [loading, setLoading] = useState(false);
//  const [error, setError] = useState(""); 
 
 const dispatch = useDispatch();
 const posts = useSelector((state) => { 
//   console.log(state.myFirstreducer, 'state')
  return state.myFirstReducer.posts;
});
const loading = useSelector((state) => state.myFirstReducer.loading);
const error = useSelector((state) => state.myFirstReducer.error);

console.log(posts, 'posts from redux store');
  useEffect(() => { 
    dispatch( getPostsfetch() );
  }, [dispatch]);


  // useEffect(() => {
  //   console.log(posts);
  // },[posts]);


  return (
    <div>
      App
      <p>Hello World</p>
      <Table posts={posts} />
    </div>
  )
}

export default App