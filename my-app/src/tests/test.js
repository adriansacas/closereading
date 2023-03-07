import renderer from "react-test-renderer";

import JobCard from "../components/Cards/JobCard";
import ApartmentCard from "../components/Cards/ApartmentCard";
import CityCard from "../components/Cards/CityCard";
import APICard from "../components/Cards/APICard";
import DeveloperCard from "../components/Cards/DeveloperCard";
import PageCard from "../components/Cards/PageCard";
import ToolCard from "../components/Cards/ToolCard";

import GlobalNavbar from "../components/GlobalNavbar/GlobalNavbar";

import placeholder from "../assets/placeholder/avatar.png";
import App from "../App";
import RouteSwitch from "../RouteSwitch";

it("JobCard Initial correctly", () => {
  const job = {
    title: "Title",
    city: "City",
    state: "State",
    salary: 100,
    ContractType: "Full Time",
    key: 1,
  };
  const component = renderer.create(<JobCard job={job} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("ApartmentCard initializes correctly", () => {
  const apartment = {
    name: "Name",
    city: "City",
    price: 1000,
    type: "Apartment",
    buildYear: 1998,
    key: 1,
  };
  const component = renderer.create(<ApartmentCard apartment={apartment} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("CityCard initializes correctly", () => {
  const city = {
    name: "Name",
    state: "State",
    Population: 123356,
    rating: 100,
    budget: 1000,
    key: 1,
  };
  const component = renderer.create(<CityCard city={city} />);

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
