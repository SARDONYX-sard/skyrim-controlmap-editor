import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useTheme } from "../hooks/useTheme";
import { KeyboardWrapper } from "./keyboard/KeyboardWrapper";
import { UserKeys } from "./user-keys/UserKeys";
import { BasicSpeedDial } from "./SpeedDial";
import IsCellEditableGrid from "./user-keys/Grid";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const { theme } = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: `primary.${theme}`,
        flexGrow: 1,
        display: "flex",
        // height: 1000,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          backgroundColor: `primary.${theme}`,
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Tab label="KeyBoard" {...a11yProps(0)} />
        <Tab label="User Keys" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <KeyboardWrapper />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserKeys />
        {/* <IsCellEditableGrid /> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      <BasicSpeedDial />
    </Box>
  );
}
