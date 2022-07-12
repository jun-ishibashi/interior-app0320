import React from "react";
import route from "ziggy-js";

export default function Index(props) {

  const cards = props.posts.map(p => (
    <a href={route('post.show', {post: p.id})} class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
      <img src={p.image_path} loading="lazy" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
    </a>
  ));

  console.log(props)
  return (
    <>
      <div class="py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {cards}
          </div>
        </div>
      </div>
    </>
  )
}