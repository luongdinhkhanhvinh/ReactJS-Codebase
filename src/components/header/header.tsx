import { Box, Grid, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { transKeys } from 'src/helpers/i18n';
import useUserProfile from 'src/hooks/useUserProfile';
import Avatar from '../materialUI/components/avatar';
import ProfileMenu from './components/profileMenu';
import useStyles from './style';
import { HeaderProps } from './types';

const menuId = 'primary-search-account-menu';

function Header(props: HeaderProps) {
  const { title } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const { data: userProfile } = useUserProfile();

  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  const handleToggle = (event: React.MouseEvent<Element, globalThis.MouseEvent>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fullName: string = `${userProfile?.firstName} ${userProfile?.lastName}`;
  const subName: string | undefined = userProfile?.firstName?.charAt(0);

  return (
    <>
      <React.Fragment>
        <AppBar
          classes={{ positionFixed: classes.positionFixed }}
          className={classes.appbar}
          position='fixed'
          elevation={0}
        >
          <Toolbar className={classes.toolbar}>
            <MenuRoundedIcon className={classes.menuIcon} />

            <Box className={classes.titleMenu}>Menu</Box>

            <Grid container spacing={1} alignItems='center'>
              <Grid item xs className={classes.gridTitle}>
                <p className={classes.title}>{title}</p>
              </Grid>

              <Grid item>
                <Grid>
                  <Avatar alt={fullName} src={userProfile?.profileImageUrl} onClick={handleToggle}>
                    {subName}
                  </Avatar>
                </Grid>

                <Grid>
                  <IconButton
                    edge='end'
                    aria-label={t(transKeys.account_of_current_user)}
                    aria-controls={menuId}
                    aria-haspopup='true'
                    onClick={handleToggle}
                    color='inherit'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
      <ProfileMenu anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
}

export default Header;
