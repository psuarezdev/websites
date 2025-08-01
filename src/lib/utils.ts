import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DateTime } from 'luxon';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getAgeFromBirthdate = (birthdate: string): number => {
  const birthDate = DateTime.fromISO(birthdate);
  const today = DateTime.now();
  return today.diff(birthDate, 'years').years | 0;
};

export const isDecimalAboveHalf = (num: number): boolean => {
  return num % 1 !== 0 && num % 1 > 0.5;
};

export const stringToTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
