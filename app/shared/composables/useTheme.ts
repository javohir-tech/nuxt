export const useTheme = () => {
  const theme = useCookie<"light" | "dark">("theme", {
    default: () => "light",
  });

  //   const theme = useState<"light" | "dark">("theme", () => "light");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  return { theme, toggleTheme };
};
