import React from "react";
import { useState } from "react";
import axios from "axios";



export default function Show(props) {

  console.log(props)
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                <img src={props.post.image_path} loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center" />
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