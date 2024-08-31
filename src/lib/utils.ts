import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateAge(birthdate: string) {
  const diff: number = new Date().getTime() - new Date(birthdate).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}