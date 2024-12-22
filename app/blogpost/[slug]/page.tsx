
import React from 'react'

const Product =  async({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const slug = (await params).slug
  console.log(slug)
  return (
    <div>
      Products: {slug}
    </div>
  )
}

export default Product
