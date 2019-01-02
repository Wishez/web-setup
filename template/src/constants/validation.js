export const required = value =>
  value ? undefined : "Нельзя просто так взять и оставить это поле пустым";
export const selectRequired = value =>
  value ? undefined : "Нам необходим ваш выбор";

export const regex_email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// 'Вы можете использовать кириллические и латинские буквы, с первой строчной буквой и прописными следующие за ней.';
export const firstMiddleLastNames = /^[A-ZА-ЯЁ][a-zа-яё]*$/i;
// 'В название допустимо использование пробелов, символа "-", кириллические и латинские буквы от a-z, от а-я.';
export const regex_name = /^[a-zA-Zа-яА-Я\s\-]*$/i;
// 'Номер дома может состоять из цифр, вместе с кириллическими или латинскими буквами.';
export const regex_houseNum = /^[\w0-9]*$/i;
export const regex_passport = /^[A-ZА-Я0-9\-]*$/i;
// 'Серия и номер пасспорта может содержать цифры, символ "-" и кириллические или латинские буквы верхнего регистра ー А-Я, A-Z.';
export const regex_birthday = /^([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/([1-2][019][0-9][0-9])$/i;
// 'Используйте цифры от 0 до 9. Допустимо помещать их в скобки (), использовать пробелы, или ставить между цифрами тире "-".';
export const regex_phone = /^\+?[0-9\s\-)(]*$/i;
// 'Вы можете использовать кириллические и латинские буквы от a-z, от а-я, как в верхнем, так и в нижнем регистре и знак тире "-".';
export const regex_full_name = /^\+?([A-Za-zА-Я-а-яёЁ\-]*\s)([ёЁA-Za-zА-Я-а-я\-]*)(\s[A-Za-zА-Я-а-я\-]*)?$/i;

// 'Введите целое число, либо с десятичной дробью.';
export const regex_number = /^\+?([0-9]*).?([0-9]{1,2})?$/i;

const createMessage = (nameOfSmth, min, max) =>
  `Название ${nameOfSmth} должно содержать не меньше ${min} символов и не больше ${max}.`;
const createLengthMessage = (nameOfSmth, min, max) =>
  `Минимальная длина ${nameOfSmth} — ${min} символа. Максимальная — ${max} символов.`;

export const cityLength = value =>
  value && !(value.length < 3) ? undefined : createMessage("города", 3, 50);
export const regionLength = value =>
  value && !(value.length < 5) ? undefined : createMessage("области", 5, 50);
export const streetLength = value =>
  value && !(value.length < 3) ? undefined : createMessage("улицы", 3, 50);

export const fullNameLength = value =>
  value && value.length < 150 && value.length > 5
    ? undefined
    : createLengthMessage("полного имени", 5, 150);
export const nameLength = value =>
  value && !(value.length < 2)
    ? undefined
    : createLengthMessage("имени", 2, 24);
export const lastNameLength = value =>
  value && value.length >= 2
    ? undefined
    : createLengthMessage("фамилии", 2, 30);
export const middleNameLength = value =>
  value && value.length >= 2
    ? undefined
    : createLengthMessage("отчества", 2, 30);
export const houseNumLength = value =>
  value && value.length > 0
    ? undefined
    : createLengthMessage("номера дома", 1, 7);
export const passportLength = value =>
  value && value.length > 6
    ? undefined
    : createLengthMessage("пасспорта", 7, 15);
export const phoneLength = value =>
  value && value.length > 0
    ? undefined
    : createLengthMessage("номера телефон", 11, 24);
