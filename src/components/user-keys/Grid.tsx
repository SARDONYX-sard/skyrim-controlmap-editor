import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";
import {
  defaultUserKeys,
  UserKeyEvents,
  UserKeyMenu,
} from "../../constants/default-user-keys";

export default function IsCellEditableGrid() {
  console.log(groups)
  return (
    <>
      {groups.map((rows, index) => (
        <>
          <br />
          {userKeys[index]}
          <br />
          <Box
            sx={{
              height: 400,
              width: 1000,
              "& .MuiDataGrid-cell--editable": {
                bgcolor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "#376331"
                    : "rgb(217 243 190)",
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              isCellEditable={(params) => params.row.KeyboardKey % 2 === 0}
            />
          </Box>
        </>
      ))}
    </>
  );
}

const columns: GridColumns = [
  { field: "name", headerName: "Event Name", width: 180, editable: true },
  {
    field: "KeyboardKey",
    headerName: "Keyboard key",
    type: "string",
  },
  {
    field: "MouseBtn",
    headerName: "Mouse button",
    type: "number",
    width: 180,
    editable: true,
  },
  {
    field: "GamepadBtn",
    headerName: "KeyBoard Button",
    type: "number",
    width: 220,
    editable: true,
  },
  {
    field: "RemappedKeyBoardBtn",
    headerName: "Remapped KeyBoard Button",
    type: "number",
    width: 220,
    editable: true,
  },
  {
    field: "RemappedMouseBtn",
    headerName: "Remapped Mouse Button",
    type: "number",
    width: 220,
    editable: true,
  },
  {
    field: "RemappedGamepadBtn",
    headerName: "Remapped Gamepad Button",
    type: "number",
    width: 220,
    editable: true,
  },
  {
    field: "UserBinaryFlag",
    headerName: "User Binary Flag",
    type: "number",
    width: 220,
    editable: true,
  },
];

const result = [
  {
    name: "Accept",
    KeyboardKey: "0xff",
    MouseBtn: "0xff",
    GamepadBtn: "0x0200+0x1000",
    RemappedKeyBoardBtn: "0",
    RemappedMouseBtn: "0",
    RemappedGamepadBtn: "0",
    UserBinaryFlag: "0x8",
  },
  {
    name: "Accept",
    KeyboardKey: "0xff",
    MouseBtn: "0xff",
    GamepadBtn: "0x0200+0x1000",
    RemappedKeyBoardBtn: "0",
    RemappedMouseBtn: "0",
    RemappedGamepadBtn: "0",
    UserBinaryFlag: "0x8",
  },
];

const result2 = [
  {
    name: "Accept",
    KeyboardKey: "0xff",
    MouseBtn: "0xff",
    GamepadBtn: "0x0200+0x1000",
    RemappedKeyBoardBtn: "0",
    RemappedMouseBtn: "0",
    RemappedGamepadBtn: "0",
    UserBinaryFlag: "0x8",
  },
  {
    name: "Accept",
    KeyboardKey: "0xff",
    MouseBtn: "0xff",
    GamepadBtn: "0x0200+0x1000",
    RemappedKeyBoardBtn: "0",
    RemappedMouseBtn: "0",
    RemappedGamepadBtn: +"0",
    UserBinaryFlag: "0x8",
  },
];

const result3 = [result, result2];

function createObj(value: UserKeyEvents) {
  const categories = [
    "KeyboardKey",
    "MouseBtn",
    "GamepadBtn",
    "RemappedKeyBoardBtn",
    "RemappedMouseBtn",
    "RemappedGamepadBtn",
    "UserBinaryFlag",
  ] as const;

  type Category = typeof categories[number] | "id" | "name";

  let obj: { [key: string]: string } = {};

  Object.entries(value).forEach(([key, value], index) => {
    obj["id"] = index.toString();
    obj["name"] = key;

    categories.forEach((category, index) => {
      obj[category] = value[index];
    });
  });

  return obj as { [key in Category]: string };
}

const userKeys = Object.keys(defaultUserKeys) as UserKeyMenu[];

const groups = userKeys.map((key) => [createObj(defaultUserKeys[key])]);
