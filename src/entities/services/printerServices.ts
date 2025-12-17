import { createPrinter } from '../printers/readPrinter';

export function printerServices() {
  function getPrinter() {
    return createPrinter();
  }

  return { getPrinter };
}
