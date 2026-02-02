import React from 'react'
import '../styles/table.css'


const Table = (props) => {
  return (
    <div>
        <table className='my-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {props.posts.map((post, index) => 
                    <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Table