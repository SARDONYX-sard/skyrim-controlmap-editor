import { atom, useRecoilState } from "recoil";

const initState = atom({
  key: "global/message",
  default: "",
});

export function useMsg() {
  const [msg, setMsg] = useRecoilState(initState);
  return { msg, setMsg };
}
