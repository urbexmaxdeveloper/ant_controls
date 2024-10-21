import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const ExpansionPanel: React.FC = () => {
  return (
    <Collapse accordion>
      <Panel header="Панель 1" key="1">
        <p>Содержимое панели 1</p>
      </Panel>
      <Panel header="Панель 2" key="2">
        <p>Содержимое панели 2</p>
      </Panel>
      <Panel header="Панель 3" key="3">
        <p>Содержимое панели 3</p>
      </Panel>
    </Collapse>
  );
};

export default ExpansionPanel;
