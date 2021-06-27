/**@format */

import { AxiosError } from "axios";
import { BitlyClient, isBitlyErrResponse } from "bitly";

const bitly = new BitlyClient("ab0167dc9bced4b559efa4abef2a451c7b6cd6ac", {});

export async function init(link) {
  let result;
  try {
    result = await bitly.shorten(link);
  } catch (error) {
    if (isBitlyErrResponse(error)) {
      // Inferred type by TS is `BitlyErrorResponse`
      console.log(`Bitly error: ${error.description}`);
    } else if (error.isAxiosError) {
      // Infererred type is `any`, but you can cast to AxiosError safely
      const axiosError = error as unknown as AxiosError;
      console.log(`AxiosError:`, axiosError.toJSON());
    }
  }
  return result;
}
