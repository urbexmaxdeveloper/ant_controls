import React from "react";
import { Splitter } from "antd";
import Desc from "./Desc";

const SplitterPanel: React.FC = () => (
  <Splitter style={{ height: 200, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
    <Splitter.Panel defaultSize="40%" min="20%" max="70%">
      <Desc text="Первый" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="Второй" />
    </Splitter.Panel>
  </Splitter>
);

export default SplitterPanel;
