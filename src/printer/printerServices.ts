import { createPrinter } from '../services/readPrinter';

export function printerServices() {
  function getPrinter() {
    return createPrinter();
  }

  return { getPrinter };
}
