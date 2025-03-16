export class NumberHelper {
  static formatPhoneNumber(inputValue: string): string {
    if (!inputValue) {
      return "";
    }

    const numericValue = inputValue.replace(/\D/g, "");

    if (numericValue.length === 0) {
      return "";
    }

    if (numericValue.length <= 2) {
      return `(${numericValue}`;
    }

    if (numericValue.length <= 7) {
      return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
    }

    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(
      2,
      7
    )}-${numericValue.slice(7, 11)}`;
  }

  static formatCurrency(value: string): string {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length === 0) {
      return "";
    }

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formatter.format(parseInt(numericValue) / 100);
  }

  static parseCurrency(value: string): number {
    const numericValue = value.replace(/\D/g, "");
    return numericValue ? parseInt(numericValue) / 100 : 0;
  }
}
