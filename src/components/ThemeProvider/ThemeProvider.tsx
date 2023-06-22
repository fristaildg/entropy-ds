import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import themeDefault from '../../theme/default';
import { Theme } from '../../types';

type ThemeProviderProps = {
  theme?: Theme;
};

const ThemeProvider: FC<PropsWithChildren & ThemeProviderProps> = ({
  children,
  theme = themeDefault,
}) => {
  return <ScThemeProvider theme={theme}>{children}</ScThemeProvider>;
};

export default ThemeProvider;
