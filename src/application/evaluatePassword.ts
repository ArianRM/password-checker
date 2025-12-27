import { passwordRules } from "../domain/password-rules";
import type { PasswordRulesResult } from "../domain/password-rules";

export interface PasswordEvaluation extends PasswordRulesResult {
  score: number;
  level: "Débil" | "Media" | "Fuerte";
}

export function evaluatePassword(password: string): PasswordEvaluation {
  const rules = passwordRules(password);
  const score = Object.values(rules).filter(Boolean).length;

  let level: PasswordEvaluation["level"] = "Débil";
  if (score >= 4) level = "Fuerte";
  else if (score >= 3) level = "Media";

  return { ...rules, score, level };
}