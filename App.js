// creating a multiple div structured div
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag inside nested div")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// this {}---->> this object is used to give attribute to a class
const heading = React.createElement("h1", { id: "heading" }, "hello world");
root.render(parent);
