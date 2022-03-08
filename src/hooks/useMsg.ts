import { useQState } from "../shared/UseQState";

export function useMsg(message = "") {
  const [msg, setMsg] = useQState(["message"], message);

  return { msg, setMsg };
}
