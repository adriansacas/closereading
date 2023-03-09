import renderer from "react-test-renderer";

import AuthorCard from "../components/Cards/AuthorCard";
import BookCard from "../components/Cards/BookCard";
import LibraryCard from "../components/Cards/LibraryCard";
import APICard from "../components/Cards/APICard";
import DeveloperCard from "../components/Cards/DeveloperCard";
import PageCard from "../components/Cards/PageCard";
import ToolCard from "../components/Cards/ToolCard";

import GlobalNavbar from "../components/GlobalNavbar/GlobalNavbar";

import placeholder from "../assets/placeholder/avatar.png";
import App from "../App";
import RouteSwitch from "../RouteSwitch";


it("AuthorCard initializes correctly", () => {
  const author = {
    name: "Name",
    age: 100,
    nationality: "Nationality",
    gender: "Gender",
    publications: 100,
    key: 1,
  };
  const component = renderer.create(<AuthorCard author={author} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("BookCard Initial correctly", () => {
    const book = {
      title: "Title",
      author: "Author",
      number_of_pages: 100,
      publishing_year: 2000,
      publisher: "Publisher",
      NYT_Best_Seller: "Yes",
      key: 1,
    };
    const component = renderer.create(<BookCard book={book} />);
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

it("LibraryCard initializes correctly", () => {
  const library = {
    name: "Name",
    location: "Location",
    collection_size: 123356,
    facility: "Facility",
    rating: 5,
    key: 1,
  };
  const component = renderer.create(<LibraryCard library={library} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("APICard initializes correctly", () => {
  const apiInfo = {
    title: "Title",
    image: placeholder,
    Description: "Description",
    link: "https://www.google.com",
  };
  const component = renderer.create(<APICard apiInfo={apiInfo} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("ToolCard initializes correctly", () => {
  const toolInfo = {
    title: "Title",
    image: placeholder,
    Description: "Description",
    link: "https://www.google.com",
  };
  const component = renderer.create(<ToolCard toolInfo={toolInfo} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("DeveloperCard initializes correctly", () => {
  const devInfo = {
    name: "Name",
    image: placeholder,
    gitlab_username: "GitLab User",
    role: "Role",
    bio: "Bio",
    commits: 0,
    issues: 0,
    unit_tests: 0,
  };
  const component = renderer.create(<DeveloperCard devInfo={devInfo} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it("PageCard initializes correctly", () => {
  const pageInfo = {
    pageName: "Name",
    pageImage: placeholder,
    pageDescription: "Description",
    pageLink: "https://www.google.com",
  };
  const component = renderer.create(<PageCard pageInfo={pageInfo} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Navbar initializes correctly", () => {
  const component = renderer.create(<GlobalNavbar />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("App initializes correctly", () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("RouteSwitch initializes correctly", () => {
  const component = renderer.create(<RouteSwitch />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
