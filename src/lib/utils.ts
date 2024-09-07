import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAgeFromBirthdate(birthdate: string) {
  const diff: number = new Date().getTime() - new Date(birthdate).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

export function getDifferenceBetweenDates(startDate: string, endDate: string) {
  const diffInMs = new Date(endDate).getTime() - new Date(startDate).getTime();

  const msInDay = 1000 * 60 * 60 * 24;
  const msInYear = msInDay * 365.25;

  const diffInDays = Math.floor(diffInMs / msInDay);
  const diffInYears = Math.floor(diffInMs / msInYear);
  const diffInMonths = Math.floor(diffInMs / (msInDay * 30.44));

  if(diffInYears > 0) return `${diffInYears} año${diffInYears > 1 ? 's' : ''}`;
  if(diffInMonths > 0) return `${diffInMonths} mes${diffInMonths > 1 ? 'es' : ''}`;
  return `${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
}