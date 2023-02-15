import ReactLogo from "../assets/logos/tools/react-logo.png";
import ReactBootstrapLogo from "../assets/logos/tools/react-bootstrap-logo.png";
import MUILogo from "../assets/logos/tools/mui-logo.png";
import PostmanLogo from "../assets/logos/tools/postman-logo.png";
import AmplifyLogo from "../assets/logos/tools/amplify-logo.png";
import GitLabLogo from "../assets/logos/tools/gitlab-logo.png";
import VSCLogo from "../assets/logos/tools/vsc-logo.png";
import DiscordLogo from "../assets/logos/tools/discord-logo.png";
import ZoomLogo from "../assets/logos/tools/zoom-logo.png";
import NamecheapLogo from "../assets/logos/tools/namecheap-logo.png";
import TwitterLogo from "../assets/logos/tools/twitter-logo.png";

import RoadGoatLogo from "../assets/logos/apis/roadgoat-logo.png";
import GoogleMapsLogo from "../assets/logos/apis/googlemaps-logo.png";
import YelpLogo from "../assets/logos/apis/yelp-logo.png";
import AdzunaLogo from "../assets/logos/apis/adzuna-logo.png";

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
  {
    title: "Material UI",
    image: MUILogo,
    description: "Component library for React",
    link: "https://mui.com/",
  },
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
    title: "Visual Studio Code",
    image: VSCLogo,
    description: "Text editor",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "Discord",
    image: DiscordLogo,
    description: "Team communication platform",
    link: "https://discord.com/",
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
  },
  {
    title: "React Twitter Embed",
    image: TwitterLogo,
    description: "Embedded Tweets for media",
    link: "https://www.npmjs.com/package/react-twitter-embed",
  },
];

const apiInfo = [
  {
    title: "RoadGoat API",
    image: RoadGoatLogo,
    description:
      "RoadGoat is a geographic API that contains both quanitative and qualitative data on cities across the globe. GeoJobs pulls many of the APIs features to help users immerse themselves in cities they have never visited!",
    link: "https://www.roadgoat.com/",
  },
  {
    title: "Google Maps API",
    image: GoogleMapsLogo,
    description:
      "Google Maps API is a geographic interface with transportation route times and apartment address information. GeoJobs calcuates apartment-to-job commute times using Google Maps.",
    link: "https://developers.google.com/maps",
  },
  {
    title: "Yelp API",
    image: YelpLogo,
    description:
      "Yelp, although commonly know for it's food recommendations, also allows users to hunt for apartments. GeoJobs pulls reviews, real estate listings, and geographic data from Yelp's API.",
    link: "https://www.yelp.com/developers",
  },
  {
    title: "Adzuna API",
    image: AdzunaLogo,
    description:
      "Adzuna is an online job board that allows its users to search open job listings which meet specific criterea. Adzuna is GeoJob's main source for job information.",
    link: "https://developer.adzuna.com/",
  },
  {
    title: "GitLab API",
    image: GitLabLogo,
    description: "GitLab API was used for fetching repository statistics.",
    link: "https://docs.gitlab.com/ee/api/",
  },
];

export { toolInfo, apiInfo };
