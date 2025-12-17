import { ThermalPrinter, PrinterTypes, CharacterSet, BreakLine } from 'node-thermal-printer';

export function createPrinter() {
  return new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: 'tcp://192.168.100.52',
    characterSet: CharacterSet.PC852_LATIN2,
    removeSpecialCharacters: false,
    lineCharacter: '=',
    breakLine: BreakLine.WORD,
  });
}
