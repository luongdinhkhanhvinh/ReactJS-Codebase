import { Props as DropdownProps } from 'src/components/materialUI/components/dropdown/types';

export interface Props<E> extends DropdownProps<E> {
  name: string;
}
