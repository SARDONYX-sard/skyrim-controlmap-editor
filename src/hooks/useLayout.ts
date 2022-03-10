import { atom, useRecoilState } from "recoil";

const initState = atom<"default" | "shift">({
  key: "global/layout",
  default: "default",
});

export function useLayout() {
  const [layoutName, setLayoutInner] = useRecoilState(initState);

  const setLayout = () => {
    setLayoutInner((layout) => (layout === "default" ? "shift" : "default"));
  };

  return { layoutName, setLayout };
}
