import { format, Locale } from 'date-fns';

/**
 * The default ARIA label for previous month grid.
 */
export function labelGrid(month: Date, options?: { locale?: Locale }): string {
  return format(month, 'LLLL y', options);
}
