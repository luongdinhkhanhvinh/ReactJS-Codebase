import { FormikValues, useFormikContext } from 'formik';
import * as React from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from 'src/components/materialUI/components/textField';
import { Props } from './types';

const FormTextField = (props: Props) => {
  const { name = '' } = props;

  const formikProps = useFormikContext<FormikValues>();
  const { t } = useTranslation();

  const formikBinders = useMemo(() => {
    if (!formikProps) {
      return undefined;
    }

    const { values, handleChange, handleBlur, errors, touched } = formikProps;
    const showError = !!touched[name] && !!errors[name];

    return {
      value: values[name],
      onChange: handleChange,
      error: showError,
      onBlur: handleBlur,
      helperText: showError ? t(errors[name] as string) : undefined,
    };
  }, [formikProps, name, t]);

  return <TextField {...formikBinders} {...props} />;
};

export default FormTextField;
