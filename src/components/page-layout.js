import * as React from 'react';

import { MDXProvider, MDXRenderer } from "@mdx-js/react"
import './global.css';
import './post.css';

// https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/
export default function Layout({ children }) {
  return (
    <div className="markdown-body">
      <MDXProvider>
        {children}
      </MDXProvider>
    </div>
  )
}
