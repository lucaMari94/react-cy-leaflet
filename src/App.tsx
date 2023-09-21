import React from "react";
import "./App.css";
import CytoscapeComponent from "react-cytoscapejs";

const App: React.FC = () => {
  const elements = [
    { data: { id: "one", label: "Node 1" }, position: { x: 200, y: 300 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 400, y: 300 } },
    {
      data: { source: "one", target: "two", label: "Edge from Node1 to Node2" },
    },
  ];
  return (
    <CytoscapeComponent
      elements={CytoscapeComponent.normalizeElements(elements)}
      style={{ width: "600px", height: "600px", border: "5px solid black" }}
    />
  );
};

export default App;
