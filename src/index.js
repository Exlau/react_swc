import React from "react"
import ReactDOMClient from 'react-dom/client'
import TestJsx from "./test.jsx";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<TestJsx/>);