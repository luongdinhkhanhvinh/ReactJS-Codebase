import { FormikValues, useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from 'src/components/materialUI/components/dropdown';
import { Props } from './types';

const DropdownField = <E extends unknown = string | number>(props: Props<E>) => {
  const { name, helperText } = props;

  const { t } = useTranslation();
  const formikProps = useFormikContext<FormikValues>();

  const { values, handleChange, handleBlur, errors, touched } = formikProps;

  const dropdownBinders = useMemo(() => {
    const showError = !!touched[name] && !!errors[name];

    return {
      value: values[name] == null ? '' : values[name],
      onChange: handleChange,
      onBlur: handleBlur,
      error: showError,
      helperText: showError ? t(errors[name] as string) : helperText,
    };
  }, [errors, handleBlur, handleChange, helperText, name, t, touched, values]);

  return <Dropdown {...dropdownBinders} {...props} />;
};

export default DropdownField;
