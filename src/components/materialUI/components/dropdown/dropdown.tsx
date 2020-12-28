import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FormHelperText from '../formHelperText';
import useStyle from './style';
import { Props } from './types';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { useTranslation } from 'react-i18next';
import useThemeStyles from 'src/themes/styles';
import TextField from '../textField';
import Button from '../button';

const getItemDefault = (item: any) => `${item}`;

const Dropdown = <E extends unknown = string | number>(props: Props<E>) => {
  const classes = useStyle();
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
    canPreview,
    openInModal,
    ...others
  } = props;

  const classesTheme = useThemeStyles();

  const { t } = useTranslation();

  const [itemList, setItemList] = useState<E[]>(() => (Array.isArray(options) ? options : []));
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!Array.isArray(options)) {
      options().then(setItemList);
    }
  }, [options]);

  const valueItem = itemList.find((it) => getItemValue(it) === props.value);

  if (openInModal) {
    return (
      <>
        <TextField
          value={valueItem != null ? getItemLabel(valueItem) : ''}
          InputLabelProps={{
            shrink: canPreview || undefined,
            className: clsx(canPreview && classes.labelPreview),
            ...labelProps,
          }}
          label={label}
          onClick={() => setOpen(true)}
          InputProps={{
            className: clsx(classes.modalModeBaseInput, canPreview && classes.selectPreview),
            readOnly: true,
            endAdornment: (
              <InputAdornment position='end'>
                <ArrowDropDown />
              </InputAdornment>
            ),
          }}
          {...{ error, helperText }}
        />

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          classes={{ paper: classesTheme.dialogPaper }}
          PaperProps={{ classes: { root: classesTheme.paperRounded } }}
          maxWidth='xs'
          fullWidth
        >
          <IconButton className={classesTheme.iconButton} onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>

          <DialogTitle>{label}</DialogTitle>

          <DialogContent>
            {itemList.map((item) => {
              const keyValue = getItemValue(item);
              return (
                <Box mx={{ xs: 0, md: 7 }} my={2} key={keyValue}>
                  <Button
                    fullWidth
                    variant='contained'
                    onClick={() => {
                      props.onChange?.(
                        { target: { name: props.name, value: keyValue } } as any,
                        undefined,
                      );
                    }}
                    classes={{ contained: classes.buttonActive }}
                    color={keyValue === props.value ? 'secondary' : undefined}
                  >
                    {getItemLabel(item)}
                  </Button>
                </Box>
              );
            })}
          </DialogContent>

          <Box textAlign='center' mt={3} mb={4}>
            <Button
              className={classesTheme.minWidthButton}
              onClick={() => setOpen(false)}
              color='secondary'
              variant='contained'
            >
              {t('OK')}
            </Button>
          </Box>
        </Dialog>
      </>
    );
  }

  return (
    <FormControl margin='normal' variant='outlined' fullWidth error={!!error} {...controlProps}>
      <InputLabel
        shrink={canPreview || undefined}
        className={clsx(canPreview && classes.labelPreview)}
        {...labelProps}
      >
        {label}
      </InputLabel>
      <Select label={label} className={clsx(canPreview && classes.selectPreview)} {...others}>
        {itemList.map((item) => {
          const keyValue = getItemValue(item);
          return (
            <MenuItem key={keyValue} value={keyValue} {...itemProps}>
              {getItemLabel(item)}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

Dropdown.defaultProps = {
  openInModal: true,
};

export default Dropdown;
