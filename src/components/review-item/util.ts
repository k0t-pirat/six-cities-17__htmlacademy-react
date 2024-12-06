const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export enum DateFormatType {
  Attribue = 'Attribute',
  Value = 'Value',
}

export const formatDate = (rawDate: string, formatType: DateFormatType) => {
  if (formatType === DateFormatType.Attribue) {
    return rawDate.split('T')[0];
  }
  if (formatType === DateFormatType.Value) {
    const date = new Date(rawDate);
    return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  }

  return rawDate;
};
