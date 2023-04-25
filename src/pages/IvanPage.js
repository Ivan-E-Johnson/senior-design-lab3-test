import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import BarGraph, {update} from '../components/BarChart.js';
import React, { useEffect, useState } from "react"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import PostTemplate from "../templates/Comment_template"


const IvanPage = () => {
  const disqusConfigCurrent = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: 'ivan-page',
    title: "Ivan's Page",
  }
  const MAX_RANDOM_LABELS = 10

  function generateRandomData(numLabels) {
    const labels = [];
    const Completed = [];
    const Active = [];
    const Timeout = [];
  
    for (let i = 1; i <= numLabels; i++) {
      labels.push(`Label ${i}`);
      Completed.push(Math.floor(Math.random() * 100) + i); // generate random number or addition
      Active.push(Math.floor(Math.random() * 100) + i); // generate random number or addition
      Timeout.push(Math.floor(Math.random() * 100) + i); // generate random number or addition
    }
  
    return { labels, datasets: [{ label: 'Completed', data: Completed }, { label: 'Active', data: Active }, { label: 'Timeout', data: Timeout }] };
  }
  
  useEffect(() => {
    numLabels =Math.floor(Math.random()*MAX_RANDOM_LABELS)
    generateRandomData(numLabels); // pass numLabels as 6
    setInterval(() => generateRandomData(numLabels), 10000); // pass numLabels as 6
  }, []);
  


  const chartRef = React.createRef();

  const initialData = {
    labels: ['7', '8', '10', '11', '9', '15'],
    datasets: [
      { label: 'Completed', data: [14, 3, 8, 3, 6, 1] },
      { label: 'Active', data: [] },
      { label: 'Timeout', data: [3] }
    ]
  };


  return (
    <Layout>
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/IMG_5168.png"
          loading="eager"
          quality={40}
          width={250}
          formats={["auto", "webp", "avif"]}
          alt="Ivan's profile picture"
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1 className={styles.name}>Ivan</h1>
        <p className={styles.jobTitle}>Computer Science Student</p>
        <p className={styles.intro}>{`I started working in a research lab at 17 and found my passion for doing image processing and data analysis. I had minimal prior experience but I was very motivated and pushed myself to learn outside of work. During the initial year of the COVID-19 pandemic I took a year off of school, which allowed me to realize that my passions required a switch from chemical engineering to computer science. Since switching majors I have reignited my passion for software development, specifically when applied to image processing, data analysis, and machine learning. Though I have taken many classes to enhance my knowledge in these areas, I also have been developing the skills needed to become a full stack engineer.`}</p>
        <Link className={styles.button} to="/">Go back to the homepage</Link>
        <div style={{ textAlign: "center" }}>
          {trafficData["bars"] ? (
            <div>
              <BarGraph data={trafficData["bars"]} ref={chartRef} />
            </div>
          ) : (
            ""
          )}
        </div>
        <PostTemplate
          postId={disqusConfigCurrent.identifier}
          postTitle={disqusConfigCurrent.title}
          postUrl={disqusConfigCurrent.url}
        />
      </div>
    </Layout>
  )
}
