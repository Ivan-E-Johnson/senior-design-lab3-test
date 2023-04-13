import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import React, { useState } from "react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import PostTemplate from "../templates/Comment_template"

const DisqusComponent = ({ postId, postTitle, postUrl }) => {
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
const NewCommentForm = ({ postId, postTitle, postUrl }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    let disqusConfig = {
      url: postUrl,
      identifier: postId,
      title: postTitle,
    };

    const data = {
      title: postTitle,
      author_name: name,
      author_email: email,
      message: comment
    };

    fetch("https://disqus.com/api/3.0/posts/create.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: "wEmvmw93s0Lyuk2h3jqOQTTymA2GSSEcY8b5X32qmpWlMUrFKVsRCf5P6SjxkT6R",
        forum: "https-seniordesignlab3test49154-gatsbyjs-io",
        thread: disqusConfig.identifier,
        data:data
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        // Reload comments
        window.DISQUS.reset({ reload: true });
      })
      .catch(error => {
        console.error("Error:", error);
      });

    setName("");
    setEmail("");
    setComment("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a comment</h3>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Comment:
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}


const IvanPage = () => {
  const disqusConfigCurrent = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: 'ivan-page',
    title: "Ivan's Page",
  }
  return(
  
    <Layout>
      <h1>Hi from Ivan's page</h1>
      <p>I have done so much</p>
      <Link to="/">Go back to the homepage</Link>
      <NewCommentForm/>
      <DisqusComponent
        postId={disqusConfigCurrent.identifier}
        postTitle={disqusConfigCurrent.title}
        postUrl={disqusConfigCurrent.url}
      />
      
    </Layout>
  )
}
  export const Head = () => <Seo title="Ivan's Page" />
  
  export default IvanPage