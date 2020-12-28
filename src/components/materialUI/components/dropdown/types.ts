import {
  ExtendButtonBase,
  FormControlTypeMap,
  InputLabelProps,
  MenuItemTypeMap,
  SelectProps,
} from '@material-ui/core';
import {
  DefaultComponentProps,
  OverridableComponent,
} from '@material-ui/core/OverridableComponent';

export interface Props<E> extends Omit<SelectProps, 'error'> {
  controlProps?: DefaultComponentProps<FormControlTypeMap>;
  labelProps?: InputLabelProps;
  canPreview?: boolean;
  itemProps?: OverridableComponent<
    MenuItemTypeMap<{ button: false }, MenuItemTypeMap['defaultComponent']>
  > &
    ExtendButtonBase<MenuItemTypeMap<{ button?: true }, MenuItemTypeMap['defaultComponent']>>;
  options: E[] | (() => Promise<E[]>);
  getItemLabel?: (e: E) => React.ReactNode;
  getItemValue?: (e: E) => string | number;
  error?: boolean;
  helperText?: React.ReactNode;
  openInModal?: boolean;
}
