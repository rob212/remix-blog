const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

async function seed() {
  await Promise.all(
    getPosts().map(post => {
      return db.post.create({data: post})
    })
  )
}

seed() 


function getPosts() {
  return [
    {
      title: 'Tailwind vs Bootstrap',
      body: 'Both Tailwind and Bootstrap are very popular CSS frameworks. In this article, we will compare them'
    },
    {
      title: 'Learning Remix',
      body: 'Is Remix going to be the next big web framework to learn and become more prevalent that Nextjs?'
    },
    {
      title: 'Software Dev or Test Automation',
      body: 'What is going to be the next few years of my focus going forwards'
    },
    {
      title: 'How to test a React app properly',
      body: 'TestingLibrary and the use of msw to make better mocks of service calls using React. How to do it with examples.'
    }
  ]
}