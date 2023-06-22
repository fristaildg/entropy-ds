import { useState } from 'react';
import { defaultTheme } from '../theme';

const darkTheme = {
  ...defaultTheme,
  colors: defaultTheme.colors.modes?.['dark'],
  name: 'dark',
};

const useThemes = (themes = [defaultTheme, darkTheme]) => {
  const [theme, setTheme] = useState<any>(themes[0]);

  const switchTheme = (themeName: string) => {
    const selectedTheme = themes.find((th) => th.name === themeName);
    if (selectedTheme) setTheme(selectedTheme);
  };

  return {
    theme,
    switchTheme,
  };
};

export default useThemes;
