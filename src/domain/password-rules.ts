export interface PasswordRulesResult{
    lengthOk: boolean;
    upperOk: boolean;
    lowerOk: boolean;
    numberOk: boolean;
    symbolOk: boolean;
}

export function passwordRules(password:string): PasswordRulesResult {
    return {
        lengthOk: password.length >= 8,
        upperOk: /[A-Z]/.test(password),
        lowerOk: /[a-z]/.test(password),
        numberOk: /[0-9]/.test(password),
        symbolOk: /[^A-Za-z0-9]/.test(password),
    };
}