'use client'

import { useSearchParams } from "next/navigation"
import { use } from "react"

export default function BlogId({ params, }: { params: Promise<{ postId: string, slug: string }> }){
  const { postId, slug } = use(params)

  const searchParams = useSearchParams()

  const category = searchParams.get('category')
  const page = searchParams.get('page')

  let globalNewCategory;

  const newSlug = slug.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase())
  if ( category !== null ) {
    const newCategory = category.replace(/IN/g, " ").replace(/\b\w/g, char => char.toUpperCase())
    globalNewCategory = newCategory
  }

  return (
      <div>
        <div className="bg-blue-500 w-full p-4 mb-2 rounded-md">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-100 text-center">{newSlug}</h1>
        </div>
        <div className="text-lg md:text-xl lg-text-2xl p-4 text-gray-900">
          <p>Id: {postId}</p>
          <p>Category: {globalNewCategory}</p>
          <p>Page: {page}</p>
        </div>
        <div className="border-gray-300 border-2 rounded-md text-lg md:text-xl lg:text-2xl p-4">
          <p>Some main text...</p>
        </div>
      </div>
    )
}