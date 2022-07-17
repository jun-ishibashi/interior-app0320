<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
// models
use App\Models\Post;
use App\Models\Media;

class PostController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $posts = Post::select('id', 'title', 'user_id')->get();
    $medias = $posts->map(function($post) {
      return $post->media[0]->path;
    });
    Log::debug($medias);
    return Inertia::render('Home', [
      'posts' => $posts,
      'medias' => $medias
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\StorePostRequest  $request
   * @return \Illuminate\Http\Response
   */
  public function store(StorePostRequest $request)
  {
    Log::debug($request);
    $images = $request->images;
    $imagePaths = [];
    foreach ($images as $image) {
      // 現状メディアは画像だけなので、フォルダはpublic/image/...で固定
      array_push($imagePaths, Storage::url($image->store('image', 'public')));
    }
    $post = Post::create([
      'title' => $request->title,
      'user_id' => $request->user_id,
      'ip_address' => 'default value'
    ]);
    $post->media()->createMany(array_map(function($path) use ($post) {
      return [
        'post_id' => $post->id,
        'path' => $path
      ];
    }, $imagePaths));
    return back();
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Post  $post
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $post = Post::select('id', 'title', 'user_id')->find($id);
    $medias = $post->media;
    return Inertia::render('PostContent', [
      'post' => $post,
      'medias' => $medias
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Post  $post
   * @return \Illuminate\Http\Response
   */
  public function edit(Post $post)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\UpdatePostRequest  $request
   * @param  \App\Models\Post  $post
   * @return \Illuminate\Http\Response
   */
  public function update(UpdatePostRequest $request, Post $post)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Post  $post
   * @return \Illuminate\Http\Response
   */
  public function destroy(Post $post)
  {
    //
  }
}
