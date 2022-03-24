import { Link, useLoaderData } from 'remix'

type Post = {
  id: number,
  title: string,
  body: string
}

export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: 'Post 1', body: 'This is a test post 1' },
      { id: 2, title: 'Post 2', body: 'This is a test post 2' },
      {id: 3, title: 'Post 3', body: 'This is a test post 3'}
    ]
  }
  return data
}

function PostItems() {

  const {posts} = useLoaderData()
  return ( 
    <div>
      <h1>Posts index</h1>
      <ul className='posts-list'>
       {posts.map(post => (
         <li key={post.id}><Link to={post.id}>{ post.body}</Link></li>
      ))}
      </ul>
    </div>
  )
}

export default PostItems