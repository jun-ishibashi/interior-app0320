import React from "react";
import ImageGallery from 'react-image-gallery';



export default function Show(props) {
  const shows = props.medias.map(m => {return {original: m.path}});
  console.log(props)
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                <ImageGallery items={shows} showThumbnails={false} />
              </div>
            </div>
            <div className="md:pt-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">{props.post.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}