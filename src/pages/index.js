import * as React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import OctoCat from "../components/octo-cat";

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  marginBottom: 30,
};

const linkStyle = {
  color: "#71B7FF",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const origin =
  typeof window !== "undefined"
    ? window.location.origin
    : "https://doong-jo.github.io";

// data
const links = [
  {
    text: "뱅크샐러드 Web chapter에서 GitHub Action 기반의 CI 속도를 개선한 방법",
    url: "https://blog.banksalad.com/tech/github-action-npm-cache/",
    description:
      "nodejs 기반의 어플리케이션을 GitHub Action에서 CI를 구성할 때 속도를 개선하는 방법을 소개합니다.",
    color: "#999",
    badge: true,
  },
  {
    text: "[번역] CSS 안에 자바스크립트 넣기",
    url: `${origin}/posts/putting-javascript-in-your-css`,
    description: "CSS 안에 자바스크립트를 넣는 방법을 알아봅니다.",
    color: "#999",
  },
  {
    text: "[번역] 테스트 가능한 프론트엔드: 좋은 것, 나쁜 것, 깨지기 쉬운 것",
    url: `${origin}/posts/testable-frontend-architecture`,
    description:
      "프론트엔드 테스팅의 좋은 것과 나쁜 것 그리고 깨지기 쉬운 것에 대해 알아봅니다.",
    color: "#999",
  },
  {
    text: "[번역] Microsoft는 JavaScript와 TypeScript를 어떻게 바꾸고 싶어하는가",
    url: `${origin}/posts/how-microsoft-wants-to-destroy-typescript`,
    description:
      "Microsoft가 제안한 Types as Comments에 대한 관점을 살펴봅니다.",
    color: "#999",
  },
  {
    text: "[번역] XHTML 방식이 아닌 HTML을 HTML의 방식으로 작성하세요.",
    url: `${origin}/posts/write-html-the-html-way-not-the-xhtml-way`,
    description:
      "HTML을 XHTML 방식으로 작성하고 있진 않으신가요? HTML을 HTML 답게 작성하는 관점을 알아봅니다.",
    color: "#999",
  },
  {
    text: "[번역] Lerna는 공식적으로 죽었습니다. 모노레포여 영원하길",
    url: `${origin}/posts/long-live-monorepos`,
    description:
      "2022년 JavaScript 모노레포를 효율적으로 관리할 수 있는 도구를 알아봅니다.",
    color: "#999",
  },
  {
    text: "[번역] 여러분은 UI Framework가 필요없습니다.",
    url: `${origin}/posts/you_dont_need_a_ui_framework`,
    description: "대부분의 제품에 UI Framework는 필요하지 않을 수 있습니다.",
    color: "#999",
  },
  {
    text: "[번역] 프론트엔드 테스팅 전략",
    url: `${origin}/posts/front-end_testing_strategy`,
    description:
      "Kent C. Dodds의 테스팅 원칙을 기반으로 하는 프론트엔드 테스팅 전략을 소개합니다.",
    color: "#999",
  },
  {
    text: "Monorepo로 대규모 React 프로젝트 관리하기",
    url: "https://medium.com/myrealtrip-product/monorepo%EB%A1%9C-%EB%8C%80%EA%B7%9C%EB%AA%A8-react-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0-d12b65340306",
    description:
      "점차 규모가 커지는 프론트엔드 프로젝트, 어떻게 관리할 것인가?",
    color: "#999",
  },
  {
    text: "API 없이 프론트엔드 개발하기",
    url: "https://medium.com/@sdong001_28201/api-%EC%97%86%EC%9D%B4-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0-89fdabceaa19?source=user_profile---------1----------------------------",
    description:
      "백엔드팀에서 API는 한창 개발 중이다. 하지만 프론트엔드 개발은 시작해야한다. 당신의 전략은?",
    color: "#999",
  },
  {
    text: "실용적인 리액트 테스트 전략",
    url: "https://velog.io/@sdong001/%EC%8B%A4%EC%9A%A9%EC%A0%81%EC%9D%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A0%84%EB%9E%B5",
    description: "실용적인 리액트 테스트는 어떻게 해야할 것인가에 대한 고민",
    color: "#999",
  },
];

// markup
const IndexPage = () => {
  const title = "doong-jo blog";
  const description = "doong-jo blog";
  const keywords =
    "조성동,doong-jo,프론트엔드,개발,개발 블로그,기술 블로그,frontend,tech,blog,developer,javascript,css,html,typescript,react";
  const image = "https://doong-jo.github.io/og/doong-jo.png";
  const url = "https://doong-jo.github.io";

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
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
      <main>
        <OctoCat />
        <h1>doong-jo</h1>
        <h2>Posts</h2>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p className="link-description">{link.description}</p>
            </span>
          </li>
        ))}
      </main>
      <footer>{new Date().getFullYear()} doong-jo All rights reserved.</footer>
    </Layout>
  );
};

export default IndexPage;
