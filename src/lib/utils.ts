import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getAgeFromBirthdate = (birthdate: string): number => {
  const birthDate = dayjs(birthdate);
  const today = dayjs();
  return today.diff(birthDate, 'year');
};