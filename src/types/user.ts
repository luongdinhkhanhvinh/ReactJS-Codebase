export enum UserStatus {
  UNVERIFIED = 'unverified',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PASSWORD_RESET = 'password_reset',
}

export enum Gender {
  NO_PREFERENCE = '',
  MALE = 'male',
  FEMALE = 'female',
  TRANSGENDER = 'transgender',
  GENDER_NEUTRAL = 'gender neutral',
}

export interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
  userStatus: UserStatus;
  profileImageUrl?: any;
  createdAt: string;
  updatedAt: string;
}

export interface UpdatePasswordRequest {
  code: string;
  password: string;
}

export interface UpdateUserSettingRequest {
  profileImageId?: number;
  firstName?: string;
  lastName?: string;
  currentPassword?: string;
  password?: string;
}