import { Link, redirect, useActionData, json } from "remix"
import {db} from '~/utils/db.server'


function validateTitle(title: string) {
  if (typeof (title) !== 'string' || title.length < 1) {
    return 'Title cannot be blank'
  }
}

function validateBody(body: string) {
  if (typeof (body) !== 'string' || body.length < 10) {
    return 'Body should be a minimum of 10 characters'
  }
}


export const action = async ({request}) => {
  const form = await request.formData()
  const title = form.get('title')
  const body = form.get('body')
  const fields = { title, body }
  
  const fieldErrors = {
    title: validateTitle(title),
    body: validateBody(body)
  }

  // if the field error object has any values set other than undefined then return a status 400 
  if (Object.values(fieldErrors).some(Boolean)) {
    console.log(fieldErrors)
    return json({ fieldErrors, fields }, {status: 400})
  }

  const post = await db.post.create({data: fields})

  return redirect(`/posts/${post.id}`)
}


function NewPost() {
  const actionData = useActionData()

  return (
    <>
      <div className="page-header">
      <h1>New Post</h1>
        <Link to='/posts' className='btn btn-reverse'>
          Back
        </Link>
      </div>
      
      <div className="page-content">
        <form method='POST'>
          <div className="form-control">
          <label htmlFor="title">Title</label>
            <input id='title' type='text' name='title' defaultValue={actionData?.fields?.title}/>
            <div className="error">
              <p>{actionData?.fieldErrors?.title && actionData.fieldErrors.title}</p>
            </div>
          </div>
          <div className="form-control">
          <label htmlFor="body">Body</label>
            <textarea id='body' name='body' defaultValue={actionData?.fields?.body}/>
            <div className="error">
              <p>{actionData?.fieldErrors?.body && actionData.fieldErrors.body}</p>
            </div>
          </div>
          <button type='submit' className='btn btn-block'>Add Post</button>
        </form>
      </div>
    </>
  )
}

export default NewPost