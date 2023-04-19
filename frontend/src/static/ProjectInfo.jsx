// Based on https://gitlab.com/sarthaksirotiya/cs373-idb/-/blob/822cd9f6a70d2084c31439a4aae2fd78fc3a7dd7/front-end/src/static/ProjectInfo.jsx
import ReactLogo from "../assets/logos/react-logo.png";
import ReactBootstrapLogo from "../assets/logos/react-bootstrap-logo.png";
// import MUILogo from "../assets/logos/mui-logo.png";
import PostmanLogo from "../assets/logos/postman-logo.png";
import AmplifyLogo from "../assets/logos/amplify-logo.png";
import GitLabLogo from "../assets/logos/gitlab-logo.png";
import ZoomLogo from "../assets/logos/zoom-logo.png";
import NamecheapLogo from "../assets/logos/namecheap-logo.png";
import WebstormLogo from "../assets/logos/webstorm-logo.png";
import AmazonLogo from "../assets/logos/amazon_logo.png";
import GoogleMapsLogo from "../assets/logos/gmaps_logo.png";
import GoogleBooksLogo from "../assets/logos/googlebooks_logo.png";
import OpenLibraryLogo from "../assets/logos/openlibrary_logo.png";
import WikipediaLogo from "../assets/logos/wiki_logo.png";
import YelpLogo from "../assets/logos/yelp_logo.png";
import YoutubeLogo from "../assets/logos/youtube_logo.png";
// import GoogleMapsLogo from "../assets/logos/googlemaps-logo.png";

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
  // {
  //   title: "Google Maps API",
  //   image: GoogleMapsLogo,
  //   description:
  //     "Google Maps API is a geographic interface with transportation route times and apartment address information.",
  //   link: "https://developers.google.com/maps",
  // },
  {
    title: "GitLab API",
    image: GitLabLogo,
    description: "GitLab API was used for fetching repository statistics.",
    link: "https://docs.gitlab.com/ee/api/",
  },
  {
    title: "Yelp API",
    image: YelpLogo,
    description: "Yelp API was used to retrieve data and reviews on popular libraries in major US cities.",
    link: "https://docs.developer.yelp.com/",
  },
  {
    title: "OpenLibrary API",
    image: OpenLibraryLogo,
    description: "OpenLibrary API was used to retrieve additional data on books, such as publish location.",
    link: "https://openlibrary.org/developers/api",
  },
  {
    title: "Google Books API",
    image: GoogleBooksLogo,
    description: "Google Books API was used to retrieve data and reviews on popular and recent books.",
    link: "https://developers.google.com/books",
  },
  {
    title: "Amazon API",
    image: AmazonLogo,
    description: "Amazon API was used to retrieve a link to purchase a particular book on Amazon.",
    link: "https://webservices.amazon.com/paapi5/documentation/search-items.html",
  },
  {
    title: "Wikipedia API",
    image: WikipediaLogo,
    description: "Wikipedia API was used to retrieve popular authors and  information on a particular author.",
    link: "https://www.mediawiki.org/wiki/API:Main_page",
  },
  {
    title: "Google Maps API",
    image: GoogleMapsLogo,
    description: "Google Maps API was used to display a Google map view for a particular library.",
    link: "https://developers.google.com/maps",
  },
  {
    title: "Youtube API",
    image: YoutubeLogo,
    description: "Youtube API was used to search and display YouTube reviews for books",
    link: "https://developers.google.com/youtube/v3"
  },
];

export { toolInfo, apiInfo };
