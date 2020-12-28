import {
  FormControlLabelProps,
  FormControlTypeMap,
  InputLabelProps,
  RadioGroupProps,
} from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export interface Props<E> extends RadioGroupProps {
  controlProps?: OverridableComponent<FormControlTypeMap>;
  labelProps?: InputLabelProps;
  itemProps?: FormControlLabelProps;
  options: E[] | (() => Promise<E[]>);
  getItemLabel?: (e: E) => React.ReactNode;
  getItemValue?: (e: E) => string | number;
  label?: string;
  error?: boolean;
  helperText?: React.ReactNode;
}
