import React, { useEffect, useState, createRef } from "react";

const Utterances = () => {
  const commentsEl = createRef();
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.onload = () => setStatus({ status: "success" });
    scriptEl.onerror = () => setStatus({ status: "failed" });
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "doong-jo/blog");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "preferred-color-scheme");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current.appendChild(scriptEl);
  }, []);

  return (
    <div className="comments-wrapper">
      {status === "failed" && <p>Error. Please try again.</p>}
      {status === "pending" && <p>Loading script...</p>}
      <div ref={commentsEl} />
    </div>
  );
};
export default Utterances;
