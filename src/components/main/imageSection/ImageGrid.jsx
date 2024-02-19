import React, { useEffect, useRef, useState } from 'react'
import './image.scss'
import product1Thumbnail from '../../../assets/image-product-1-thumbnail.jpg'
import product2Thumbnail from '../../../assets/image-product-2-thumbnail.jpg'
import product3Thumbnail from '../../../assets/image-product-3-thumbnail.jpg'
import product4Thumbnail from '../../../assets/image-product-4-thumbnail.jpg'
import product1 from '../../../assets/image-product-1.jpg'
import product2 from '../../../assets/image-product-2.jpg'
import product3 from '../../../assets/image-product-3.jpg'
import product4 from '../../../assets/image-product-4.jpg'
import close from '../../../assets/icon-close.svg'





const ImageGrid = () => {
  const [productThumb, setProductThumb] = useState([product1Thumbnail, product2Thumbnail, product3Thumbnail, product4Thumbnail])


  const [files, setFiles] = useState(null)



  useEffect(() => {
    const appElement = document.querySelector('.App');
    if (appElement) {
      if (files) {
        appElement.style.backgroundColor = 'hsl(0, 0%, 60%)';

      } else {
        appElement.style.backgroundColor = null;
      }
    }
  }, [files]);


  const handleProductOne = () => {
    setFiles(product1)

  }

  const handeProductThumbnail = (index) => {
    if (index === 0) {
      setFiles(product1)
      useRef()
    } else if (index === 1) {
      setFiles(product2)
    } else if (index === 2) {
      setFiles(product3)
    } else {
      setFiles(product4)
    }

  }


  return (
    <div className='imageGallery'>
      <div className="productLandingPicture">
        <img src={product1} alt="product" onClick={handleProductOne} />
      </div>

      <div className="productThumbnail">
        {productThumb.map((product, index) => <img src={product} alt={index} onClick={() => handeProductThumbnail(index)} />)}
      </div>


      {files &&
        <div className="file_source">
          <div className="imageFileSource">
            <div className="close" onClick={() => setFiles(null)}>
              <svg width="30" height="45" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd" /></svg>
            </div>
            <img src={files} alt="Product thumbnail" className='imageTarget' />
            <div className="image_Thumbnail">
              {productThumb.map((product, index) => <div key={index} className='imageThumb'>
                <img
                  src={product}
                  alt={index}
                  onClick={() => handeProductThumbnail(index)}
                />
              </div>)}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ImageGrid
