function createNav() {
  const navElement = document.querySelector("nav");
  const ulElement = document.createElement("ul");

  const name = document.createElement("h1");
  name.textContent = "조성동";
  navElement.appendChild(name);

  navElement.appendChild(ulElement);

  const navItems = [
    {
      href: "index.html",
      textContent: "Home",
    },
    {
      href: "about.html",
      textContent: "About",
    },
  ];

  navItems.forEach(({ href, textContent }) => {
    const navItem = document.createElement("li");

    const linkElement = document.createElement("a");
    linkElement.href = href;
    linkElement.textContent = textContent;

    navItem.appendChild(linkElement);
    ulElement.appendChild(navItem);
  });

  // ...

  console.log("createNav");
}

createNav();
