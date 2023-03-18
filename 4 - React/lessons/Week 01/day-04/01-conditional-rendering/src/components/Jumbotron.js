/**
 * props is an object with 2 keys
 * title: string
 * subTitle: string
 */
export const Jumbotron = (props) => {
  // retrieve the title from the props object
  const title = props.title;

  // retrieve the subTitle from the props object
  const subTitle = props.subTitle;

  return (
    <div className="jumbotron">
      {/* title */}
      <div className="title">{props.title}</div>

      {/* sub-title */}
      {/* use the ternary operator to conditionally render the div with the subTitle or null */}
      {props.subTitle ? (
        <div className="sub-title">{props.subTitle}</div>
      ) : null}

      {/* sub-title */}
      {/* {props.subTitle && <div className="sub-title">{props.subTitle}</div>} */}
    </div>
  );
};
