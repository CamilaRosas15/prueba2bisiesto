import esBisiesto from "./esBisiesto";

describe("Es Bisiestro", () => {
  it("El 4 deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
  it("El 5 no deberia considerarse como año bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
  });
  it("Todo año dividido entre 400 es año bisiesto", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });
  it("Todo año dividido entre 100 pero no por 400 NO es año bisiesto", () => {
    expect(esBisiesto(1700)).toEqual(false);
  });
  it("Todo año dividido entre 4 pero no por 100 es año bisiesto", () => {
    expect(esBisiesto(2008)).toEqual(true);
  });
  it("Todo año NO dividisibles entre 4 NO es año bisiesto", () => {
    expect(esBisiesto(2017)).toEqual(false);
  });
});

