import { Link, useLoaderData } from 'remix'
import {db} from '~/utils/db.server'

type Post = {
  id: number
  title: string
  body: string
}

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      take: 20,
      select: { id: true, title: true, createdAt: true },
      orderBy: {createdAt: 'desc'}
    })
  }
  return data
}

function PostItems() {
  const {posts} = useLoaderData()
  return ( 
    <>
      <div className="page-header">
      <h1>Posts index</h1>
        <Link to='/posts/new' className='btn'>
          New Post
</Link>
      </div>
      <ul className='posts-list'>
       {posts.map(post => (
         <li key={post.id}>
           <Link to={post.id}>
             <h3>{post.title}</h3>
             <p>created: {new Date(post.createdAt).toLocaleDateString()}</p>
           </Link>
         </li>
      ))}
      </ul>
      </>
  )
}

export default PostItems