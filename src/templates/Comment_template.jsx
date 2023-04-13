import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { DiscussionEmbed } from "disqus-react"

import React, { useState } from "react"
const PostTemplate = ({ postId, postTitle, postUrl }) => {
  const [disqusIsVisible, setDisqusVisibility] = useState(false);

  // Set Disqus visibility state on click.
  const showCommentsClick = event => {
    setDisqusVisibility(true);
  };

  let disqusConfig = {
      url: postUrl,
      identifier: postId,
      title: postTitle,
  }

  return (
    <>
      {!disqusIsVisible && (
        <div>
          <button onClick={showCommentsClick}>Load Comments</button>
        </div>
      )}
      {disqusIsVisible && (
        <Disqus config={disqusConfig} />
      )}
    </>
  )
}

export default PostTemplate