export const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {
    console.log('theme initialization failed with error: ',e) 
  }
})();
`;

export function getInitialTheme() {
  if (typeof document !== "undefined") {
    return document.documentElement.getAttribute("data-theme") || "light";
  }
  return "light"; // fallback during SSR
}
