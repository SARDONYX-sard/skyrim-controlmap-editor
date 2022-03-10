import { atom, useRecoilState } from "recoil";
import { defaultUserKeys, UserKeys } from "../constants/default-user-keys";

const initState = atom<UserKeys>({
  key: "global/userkey",
  default: defaultUserKeys,
});

export function useUserKey() {
  const [userKey, setUserKey] = useRecoilState(initState);
  return { userKey, setUserKey };
}
