import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio as RadioControl,
  RadioGroup,
} from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import FormHelperText from '../formHelperText';
import useStyles from './style';
import { Props } from './types';

const getItemDefault = (item: any) => `${item}`;

const Radio = <E extends unknown = string | number>(props: Props<E>) => {
  const classes = useStyles();
  const {
    label,
    controlProps,
    labelProps,
    options,
    itemProps,
    getItemValue = getItemDefault,
    getItemLabel = getItemDefault,
    error,
    helperText,
    ...others
  } = props;

  const [itemList, setItemList] = useState<E[]>(() => (Array.isArray(options) ? options : []));

  useEffect(() => {
    if (!Array.isArray(options)) {
      options().then(setItemList);
    }
  }, [options]);

  return (
    <FormControl fullWidth error={!!error} {...controlProps}>
      <FormLabel {...labelProps}>{label}</FormLabel>
      <RadioGroup {...others}>
        {itemList.map((item) => {
          const keyValue = getItemValue(item);
          return (
            <FormControlLabel
              key={keyValue}
              value={keyValue}
              control={
                <RadioControl
                  checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                  icon={<span className={classes.icon} />}
                />
              }
              label={getItemLabel(item)}
              {...itemProps}
            />
          );
        })}
      </RadioGroup>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Radio;
