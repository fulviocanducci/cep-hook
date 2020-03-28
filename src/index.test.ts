import { renderHook } from "@testing-library/react-hooks";

import { useCep } from "./index";
import { Cep } from "./implementations";
import { cepErrorFormatInvalid, cepDataOk } from "./fs";

describe("1 - Hook useCep - Empty value", () => {
  const { result } = renderHook(() => useCep());
  let value = result.current[0];
  const setValue = result.current[1];
  const getZip = result.current[2];

  it("1.1 - Test Cep Initial value Empty", () => {
    expect(value).toBe("");
    expect(setValue).toBeInstanceOf(Object);
    expect(getZip).toBeInstanceOf(Object);
  });

  it("1.2 - Test Method getZip() Return Function cepErrorFormatInvalid()", () => {
    getZip().then(result => {
      const fsCep = cepErrorFormatInvalid();
      expect(result).toBeInstanceOf(Cep);
      expect(result).toStrictEqual(fsCep);
      expect(fsCep.cep).toBe("");
      expect(fsCep.bairro).toBe("");
      expect(fsCep.complemento).toBe("");
      expect(fsCep.gia).toBe("");
      expect(fsCep.ibge).toBe("");
      expect(fsCep.localidade).toBe("");
      expect(fsCep.logradouro).toBe("");
      expect(fsCep.status?.erro).toBe(result.status?.erro);
      expect(fsCep.status?.erro).toBe(true);
      expect(fsCep.uf).toBe("");
      expect(fsCep.unidade).toBe("");
    });
  });
});

describe("2 - Hook useCep - Initial value = 01010000", () => {
  const { result } = renderHook(() => useCep("01010000"));
  let value = result.current[0];
  const setValue = result.current[1];
  const getZip = result.current[2];

  it("2.1 - Test Cep Initial value 01010000", () => {
    expect(value).toBe("01010000");
    expect(setValue).toBeInstanceOf(Object);
    expect(getZip).toBeInstanceOf(Object);
  });

  it("2.2 - Test Method getZip() Return Function cepDataOk(result)", () => {
    getZip().then(result => {
      const fsCep = cepDataOk(result);
      expect(result).toBeInstanceOf(Cep);
      expect(result).toStrictEqual(fsCep);
      expect(fsCep.cep).toBe(result.cep);
      expect(fsCep.bairro).toBe(result.bairro);
      expect(fsCep.complemento).toBe(result.complemento);
      expect(fsCep.gia).toBe(result.gia);
      expect(fsCep.ibge).toBe(result.ibge);
      expect(fsCep.localidade).toBe(result.localidade);
      expect(fsCep.logradouro).toBe(result.logradouro);
      expect(fsCep.status).toBe(result.status);
      expect(fsCep.uf).toBe(result.uf);
      expect(fsCep.unidade).toBe(result.unidade);
    });
  });
});

describe("3 - Hook useCep - Initial value = 00000000 invalid", () => {
  const { result } = renderHook(() => useCep("00000000"));
  let value = result.current[0];
  const setValue = result.current[1];
  const getZip = result.current[2];

  it("3.1 - Test Cep Initial value 00000000 invalid", () => {
    expect(value).toBe("00000000");
    expect(setValue).toBeInstanceOf(Object);
    expect(getZip).toBeInstanceOf(Object);
  });

  it("3.2 - Test Method getZip() Return Function cepErrorFormatInvalid()", () => {
    getZip().then(result => {
      const fsCep = cepErrorFormatInvalid();
      console.error(fsCep);
      expect(result).toBeInstanceOf(Cep);
      expect(result).toStrictEqual(fsCep);
      expect(fsCep.status?.erro).toBe(result.status?.erro);
      expect(fsCep.status?.erro).toStrictEqual(true);
      expect(fsCep.status?.erroText).toBe(result.status?.erroText);
      expect(fsCep.status?.erroText).toEqual("Formato inválidosss");
    });
  });
});
