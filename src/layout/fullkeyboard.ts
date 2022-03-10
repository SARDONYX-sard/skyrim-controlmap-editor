const fullKeyboardLayout = {
  /**
   * Layout by:
   * Sterling Butters (https://github.com/SterlingButters)
   */
  layout: {
    default: [
      "{escape} F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12",
      "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
      "{tab} q w e r t y u i o p [ ] \\",
      "{capslock} a s d f g h j k l ; ' {enter}",
      "{shiftleft} z x c v b n m , . / {shiftright}",
      "{controlleft} {metaleft} {altleft} {space} {altright} {controlright}",
    ],
    shift: [
      "{escape} F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12",
      "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
      "{tab} Q W E R T Y U I O P { } |",
      '{capslock} A S D F G H J K L : " {enter}',
      "{shiftleft} Z X C V B N M < > ? {shiftright}",
      "{controlleft} {metaleft} {altleft} {space} {altright} {controlright}",
    ],
  },
  display: {
    "{escape}": "esc ⎋",
    "{tab}": "tab ⇥",
    "{backspace}": "backspace ⌫",
    "{enter}": "enter ↵",
    "{capslock}": "caps lock ⇪",
    "{shiftleft}": "shift ⇧",
    "{shiftright}": "shift ⇧",
    "{controlleft}": "ctrl ⌃",
    "{controlright}": "ctrl ⌃",
    "{altleft}": "alt ⌥",
    "{altright}": "alt ⌥",

    // "{metaleft}": "cmd ⌘",
    // "{metaright}": "cmd ⌘",
    "{metaleft}": "win ⌘",
    "{metaright}": "win ⌘",
  },
};

const keyboardControlPadLayout = {
  layout: {
    default: [
      "{prtscr} {scrolllock} {pause}",
      "{insert} {home} {pageup}",
      "{delete} {end} {pagedown}",
    ],
  },
};

const keyboardArrowsLayout = {
  layout: {
    default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}"],
  },
};

const keyboardNumPadLayout = {
  layout: {
    default: [
      "{numlock} {numpaddivide} {numpadmultiply}",
      "{numpad7} {numpad8} {numpad9}",
      "{numpad4} {numpad5} {numpad6}",
      "{numpad1} {numpad2} {numpad3}",
      "{numpad0} {numpaddecimal}",
    ],
  },
};

const keyboardNumPadEndLayout = {
  layout: {
    default: ["{numpadsubtract}", "{numpadadd}", "{numpadenter}"],
  },
};

export {
  fullKeyboardLayout,
  keyboardControlPadLayout,
  keyboardArrowsLayout,
  keyboardNumPadLayout,
  keyboardNumPadEndLayout,
};
