import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { transKeys } from 'src/helpers/i18n';
import { useLogOut } from 'src/hooks/useLogOut';
import { RouteName } from 'src/routers/routeName';
import useStyles from './style';
import { ProfileMenuProps } from './types';

const ProfileMenu = (props: ProfileMenuProps) => {
  const { handleClose, anchorEl } = props;

  const classes = useStyles();
  const { signOut } = useLogOut();
  const { t } = useTranslation();
  const history = useHistory();

  const open = !!anchorEl;

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
      disablePortal
      className={classes.popper}
    >
      <Paper className={classes.paper}>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={open} id='menu-list-grow' className={classes.menuList}>
            <MenuItem
              className={classes.menuItem}
              onClick={() => {
                history.push(RouteName.ACCOUNT_SETTING);
              }}
            >
              {t(transKeys.account_settings)}
            </MenuItem>

            <MenuItem className={classes.menuItem} onClick={() => signOut()}>
              {t(transKeys.logout)}
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
};
export default ProfileMenu;
