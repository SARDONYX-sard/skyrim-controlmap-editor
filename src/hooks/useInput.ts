import { atom, useRecoilState } from "recoil";

const initState = atom({
  key: "global/input",
  default: "",
});

export function useInput() {
  const [input, setInput] = useRecoilState(initState);
  return { input, setInput };
}
