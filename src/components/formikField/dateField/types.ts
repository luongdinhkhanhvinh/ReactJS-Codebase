import { ParsableDate } from '@material-ui/pickers/constants/prop-types';
import { Props as DatePickerProps } from 'src/components/materialUI/components/datePicker/types';

export type Props = Omit<DatePickerProps, 'onChange' | 'value'> & {
  name: string;
  value?: ParsableDate;
};
