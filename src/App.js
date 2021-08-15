import "./App.css";
import { useState } from "react";
import PostItForm from "./components/PostItForm";
import PostItCard from "./components/PostItCard";

const welcomePostIt = {
  title: "Example",
  description: "This is just an example Post-It to wish you a nice day :)",
  index: 0,
  inBoard: true,
  type: "Normal",
};
const newPostIt = {
  title: "",
  description: "",
  type: "Normal",
};
let currentNumberOfPostIts = 1; /// Initial value, since we start with the Welcome Post it :)

function App() {
  const [postItArray, setPostItArray] = useState([welcomePostIt]);
  const [currentPostIt, setCurrentPostIt] = useState({
    title: "",
    description: "",
    index: postItArray.length,
    type: "Normal",
  });

  const addPostIt = (postIt) => {
    if (!postIt.inBoard) {
      setPostItArray((currentPostIts) => [...currentPostIts, postIt]);
      postIt.inBoard = true;
      currentNumberOfPostIts++;
    } else {
      postItArray[postIt.index] = postIt;
    }
    setCurrentPostIt({ index: currentNumberOfPostIts, ...newPostIt });
  };
  const editPostIt = (index) => {
    if (postItArray.length > index) {
      setCurrentPostIt(postItArray[index]);
    }
  };
  const deletePostIt = (index) => {
    if (postItArray.length > index) {
      setPostItArray((currentPostIts) => [
        ...currentPostIts.slice(0, index),
        ...currentPostIts.slice(index + 1),
      ]);
      currentNumberOfPostIts--;
      setCurrentPostIt({ index: currentNumberOfPostIts, ...newPostIt });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row left-panel">
        <div className="col col-md-2 post-it-form-container">
          <PostItForm onSubmit={addPostIt} currentPostIt={currentPostIt} />
          <div className="row repo">
            <a
              href="https://github.com/renzodupont/simple-post-it-with-react-mitlab-2021"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>
        <div className="col col-md-10 post-it-container">
          {postItArray.map((postIt, index) => (
            <PostItCard
              key={index}
              index={index}
              postIt={postIt}
              onEdit={editPostIt}
              onDelete={deletePostIt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
