export interface ChangePasswordModalProps {
    open: boolean;
    onClose: () => void;
  }
  
  export interface PasswordFieldsType {
    name: string;
    label: string;
  }
  
  export interface ChangePasswordValues {
    currentPassword: string;
    password: string;
    confirmPassword: string;
  }