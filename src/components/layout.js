import * as React from "react";

import "./global.css";
import "./home.css";

// https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/
export default function Layout({ children }) {
  return (
    <>
      <div className="not-markdown-body-background-layer"></div>
      <div className="not-markdown-body">{children}</div>
    </>
  );
}
