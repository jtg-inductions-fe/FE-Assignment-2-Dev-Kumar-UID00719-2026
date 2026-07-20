export enum InputVariant {
    text = 'text',
    email = 'email',
    password = 'password',
}

export const LoginFormFields = {
    EMAIL: 'email',
    PASSWORD: 'password',
} as const;

export enum FormFieldAppearance {
    outline = 'outline',
    fill = 'fill',
}
