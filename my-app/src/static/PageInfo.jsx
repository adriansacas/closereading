import BookImage from "../assets/page-images/books.jpeg";
import LibraryImage from "../assets/page-images/library.jpg";
import AuthorImage from "../assets/page-images/author.jpg";


const pageInfo = [
    {
      pageName: "Books",
      pageImage: BookImage,
      pageDescription: "Explore books!",
      pageLink: "/books",
    },
    {
        pageName: "Libraries",
        pageImage: LibraryImage,
        pageDescription: "Find your local library!",
        pageLink: "/libraries",
    },
    {
        pageName: "Authors",
        pageImage: AuthorImage,
        pageDescription: "Research authors!",
        pageLink: "/authors",
      },
  ];
  
  export { pageInfo };
  