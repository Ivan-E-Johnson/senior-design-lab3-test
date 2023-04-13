import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { DiscussionEmbed } from "disqus-react"
import React from 'react'
const PostTemplate = (props) => {
    let disqusConfig = props.disqusConfig
  return (
    <>
      <h1>New Post</h1>
      <DiscussionEmbed {...disqusConfig} />
    </>
  )
}

export default PostTemplate