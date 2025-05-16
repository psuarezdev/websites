import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistance } from "date-fns";
import { es } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatJobDate(startDate: Date, endDate?: Date) {
  const formattedStart = capitalize(format(startDate, "MMMM yyyy", { locale: es }));
  const formattedEnd = endDate
    ? capitalize(format(endDate, "MMMM yyyy", { locale: es }))
    : "Actualidad";

  const distance = formatDistance(startDate, endDate ?? new Date(), {
    locale: es,
    addSuffix: true,
  });

  return `${formattedStart} - ${formattedEnd}`; // (${distance})
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
