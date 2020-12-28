import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Image } from 'src/commons/images';
import useStyles from './style';
import { Props } from './types';
import { useHistory } from 'react-router-dom';
import { RouteName } from 'src/routers/routeName';

function Logo(props: Props) {
  const { isWhite = false } = props;

  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();

  return (
    <img
      onClick={() => {
        history.push(RouteName.HOME);
      }}
      className={classes.logo}
      src={isWhite ? Image.LOGO_WHITE : Image.LOGO}
      alt={t('Logo')}
    />
  );
}

export default Logo;
