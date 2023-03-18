import { Jumbotron } from "./components/Jumbotron";

// the object array of languages is a prop which contains the title and subTitle keys
const languages = [
  {
    title: "Hello, HTML!!",
    subTitle: "This banner element is rendered using only HTML and CSS.",
  },
  {
    title: "Hello, jQuery!!",
    subTitle: "This banner element is rendered using jQuery and CSS.",
  },
  {
    title: "Hello, React!!",
    subTitle: "This banner element is rendered using React and CSS.",
  },
];

export const App = () => {
  return (
    <div className="container">
      {/* map through all languages and for each language render a Jumbotron component */}
      {languages.map((language) => {
        return (
          <Jumbotron
            // pass the title prop from the language
            title={language.title}
            // pass the subTitle prop from the language
            subTitle={language.subTitle}
            // the kep prop is used so that React can uniquely identify each Jumbotron component
            key={language.title}
          />
        );
      })}
    </div>
  );
};
