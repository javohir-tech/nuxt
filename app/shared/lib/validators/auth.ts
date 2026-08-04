export function validateEmail(email: string): string | null {
  if (!email.includes('@')) return "Email noto'g'ri";
  if (email.trim().length === 0) return "Email bo'sh bo'lishi mumkin emas";
  return null; 
}

export function validatePassword(password: string): string | null {
  if (password.trim().length === 0) return "Parol bo'sh bo'lishi mumkin emas";
  if (password.length < 6) return "Parol kamida 6 ta belgidan iborat bo'lishi kerak";
  return null;
}