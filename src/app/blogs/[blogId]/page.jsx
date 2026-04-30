import Link from 'next/link';
import React from 'react';

   const blogs=[
  {
    "id": 1,
    "title": "Getting Started with JavaScript",
    "author": "John Doe",
    "date": "2026-01-15",
    "category": "Programming",
    "content": "JavaScript is a versatile language used for web development. In this blog, we explore the basics and how to get started.",
    "tags": ["javascript", "web development", "coding"],
    "imageUrl": "https://example.com/images/js-blog.jpg"
  },
  {
    "id": 2,
    "title": "10 Tips for a Healthy Lifestyle",
    "author": "Sarah Smith",
    "date": "2026-02-10",
    "category": "Health",
    "content": "Maintaining a healthy lifestyle doesn't have to be complicated. Here are 10 simple tips to improve your daily routine.",
    "tags": ["health", "lifestyle", "wellness"],
    "imageUrl": "https://example.com/images/health-blog.jpg"
  },
  {
    "id": 3,
    "title": "Top Travel Destinations in 2026",
    "author": "Emily Johnson",
    "date": "2026-03-05",
    "category": "Travel",
    "content": "Discover the most exciting travel destinations to visit in 2026, from hidden gems to popular hotspots.",
    "tags": ["travel", "destinations", "adventure"],
    "imageUrl": "https://example.com/images/travel-blog.jpg"
  },
  {
    "id": 4,
    "title": "Understanding Artificial Intelligence",
    "author": "Michael Lee",
    "date": "2026-04-01",
    "category": "Technology",
    "content": "Artificial Intelligence is transforming industries. Learn the fundamentals and how AI is shaping the future.",
    "tags": ["AI", "technology", "innovation"],
    "imageUrl": "https://example.com/images/ai-blog.jpg"
  }
]


const BlogsDetails = async ({params}) => {
    const {blogId} = await params;
    const blog=blogs.find((blog)=>blog.id === Number(blogId))

    console.log("show me details",blog);
    return (
        <div>
            <h2 className='text-2xl text-center'>Blogs details comming soon</h2>
            {
                blog && <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-2'>{blog.title} </h1>
                    <p>{blog.content} </p>
                    <button className='btn btn-primary'>
                        <Link href='/blogs' >back to home</Link>
                    </button>
                </div>
            }
        </div>
    );
};

export default BlogsDetails;