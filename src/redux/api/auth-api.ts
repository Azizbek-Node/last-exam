import { ILoginRequest, ILoginResponse } from "@/types";
import { mainApi } from "./index";

const authApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ILoginResponse, ILoginRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
