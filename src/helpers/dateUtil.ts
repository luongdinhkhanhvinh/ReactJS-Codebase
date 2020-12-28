import { formatDistanceToNow, differenceInDays, format } from 'date-fns';

export class DateUtil {
  public formatDiffFromNow(value: string): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);

    if (differenceInDays(new Date(), date) > 1) {
      return format(date, 'dd/MM/y hh:mm a');
    }

    return formatDistanceToNow(date);
  }
}

export const dateUtil = new DateUtil();
