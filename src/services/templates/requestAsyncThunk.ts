import axios from "./axios";
import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const request = ({ _url, exact, ...rest }: any) => {
  return createAsyncThunk(
    _url + exact,
    async (params: any, { rejectWithValue }: any) => {
      let url = _url || "";

      if (params?.urlParams) {
        url += params?.urlParams;
        delete params?.urlParams;
      }

      try {
        const result = await axios({
          params,
          url,
          ...rest,
        });

        return result;
      } catch (err: any) {
        const { response } = err;
        return rejectWithValue({
          status: response?.status,
          message: response?.data,
          id: nanoid(),
        });
      }
    }
  );
};

export default request;
