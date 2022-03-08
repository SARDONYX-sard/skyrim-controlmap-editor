import { useMutation, useQuery, useQueryClient } from "react-query";
import { readUserKey } from "../api/config-io";
import {
  DefaultKeyConfig,
  defaultKeyConfig,
} from "../constants/default-key-config";
import { useQState } from "../shared/UseQState";
import { useMsg } from "./useMsg";

export function useUserKey() {
  // const queryClient = useQueryClient();

  // const { data } = useQuery("read-user-key", async () => defaultKeyConfig);
  // const { setMsg } = useMsg();

  // let userKey: DefaultKeyConfig;
  // if (data) {
  //   userKey = data;
  //   setMsg("");
  // } else {
  //   userKey = defaultKeyConfig;
  //   setMsg(
  //     "Failed to load settings. Falling back to default user key settings."
  //   );
  // }

  // // Mutations
  // const mutation = useMutation(
  //   async (newUserKey: DefaultKeyConfig) => {
  //     queryClient.setQueryData("read-user-key", newUserKey);
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries("read-user-key");
  //     },
  //   }
  // );

  // const setUserKey = () => {
  //   const new_data = userKey;
  //   mutation.mutate(new_data);
  // };

  // return [userKey, setUserKey] as const;

  const [userKey, setUserKey] = useQState(["user-key"], defaultKeyConfig);
  return [userKey];
}
