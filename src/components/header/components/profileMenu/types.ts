import { ReferenceObject } from 'popper.js';

export interface ProfileMenuProps {
  handleClose: (event: React.MouseEvent<EventTarget>) => void;
  anchorEl?: null | ReferenceObject | (() => ReferenceObject);
}
