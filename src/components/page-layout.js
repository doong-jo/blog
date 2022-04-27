import * as React from "react";
import Helmet from "react-helmet";
import Utterances from "./utterances";

import "./global.css";
import OctoCat from "./octo-cat";
import "./post.css";

// https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/
// https://reacttraining.com/blog/gatsby-mdx-blog/
export default function Layout({ children, pageContext }) {
  const { title, description, keywords, url, image, date } =
    pageContext.frontmatter;

  return (
    <div id="post-body" className="markdown-body dark">
      <OctoCat />
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="doong-jo"></meta>

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <link rel="canonical" href={url} />
      </Helmet>
      <time>{date}</time>
      {children}
      <Utterances />
    </div>
  );
}
