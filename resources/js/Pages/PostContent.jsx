import Layout from "@/Layouts/Layout";
import React from "react";
import Show from "./Post/Show";

export default function PostContent(props) {
  return (
    <>
      <Layout>
        <Show {...props} />
      </Layout>
    </>
  )
}