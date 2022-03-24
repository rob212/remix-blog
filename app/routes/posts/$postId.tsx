import { useParams } from 'remix'

function Post() {
const params = useParams()

  return (
    <div><h1>{ params.postId }</h1></div>
  )
}

export default Post