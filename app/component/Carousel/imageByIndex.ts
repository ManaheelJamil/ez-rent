import image1 from '../Carousel/images/image1.png'
import image2 from '../Carousel/images/image2.png'
import image3 from '../Carousel/images/image3.png'

export const images = [image1, image2, image3]

const ImageByIndex = (index: any)=> images[index % images.length]

export default ImageByIndex
