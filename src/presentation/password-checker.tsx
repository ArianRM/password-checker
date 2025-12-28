import { useState } from "react";
import { evaluatePassword } from "../application/evaluatePassword";

export default function PasswordChecker() {
  const [password, setPassword] = useState<string>("");

  const result = evaluatePassword(password);

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", fontFamily: "system-ui" }}>
      <h2>🔐 Free Password Strength Checker</h2>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Escribe una contraseña..."
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 10,
          border: "1px solid #ccc",
        }}
      />

      <div style={{ marginTop: 12, padding: 12, border: "1px solid #ddd", borderRadius: 12 }}>
        <strong>Nivel:</strong> {result.level} ({result.score}/5)
      </div>

      <ul style={{ marginTop: 12 }}>
        <li>{result.lengthOk ? "✅" : "❌"} 8+ caracteres</li>
        <li>{result.upperOk ? "✅" : "❌"} 1 mayúscula</li>
        <li>{result.lowerOk ? "✅" : "❌"} 1 minúscula</li>
        <li>{result.numberOk ? "✅" : "❌"} 1 número</li>
        <li>{result.symbolOk ? "✅" : "❌"} 1 símbolo</li>
      </ul>
    </div>
  );
}