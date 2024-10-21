import React from "react";
import { Button, Layout, Menu } from "antd";
import ButtonGroup from "./components/Buttons/ButtonGroup";
import Toolbar from "./components/Toolbar/Toolbar";
import CheckBoxGroup from "./components/CheckBox/CheckBoxGroup";
import GroupBox from "./components/GroupBox/GroupBox";
import ColorGradient from "./components/ColorGradient/ColorGradient";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import InputTextBox from "./components/InputTextBox/InputTextBox";
import MaskedTextBox from "./components/MaskedTextBox/MaskedTextBox";
import NumericTextBox from "./components/NumericTextBox/NumericTextBox";
import RadioButton from "./components/RadioButton/RadioButton";
import SwitchToggle from "./components/Switch/Switch";
import TextAreaComponent from "./components/TextArea/TextArea";
import DatePickerComponent from "./components/DatePicker/DatePicker";
import DateTimePickerComponent from "./components/DateTimePicker/DateTimePicker";
import TimePickerComponent from "./components/TimePicker/TimePicker";
import DateRangePickerComponent from "./components/DateRangePicker/DateRangePicker";
import AutoCompleteInput from "./components/AutoCompleteInput/AutoCompleteInput";
import ComboBox from "./components/ComboBox/ComboBox";
import AutoCompleteComboBox from "./components/AutoCompleteComboBox/AutoCompleteComboBox";
import DropdownTree from "./components/DropdownTree/DropdownTree";
import MultiSelect from "./components/MultiSelect/MultiSelect";
import CustomMenu from "./components/Menu/Menu";
import CustomBreadcrumb from "./components/BreadCrumbs/BreadCrumbs";
import ExpansionPanel from "./components/ExpansionPanel/ExpansionPanel";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import Splitter from "./components/Splitter/Splitter";
import TabsComponent from "./components/TabsComponent/TabsComponent";
import TileLayout from "./components/TileLayout/TileLayout";
import ListBox from "./components/ListBox/ListBox";
import ListView from "./components/ListView/ListView";
import NotificationComponent from "./components/NotificationComponent/NotificationComponent";
import ProgressComponent from "./components/ProgressComponent/ProgressComponent";
import TooltipComponent from "./components/Tooltip/TooltipComponent";
import NestedGrid from "./components/NestedGrid/NestedGrid";
import TreeView from "./components/TreeView/TreeView";
import FileUpload from "./components/Upload/Upload";
import DataGrid from "./components/DataGrid/DataGrid";
import Charts from "./components/Chart/Chart";
const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <GroupBox title="Панель инструментов">
            <Toolbar />
          </GroupBox>

          <GroupBox title="Кнопки">
            <ButtonGroup />
          </GroupBox>

          <GroupBox title="Чекбоксы">
            <CheckBoxGroup />
          </GroupBox>

          <GroupBox title="Градиент цвета">
            <ColorGradient />
          </GroupBox>

          <GroupBox title="Выбор цвета">
            <ColorPicker />
          </GroupBox>

          <GroupBox title="Текстовое поле">
            <InputTextBox />
          </GroupBox>

          <GroupBox title="Маскированное поле">
            <MaskedTextBox
              mask={[
                "+",
                "7",
                " ",
                "(",
                /\d/,
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
              placeholder="Введите номер"
            />
          </GroupBox>

          <GroupBox title="NumericTextBox">
            <NumericTextBox placeholder="Введите число" />
          </GroupBox>

          <GroupBox title="RadioButton">
            <RadioButton />
          </GroupBox>

          <GroupBox title="Переключатель">
            <SwitchToggle />
          </GroupBox>

          <GroupBox title="Текстовая область">
            <TextAreaComponent />
          </GroupBox>

          <GroupBox title="Выбор даты">
            <DatePickerComponent />
          </GroupBox>

          <GroupBox title="Выбор даты и времени">
            <DateTimePickerComponent />
          </GroupBox>

          <GroupBox title="Выбор времени">
            <TimePickerComponent />
          </GroupBox>

          <GroupBox title="Выбор диапазона дат">
            <DateRangePickerComponent />
          </GroupBox>

          <GroupBox title="Автозаполнение ||'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань' для примера есть они">
            <AutoCompleteInput />
          </GroupBox>

          <GroupBox title="Комбобокс">
            <ComboBox />
          </GroupBox>

          <GroupBox title="Выпадающий список с автозаполнением">
            <AutoCompleteComboBox />
          </GroupBox>

          <GroupBox title="Dropdown Tree">
            <DropdownTree />
          </GroupBox>
          <GroupBox title="Мультиселект">
            <MultiSelect />
          </GroupBox>

          <GroupBox title="Меню">
            <CustomMenu />
          </GroupBox>

          <GroupBox title="Хлебные крошки">
            <CustomBreadcrumb />
          </GroupBox>

          <GroupBox title="Expansion Panel == Panel Bar">
            <ExpansionPanel />
          </GroupBox>

          <GroupBox title="Context Menu">
            <ContextMenu />
          </GroupBox>

          <GroupBox title="Сплитер (вариантов масса) https://ant.design/components/splitter#examples">
            <Splitter />
          </GroupBox>

          <GroupBox title="Вкладки (Tabs)">
            <TabsComponent />
          </GroupBox>

          <GroupBox title="Плиточный макет (Tile Layout)">
            <TileLayout />
          </GroupBox>
          <GroupBox title="Аналог KendoReact ListBox">
            <ListBox />
          </GroupBox>

          <GroupBox title="Аналог KendoReact ListView">
            <ListView />
          </GroupBox>

          <GroupBox title="Аналог KendoReact Notification">
            <NotificationComponent />
          </GroupBox>

          <GroupBox title="Аналог KendoReact ProgressBar (их куча разных, как пример эти..)">
            <ProgressComponent />
          </GroupBox>

          <GroupBox title="Аналог KendoReact Tooltip">
            <TooltipComponent title="Это подсказка">
              <Button>Наведи на меня</Button>
            </TooltipComponent>
          </GroupBox>

          <GroupBox title="Грид с раскрывающимися строками и вложенным гридом">
            <NestedGrid />
          </GroupBox>

          <GroupBox title="Дерево (TreeView)">
            <TreeView />
          </GroupBox>
          <GroupBox title="Загрузка файлов">
            <FileUpload />
          </GroupBox>

          <GroupBox title="DataGrid с сортировкой, пагинацией и редактированием">
            <DataGrid />
          </GroupBox>

          <GroupBox title="Пример графиков recharts">
            <Charts />
          </GroupBox>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2024 Разработано Genix
      </Footer>
    </Layout>
  );
};

export default App;
