import Thumbnail from "./Thumbnail.jsx";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
        3xl:flex flex-wrap justify-center"
    >
      {results?.length > 0 &&
        results?.map((result) => {
          return <Thumbnail key={result.id} result={result} />;
        })}
    </FlipMove>
  );
}

export default Results;
