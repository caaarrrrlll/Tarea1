function convertirLibrasAKilogramos(libras: number): number {

    const factorConversion: number = 0.453592;
    const kilogramos: number = libras * factorConversion;
    return kilogramos;
  }
  
  const libras: number = 150;
  const kilogramosConvertidos: number = convertirLibrasAKilogramos(libras);
  console.log(`${libras} libras son aproximadamente ${kilogramosConvertidos.toFixed(4)} kilogramos`);
  

  