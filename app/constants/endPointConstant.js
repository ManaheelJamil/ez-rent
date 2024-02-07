export const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT

export const authLogin = `${baseUrl}/auth/login`;
export const authRegister = `${baseUrl}/auth/register`;
export const authSendOpt = `${baseUrl}/auth/send-verification-code`;
export const authVerifyOpt = `${baseUrl}/auth/verify-code`;
export const authForgotPassword = `${baseUrl}/auth/forgot-password`;
export const authResetPassword = `${baseUrl}/auth/reset-password`;

export const showProductEndPoint = `${baseUrl}/products/all`;

export const getUserProfile = `${baseUrl}/users/get-profile`;
export const showCategoryEndPoint = `${baseUrl}/categories/all`;

export const updateWishlistEndPoint = `${baseUrl}/wishlists/add`;

export const allUserWishlistEndPoint = `${baseUrl}/wishlists/all`;
export const updateProfileEndPoint = `${baseUrl}/auth/update-profile`;

export const updatePasswordEndPoint = `${baseUrl}/auth/update-password-with-token`;