import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const TabsComponent: React.FC = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Вкладка 1" key="1">
      <p>Содержимое вкладки 1</p>
    </TabPane>
    <TabPane tab="Вкладка 2" key="2">
      <p>Содержимое вкладки 2</p>
    </TabPane>
    <TabPane tab="Вкладка 3" key="3">
      <p>Содержимое вкладки 3</p>
    </TabPane>
  </Tabs>
);

export default TabsComponent;
