/**
 *
 * jQuery
 */

// function that creates the elements for a Jumbotron using jQuery
const createJumbotron = () => {
  // create a title div and add class and text content
  const titleDiv = $("<div/>").addClass("title").text("Hello, jQuery!!");

  // create a sub-title div and add class and text content
  const subTitleDiv = $("<div/>")
    .addClass("sub-title")
    .text("This banner element is rendered using jQuery and CSS.");

  // create a jumbotron div and add class and append both title and sub-title div
  const jumbotron = $("<div/>")
    .addClass("jumbotron")
    .append([titleDiv, subTitleDiv]);

  // return the jQuery constructed jumbotron
  return jumbotron;
};

// target the div you want to append the elements created using jQuery
const jQueryContainer = $("#jquery-root");

// create a jumbotron component to append to the jQueryContainer
const jQueryJumbotron = createJumbotron();

// append the jQuery created elements to the div
jQueryContainer.append(jQueryJumbotron);

/**
 *
 * React
 */

// function that creates the elements for a Jumbotron using React
const Jumbotron = () => {
  // create a title div and add class and text content
  const title = React.createElement(
    "div",
    {
      className: "title",
      key: 1,
    },
    "Hello, React!!"
  );

  // create a sub-title div and add class and text content
  const subTitle = React.createElement(
    "div",
    {
      className: "sub-title",
      key: 2,
    },
    "This banner element is rendered using React and CSS."
  );

  // create a jumbotron div and add class and append both title and sub-title div
  const jumbotron = React.createElement("div", { className: "jumbotron" }, [
    title,
    subTitle,
  ]);

  // return the jQuery constructed jumbotron
  return jumbotron;
};

// target the div you want to append the elements created using React
const reactContainer = document.getElementById("root");

// use ReactDOM to create a root element which will hold your entire React application
const root = ReactDOM.createRoot(reactContainer);

// create a jumbotron component to append to the root
const reactJumbotron = Jumbotron();

// render the application in the root element
root.render(reactJumbotron);
