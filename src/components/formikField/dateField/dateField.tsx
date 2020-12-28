import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { FormikValues, useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'src/components/materialUI/components/datePicker';
import { Props } from './types';

const DateField = (props: Props) => {
  const { name, helperText, ...others } = props;

  const { t } = useTranslation();
  const formikProps = useFormikContext<FormikValues>();

  const { values, handleBlur, setFieldValue, errors, touched } = formikProps;

  const dateFieldBinders = useMemo(() => {
    const showError = !!touched[name] && !!errors[name];

    return {
      name,
      value: values[name],
      onChange: (date: MaterialUiPickersDate | null) => {
        setFieldValue(
          name,
          !date ? null : date.toString() === 'Invalid Date' ? 'Invalid Date' : date.toISOString(),
        );
      },
      error: showError,
      onBlur: handleBlur,
      helperText: showError ? t(errors[name] as string) : helperText,
    };
  }, [errors, handleBlur, helperText, name, setFieldValue, t, touched, values]);

  return <DatePicker {...dateFieldBinders} {...others} />;
};

export default DateField;
