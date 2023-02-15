import ReactLogo from "../assets/logos/react-logo.png";
import ReactBootstrapLogo from "../assets/logos/react-bootstrap-logo.png";
import MUILogo from "../assets/logos/mui-logo.png";
import PostmanLogo from "../assets/logos/postman-logo.png";
import AmplifyLogo from "../assets/logos/amplify-logo.png";
import GitLabLogo from "../assets/logos/gitlab-logo.png";
import ZoomLogo from "../assets/logos/zoom-logo.png";
import NamecheapLogo from "../assets/logos/namecheap-logo.png";
import WebstormLogo from "../assets/logos/webstorm-logo.png";

import GoogleMapsLogo from "../assets/logos/googlemaps-logo.png";

const toolInfo = [
  {
    title: "React",
    image: ReactLogo,
    description: "JavaScript framework for front-end development",
    link: "https://reactjs.org/",
  },
  {
    title: "React-Bootstrap",
    image: ReactBootstrapLogo,
    description: "Library that integrates Bootstrap into React",
    link: "https://react-bootstrap.github.io/",
  },
  // {
  //   title: "Material UI",
    // image: MUILogo,
  //   description: "Component library for React",
  //   link: "https://mui.com/",
  // },
  {
    title: "Postman",
    image: PostmanLogo,
    description: "Tool for designing and testing APIs",
    link: "https://postman.com/",
  },
  {
    title: "AWS Amplify",
    image: AmplifyLogo,
    description: "Web application building and hosting platform",
    link: "https://aws.amazon.com/amplify/",
  },
  {
    title: "GitLab",
    image: GitLabLogo,
    description: "Git repository and CI/CD platform",
    link: "https://gitlab.com/",
  },
  {
    title: "Webstorm",
    image: WebstormLogo,
    description: "IDE for Javascript and related technologies",
    link: "https://www.jetbrains.com/webstorm/",
  },
  {
    title: "Zoom",
    image: ZoomLogo,
    description: "Team communication platform",
    link: "https://zoom.us/",
  },
  {
    title: "Namecheap",
    image: NamecheapLogo,
    description: "Domain name registrar",
    link: "https://namecheap.com/",
  }
];

const apiInfo = [
  {
    title: "Google Maps API",
    image: GoogleMapsLogo,
    description:
      "Google Maps API is a geographic interface with transportation route times and apartment address information.",
    link: "https://developers.google.com/maps",
  },
  {
    title: "GitLab API",
    image: GitLabLogo,
    description: "GitLab API was used for fetching repository statistics.",
    link: "https://docs.gitlab.com/ee/api/",
  },
];

export { toolInfo, apiInfo };
