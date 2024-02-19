import React, { useState } from 'react'
import './image.scss'
import product1Thumbnail from '../../../assets/image-product-1-thumbnail.jpg'
import product2Thumbnail from '../../../assets/image-product-2-thumbnail.jpg'
import product3Thumbnail from '../../../assets/image-product-3-thumbnail.jpg'
import product4Thumbnail from '../../../assets/image-product-4-thumbnail.jpg'
import product1 from '../../../assets/image-product-1.jpg'
import product2 from '../../../assets/image-product-2.jpg'
import product3 from '../../../assets/image-product-3.jpg'
import product4 from '../../../assets/image-product-4.jpg'





const ImageGrid = () => {
  const [productThumb, setProductThumb] = useState([product1Thumbnail, product2Thumbnail, product3Thumbnail, product4Thumbnail])

  const [products, setProduct] = useState([product1, product2, product3, product4])



  return (
    <div className='imageGallery'>
      <div className="productLandingPicture">
        <img src={product1} alt="product" />
      </div>

      <div className="productThumbnail">
        {productThumb.map((product, index) => <img src={product} alt={index} />)}
      </div>
    </div>
  )
}

export default ImageGrid
