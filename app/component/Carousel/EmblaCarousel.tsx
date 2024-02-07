/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ImageByIndex from "./imageByIndex"
type PropType = {
    slides: number[]
    options?: EmblaOptionsType;
    images:any
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const [isFilled, setIsFilled] = useState(false);

    const handleClick = () => {
        setIsFilled(!isFilled)

    };
    const { slides, options, images } = props
    console.log(images, 'images')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
        emblaMainApi.on('select', onSelect)
        emblaMainApi.on('reInit', onSelect)
    }, [emblaMainApi, onSelect])
    return (
        <div className="embla ">
            <div className="embla__viewport " ref={emblaMainRef}>
                <div className="embla__container  ">
                    {images && images.length > 0 && images.map((image: { path: string | undefined }, index: React.Key | null | undefined) => (
                        <div className="embla__slide" key={index}>

                            <img
                                className="embla__slide__img  rounded-xl "
                                // src={ImageByIndex([index]).src}
                                src={image.path}
                                alt="Your alt text"
                            />
                            <div>
                                <div onClick={handleClick} className='w-[32px] h-[32px] bg-white rounded-full flex items-center absolute top-0 right-0  m-3'>
                                    {isFilled ? (
                                        <AiFillHeart className={`text-[#EC4F9A] cursor-pointer w-[18.2px] h-[16.41px] mx-auto`} />
                                    ) : (
                                        <AiOutlineHeart className={`text-[#404EED]  cursor-pointer w-[18.2px] h-[16.41px] mx-auto`} />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla-thumbs">
                <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                    <div className="embla-thumbs__container">
                        {images && images.length > 0 && images.map((image: { path: any }, index: React.Key | null | any) => (
                            <Thumb
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                index={index}
                                imgSrc={image.path}

                                // imgSrc={ImageByIndex([index]).src}
                                key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
