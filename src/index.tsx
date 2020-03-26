import * as React from "react";
import {
  cepErrorInvalid,
  cepDataOk,
  cepErrorCatch,
  cepRequest,
  cepTestFormatValid,
  cepErrorFormatInvalid
} from "./fs";
import { ICep } from "./interfaces";

export function useCep(): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  () => Promise<ICep>
] {
  const [value, setValue] = React.useState<string>("");
  const getZip = async (): Promise<ICep> => {
    if (cepTestFormatValid(value)) {
      try {
        const response = await cepRequest(value);
        if (response.ok) {
          const data = await response.json();
          if (data.hasOwnProperty("erro")) {
            return cepErrorInvalid();
          } else {
            return cepDataOk(data);
          }
        }
      } catch (e) {
        return cepErrorCatch(e);
      }
      return cepErrorInvalid();
    }
    return cepErrorFormatInvalid();
  };
  return [value, setValue, getZip];
}
