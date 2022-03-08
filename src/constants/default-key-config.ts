import { ValueOf, NthDepthProperty } from "../utils/types";

export type DefaultKeyConfig = typeof defaultKeyConfig;
export type KeyConfigMenu = keyof DefaultKeyConfig;
export type KeyConfigEvents = ValueOf<DefaultKeyConfig>;
export type KeyConfigEventsKey = NthDepthProperty<DefaultKeyConfig, 2>;
export type KeyConfigEventsValues = ValueOf<KeyConfigEvents>;

export const defaultKeyConfig = {
  "Main Gameplay": {
    comment: [
      "1st field: User event name.  DO NOT ALTER!  This field is used to ID events in the code\t\t\t\t\t\t\t\t",
      "2nd: Keyboard key ID that will proc this event.  A value of 0xff means the event is unmapped for this device.\t\t\t\t\t\t\t\t",
      "3rd: Mouse button ID that will proc this event.\t\t\t\t\t\t\t\t",
      "4th: Gamepad button ID that will proc this event.\t\t\t\t\t\t\t\t",
      "5th: If set to 1, this event can be remapped to a keyboard key\t\t\t\t\t\t\t\t",
      "6th: If set to 1, this event can be remapped to a mouse button\t\t\t\t\t\t\t\t",
      "7th: If set to 1, this event can be remapped to a gamepad button\t\t\t\t\t\t\t\t",
      '8th (Optional): User event binary flag.  Used to group together related user events, like "Movement" or\t\t\t\t\t\t\t\t',
      '"Menu", so they can be toggled on and off together\t\t\t\t\t\t\t\t',
      "\t\t\t\t\t\t\t\t",
      "Blank lines signify the start of a new input context.\t\t\t\t\t\t\t\t",
      "See ControlMap.h for more details on input contexts.\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "CODES:========================================================================================================+\t\t\t\t\t\t\t\t",
      "Controller\t||\tKeyboard\t\t\t\t\t\t",
      "U\t0x0001\t||\t\t\t\t\t\t",
      "D\t0x0002\t||\t\t\t\t\t\t",
      "L\t0x0004\t||\t\t\t\t\t\t",
      "R\t0x0008\t||\t\t\t\t\t\t",
      "Start\t0x0010\t||\t\t\t\t\t\t",
      "Back\t0x0020\t||\t\t\t\t\t\t",
      "L3\t0x0040\t||\t\t\t\t\t\t",
      "R3\t0x0080\t||\t\t\t\t\t\t",
      "LB\t0x0100\t||\t\t\t\t\t\t",
      "RB\t0x0200\t||\t\t\t\t\t\t",
      "A\t0x1000\t||\t\t\t\t\t\t",
      "B\t0x2000\t||\t\t\t\t\t\t",
      "X\t0x4000\t||\t\t\t\t\t\t",
      "Y\t0x8000\t||\t\t\t\t\t\t",
      "LT\t0x0009\t||\t\t\t\t\t\t",
      "RT\t0x000a\t||\t\t\t\t\t\t",
      "LS\t0x000b\t||\t\t\t\t\t\t",
      "RS\t0x000c\t||\t\t\t\t\t\t",
      "Mouse--------------------||\tF\t0x21\t\t\t\t\t\t",
      "Mouse1\t0x0\t||\t\t\t\t\t\t",
      "Mouse2\t0x1\t||\t\t\t\t\t\t",
      "Mouse3\t0x2\t||\t\t\t\t\t\t",
      "Mouse4\t0x3\t||\t\t\t\t\t\t",
      "Mouse5\t0x4\t||\t\t\t\t\t\t",
      "Mouse6\t0x5\t||\t\t\t\t\t\t",
      "Mouse7\t0x6\t||\t\t\t\t\t\t",
      "Mouse8\t0x7\t||\t\t\t\t\t\t",
      "MouseWheelUp\t0x8\t||\t\t\t\t\t\t",
      "MouseWheelDown\t0x9\t||\t\t\t\t\t\t",
      "MouseMove\t0xa\t||\t\t\t\t\t\t",
      "=========================||\tInsert\t0xd2\t\t\t\t\t\t",
      "\t||\tPause \t0xc5\t\t\t\t\t\t",
      "\t+-==================================================================================-+\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "Main Gameplay\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "All keyboard and mouse bindings except hotkeys (1-8 on main keyboard only, not number pad) and console\t\t\t\t\t\t\t\t",
      "removed to allow any key to be assigned without conflict as mod hotkeys in MCM if required.\t\t\t\t\t\t\t\t",
      "Also removes any conflict when typing in console with controller enabled, and allows mouse to be used to\t\t\t\t\t\t\t\t",
      "adjust ENB settings with controller enabled without moving camera or swinging weapons.\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tMAIN GAMEPLAY UNCHANGED\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tRIGHT STICK CLICK - Sneak (Hard coded)\t\t\t\t\t\t\t",
      "\tLEFT SHOULDER BUTTON/LB - Sprint\t\t\t\t\t\t\t",
      "\tBACK - Wait\t\t\t\t\t\t\t",
      "\tSTART - Journal\t\t\t\t\t\t\t",
      "\tY - Jump\t\t\t\t\t\t\t",
      "\tX - Ready/Sheathe Weapon\t\t\t\t\t\t\t",
      "\tA - Activate\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tMAIN GAMEPLAY CHANGES\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER BUTTON/RB - No longer has any functions assigned to it. It is used as a modifier.\t\t\t\t\t\t\t",
      "\tB - No longer has any functions assigned to it. It is used as a modifier.\t\t\t\t\t\t\t",
      "\tLEFT STICK CLICK - Shout. (Hard coded)\t\t\t\t\t\t\t",
      "\tB + LEFT STICK CLICK - Is now Favourites\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + RIGHT STICK CLICK - Toggle POV (Hard coded)\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tMAIN GAMEPLAY ADDITIONS\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tD-PAD UP - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tD-PAD LEFT - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tD-PAD RIGHT - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tD-PAD DOWN - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tB + D-PAD UP - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tB + D-PAD LEFT - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tB + D-PAD RIGHT - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tB + D-PAD DOWN - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + D-PAD LEFT - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + D-PAD RIGHT - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + D-PAD DOWN - Available for assignment as mod hotkey in MCM\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + LEFT STICK CLICK - Quick Inventory. (Hard coded)\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + Y - Quick Stats. (Hard coded)\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + X - Quick Magic. (Hard coded)\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + A - Quick Map. (Hard coded)\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB + BACK - Quick Save\t\t\t\t\t\t\t",
      "\tB + BACK - Console\t\t\t\t\t\t\t",
      "\tB + LEFT SHOULDER/LB - Screenshot (Hard coded)\t\t\t\t\t\t\t",
      "\tB + RIGHT TRIGGER - Zoom in\t\t\t\t\t\t\t",
      "\tB + LEFT TRIGGER - Zoom out\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
    ],
    Forward: ["0xff", "0xff", "0xff", "0", "0", "0"],
    Back: ["0xff", "0xff", "0xff", "0", "0", "0"],
    "Strafe Left": ["0xff", "0xff", "0xff", "0", "0", "0"],
    "Strafe Right": ["0xff", "0xff", "0xff", "0", "0", "0"],
    Move: ["0xff", "0xff", "0x000b", "0", "0", "0"],
    Look: ["0xff", "0xff", "0x000c", "0", "0", "0"],
    "Left Attack/Block": ["0xff", "0xff", "0x0009", "0", "0", "1"],
    "Right Attack/Block": ["0xff", "0xff", "0x000a", "0", "0", "1"],
    Activate: ["0xff", "0xff", "0x1000", "0", "0", "1"],
    "Ready Weapon": ["0x13", "0xff", "0x4000", "0", "0", "1"],
    "Tween Menu": ["0x0f", "0xff", "0x2000+0x1000", "1", "1", "1"],
    "Toggle POV": ["0xff", "0xff", "0x0080", "1", "1", "1"],
    "Zoom Out": ["0xff", "0xff", "0xff", "0", "0", "0", "0x220"],
    "Zoom In": ["0xff", "0xff", "0xff", "0", "0", "0", "0x220"],
    Jump: ["0xff", "0xff", "0x8000", "1", "1", "1"],
    Sprint: ["0xff", "0xff", "0x0040", "1", "1", "1"],
    Shout: ["0xff", "0xff", "0x0200+0x8000", "1", "1", "1"],
    Sneak: ["0xff", "0xff", "0x0100", "1", "1", "1"],
    Run: ["0xff", "0xff", "0xff", "1", "1", "0"],
    "Toggle Always Run": ["0xff", "0xff", "0xff", "1", "1", "0"],
    "Auto-Move": ["0xff", "0xff", "0xff", "1", "1", "0"],
    Favorites: ["0xff", "0xff", "0xff", "0", "0", "0"],
    Hotkey1: ["0x02", "0xff", "0xff", "0", "0", "0"],
    Hotkey2: ["0x03", "0xff", "0xff", "0", "0", "0"],
    Hotkey3: ["0x04", "0xff", "0xff", "0", "0", "0"],
    Hotkey4: ["0x05", "0xff", "0xff", "0", "0", "0"],
    Hotkey5: ["0x06", "0xff", "0xff", "0", "0", "0"],
    Hotkey6: ["0x07", "0xff", "0xff", "0", "0", "0"],
    Hotkey7: ["0x08", "0xff", "0xff", "0", "0", "0"],
    Hotkey8: ["0x09", "0xff", "0xff", "0", "0", "0"],
    Quicksave: ["0xff", "0xff", "0x0200+0x0020", "1", "0", "0"],
    Quickload: ["0xff", "0xff", "0x0200+0x0010", "1", "0", "0"],
    Wait: ["0xff", "0xff", "0x0020", "1", "1", "1"],
    Journal: ["0x24", "0xff", "0x0010", "1", "1", "1"],
    Pause: ["0x1", "0xff", "0xff", "1", "1", "0"],
    Screenshot: ["0xb7", "0xff", "0x2000+0x0100", "0", "0", "0"],
    "Multi-Screenshot": ["0xff", "0xff", "0xff", "0", "0", "0"],
    Console: ["0x91", "0xff", "0x2000+0x0020", "0", "0", "0"],
    CameraPath: ["0xff", "0xff", "0xff", "0", "0", "0"],
    "Quick Inventory": ["0xff", "0xff", "0x0200+0x0040", "1", "1", "0"],
    "Quick Magic": ["0xff", "0xff", "0x0200+0x4000", "1", "1", "0"],
    "Quick Stats": ["0xff", "0xff", "0x0200+0x0080", "1", "1", "0"],
    "Quick Map": ["0xff", "0xff", "0x0200+0x1000", "1", "1", "0"],
  },
  "Menu Mode": {
    comment: [
      "Menu Mode\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tB + BACK - Console\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
    ],
    Accept: ["0xff", "0xff", "0x1000", "0", "0", "0", "0x8"],
    Cancel: ["0x0f", "0x1", "0xff", "0x2000", "0", "0", "0", "0x8"],
    Up: ["0xff", "0xff", "0x0001", "0", "0", "0", "0x8"],
    Down: ["0xff", "0xff", "0x0002", "0", "0", "0", "0x8"],
    Left: ["0xff", "0xff", "0x0004", "0", "0", "0", "0x8"],
    Right: ["0xff", "0xff", "0x0008", "0", "0", "0", "0x8"],
    "Left Stick": ["0xff", "0xff", "0x000b", "0", "0", "0", "0x8"],
    Console: ["0x1A", "0xff", "0x2000+0x0020", "0", "0", "0", "0x10"],
  },
  Console: {
    comment: [
      "Console\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tB + BACK - Console\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
    ],
    PickPrevious: ["0xff", "0x8", "0x0002", "0", "0", "0", "0x10"],
    PickNext: ["0xff", "0x9", "0x0001", "0", "0", "0", "0x10"],
    Up: ["0xc8", "0xff", "0xff", "0", "0", "0", "0x10"],
    Down: ["0xd0", "0xff", "0xff", "0", "0", "0", "0x10"],
    PageUp: ["0xc9", "0xff", "0xff", "0", "0", "0", "0x10"],
    PageDown: ["0xd1", "0xff", "0xff", "0", "0", "0", "0x10"],
    Console: ["0x1A", "0xff", "0x2000+0x0020", "0", "0", "0", "0x10"],
    NextFocus: ["0x0f", "0xff", "0x0200", "0", "0", "0", "0x10"],
    PreviousFocus: [
      "0x2a+0x0f",
      "0x36+0x0f",
      "0xff",
      "0x0100",
      "0",
      "0",
      "0",
      "0x10",
    ],
  },
  "Item Menus": {
    comment: ["Item Menus\t\t\t\t\t\t\t\t"],
    LeftEquip: ["0xff", "0xff", "0x0009", "0", "0", "0", "0x8"],
    RightEquip: ["0xff", "0xff", "0x000a", "0", "0", "0", "0x8"],
    "Item Zoom": ["0xff", "0xff", "0x0080", "0", "0", "0", "0x8"],
    Rotate: ["0xff", "0xff", "0x000c", "0", "0", "0", "0x8"],
    XButton: ["0xff", "0xff", "0x4000", "0", "0", "0", "0x8"],
    YButton: ["0xff", "0xff", "0x8000", "0", "0", "0", "0x8"],
    Cursor: ["0xff", "0xa", "0xff", "0", "0", "0", "0x8"],
  },
  Inventory: {
    comment: [
      "Inventory\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tRIGHT SHOULDER/RB - Is used to charge items in the inventory by default.\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
    ],
    ChargeItem: ["0xff", "0xff", "0x0200", "0", "0", "0", "0x8"],
  },
  "Debug Text": {
    comment: ["Debug Text\t\t\t\t\t\t\t\t"],
    PrevPage: ["0xc8", "0xff", "0xff", "0", "0", "0", "0x10"],
    NextPage: ["0xd0", "0xff", "0xff", "0", "0", "0", "0x10"],
    PrevSubPage: ["0xc9", "0xff", "0xff", "0", "0", "0", "0x10"],
    NextSubPage: ["0xd1", "0xff", "0xff", "0", "0", "0", "0x10"],
  },
  "Favorites menu": {
    comment: [
      "Favorites menu\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tD-PAD UP and D-PAD DOWN can no longer be used to navigate the favorites menu due to a conflict with\t\t\t\t\t\t\t",
      "\tthe new hotkey assignments.  Use LEFT STICK for navigating the menu.\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
    ],
    Up: ["0xff", "0xff", "0xff", "0", "0", "0", "0x8"],
    Down: ["0xff", "0xff", "0xff", "0", "0", "0", "0x8"],
    Accept: ["0xff", "0xff", "0x1000", "0", "0", "0", "0x8"],
    Cancel: ["0xff", "0xff", "0x2000", "0", "0", "0", "0x8"],
    "Left Stick": ["0xff", "0xff", "0x000b", "0", "0", "0", "0x8"],
    Cursor: ["0xff", "0xa", "0xff", "0", "0", "0", "0x8"],
  },
  "Map Menu": {
    comment: [
      "Map Menu\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "MAP MENU ADDITIONS\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tRIGHT STICK CLICK - Allows you to place a custom marker on the map. (Hard coded)\t\t\t\t\t\t\t",
      "\tThe D-PAD can now be used to navigate the map menu by scrolling in various directions, a big\t\t\t\t\t\t\t",
      "\timprovement in my opinion. The LEFT STICK continues to function as a cursor. (Hard coded)\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
    ],
    Cancel: ["0x0f", "0x1", "0xff", "0x2000", "0", "0", "0", "0x8"],
    Look: ["0xff", "0xff", "0x000c", "0", "0", "0", "0x8"],
    "Zoom In": ["0xff", "0x8", "0x000a", "0", "0", "0", "0x8"],
    "Zoom Out": ["0xff", "0x9", "0x0009", "0", "0", "0", "0x8"],
    MapLookMode: ["0xff", "0x1", "0x0200", "0", "0", "0", "0x8"],
    Click: ["0xff", "0xff", "0x1000", "0", "0", "0", "0x8"],
    PlacePlayerMarker: ["0x19", "0xff", "0x0080", "0", "0", "0", "0x8"],
    Cursor: ["0xff", "0xa", "0x000b", "0", "0", "0", "0x8"],
    PlayerPosition: ["0x12", "0xff", "0x8000", "0", "0", "0", "0x8"],
    LocalMap: ["0x26", "0xff", "0x4000", "0", "0", "0", "0x8"],
    LocalMapMoveMode: ["0xff", "0x0", "0xff", "0", "0", "0", "0x8"],
    Up: ["0x11", "0xff", "0x0001", "0", "0", "0", "0x8"],
    Down: ["0x1f", "0xff", "0x0002", "0", "0", "0", "0x8"],
    Left: ["0x1e", "0xff", "0x0004", "0", "0", "0", "0x8"],
    Right: ["0x20", "0xff", "0x0008", "0", "0", "0", "0x8"],
  },
  Stats: {
    comment: ["Stats\t\t\t\t\t\t\t\t"],
    Rotate: ["0xff", "0xff", "0x000b", "0", "0", "0", "0x8"],
  },
  Cursor: {
    comment: ["Cursor\t\t\t\t\t\t\t\t"],
    Cursor: ["0xff", "0xa", "0x000c", "0", "0", "0", "0x10"],
    Click: ["0xff", "0x0", "0x1000", "0", "0", "0", "0x10"],
  },
  Book: {
    comment: [
      "Book\t\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
      "\tLEFT TRIGGER - Flip left page. (Hard coded)\t\t\t\t\t\t\t",
      "\tRIGHT TRIGGER - Flip right page. (Hard coded)\t\t\t\t\t\t\t",
      "\t\t\t\t\t\t\t\t",
    ],
    PrevPage: ["0xff", "0xff", "0x0009", "0", "0", "0", "0x8"],
    NextPage: ["0xff", "0xff", "0x000a", "0", "0", "0", "0x8"],
  },
  "Debug overlay": {
    comment: ["Debug overlay\t\t\t\t\t\t\t\t"],
    Console: ["0x29", "0xff", "0xff", "0", "0", "0", "0x10"],
    NextFocus: ["0x0f", "0xff", "0x0200", "0", "0", "0", "0x10"],
    PreviousFocus: [
      "0x2a+0x0f",
      "0x36+0x0f",
      "0xff",
      "0x0100",
      "0",
      "0",
      "0",
      "0x10",
    ],
    Up: ["0xc8", "0xff", "0x0001", "0", "0", "0", "0x10"],
    Down: ["0xd0", "0xff", "0x0002", "0", "0", "0", "0x10"],
    Left: ["0xcb", "0xff", "0x0004", "0", "0", "0", "0x10"],
    Right: ["0xcd", "0xff", "0x0008", "0", "0", "0", "0x10"],
    PageUp: ["0xc9", "0xff", "0xff", "0", "0", "0", "0x10"],
    PageDown: ["0xd1", "0xff", "0xff", "0", "0", "0", "0x10"],
    ToggleMinimize: ["0x3f", "0xff", "0x0020", "0", "0", "0", "0x10"],
    ToggleMove: ["0x3e", "0xff", "0x0080", "0", "0", "0", "0x10"],
    Close: ["0x40", "0xff", "0xff", "0", "0", "0", "0x10"],
    F1: ["0x3b", "0xff", "0xff", "0", "0", "0", "0x10"],
    F2: ["0x3c", "0xff", "0xff", "0", "0", "0", "0x10"],
    F3: ["0x3d", "0xff", "0xff", "0", "0", "0", "0x10"],
    F7: ["0x41", "0xff", "0xff", "0", "0", "0", "0x10"],
    F8: ["0x42", "0xff", "0xff", "0", "0", "0", "0x10"],
    F9: ["0x43", "0xff", "0xff", "0", "0", "0", "0x10"],
    F10: ["0x44", "0xff", "0x2000+0x0100", "0", "0", "0", "0x10"],
    F11: ["0x57", "0xff", "0xff", "0", "0", "0", "0x10"],
    F12: ["0x58", "0xff", "0xff", "0", "0", "0", "0x10"],
    LTrigger: ["0xff", "0xff", "0x0009", "0", "0", "0", "0x10"],
    RTrigger: ["0xff", "0xff", "0x000a", "0", "0", "0", "0x10"],
    Backspace: ["0x0e", "0xff", "0xff", "0", "0", "0", "0x10"],
    Enter: ["0x1c", "0xff", "0xff", "0", "0", "0", "0x10"],
    B: ["0xff", "0xff", "0x2000", "0", "0", "0", "0x10"],
    Y: ["0xff", "0xff", "0x8000", "0", "0", "0", "0x10"],
    X: ["0xff", "0xff", "0x4000", "0", "0", "0", "0x10"],
  },
  Journal: {
    comment: ["Journal\t\t\t\t\t\t\t\t"],
    "Zoom In": ["0xff", "0x8", "0xff", "0", "0", "0", "0x8"],
    "Zoom Out": ["0xff", "0x9", "0xff", "0", "0", "0", "0x8"],
    XButton: ["0xff", "0xff", "0x4000", "0", "0", "0", "0x8"],
    YButton: ["0x14", "0xff", "0x8000", "0", "0", "0", "0x8"],
    TabSwitch: ["0xff", "0xff", "0x0009", "0x000a", "0", "0", "0", "0x8"],
  },
  "TFC mode": {
    comment: ["TFC mode\t\t\t\t\t\t\t\t"],
    CameraZUp: ["0xff", "0xff", "0x000a", "0", "0", "0"],
    CameraZDown: ["0xff", "0xff", "0x0009", "0", "0", "0"],
    WorldZUp: ["0xff", "0xff", "0x0200", "0", "0", "0"],
    WorldZDown: ["0xff", "0xff", "0x0100", "0", "0", "0"],
    LockToZPlane: ["0xff", "0xff", "0x4000", "0", "0", "0"],
  },
  "Debug Map Menu-like mode (but not the actual map menu)": {
    comment: [
      "Debug Map Menu-like mode (but not the actual map menu)\t\t\t\t\t\t\t\t",
    ],
    Look: ["0xff", "0xff", "0x000c", "0", "0", "0", "0x8"],
    "Zoom In": ["0xff", "0xff", "0x000a", "0", "0", "0", "0x8"],
    "Zoom Out": ["0xff", "0xff", "0x0009", "0", "0", "0", "0x8"],
    Move: ["0xff", "0xff", "0x000b", "0", "0", "0", "0x8"],
  },
  Lockpicking: {
    comment: ["Lockpicking\t\t\t\t\t\t\t\t"],
    RotatePick: ["0xff", "0xff", "0x000b", "0", "0", "0", "0x8"],
    RotateLock: ["0xff", "0xff", "0x000c", "0", "0", "0", "0x8"],
    DebugMode: ["0xff", "0xff", "0x4000", "0", "0", "0", "0x8"],
    Cancel: ["0xff", "0xff", "0x2000", "0", "0", "0", "0x8"],
  },
  Favor: {
    comment: ["Favor\t\t\t\t\t\t\t\t"],
    Cancel: ["0x0f", "0x1", "0xff", "0x2000", "0", "0", "0", "0x108"],
  },
};
