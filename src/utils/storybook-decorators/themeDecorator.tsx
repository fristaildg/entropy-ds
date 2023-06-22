import { Story } from '@storybook/react';
import { Button } from '../../components/Button';
import { useEffect } from 'react';
import { ThemeProvider } from '../../components/ThemeProvider';
import { IconsProvider } from '../../components/Icon';
import useThemes from '../../hooks/useThemes';

export const themeDecorator = (Story: Story) => {
  const { switchTheme, theme } = useThemes();

  const handleSwitchTheme = () => {
    if (theme.name === 'default') return switchTheme('dark');
    switchTheme('default');
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.background[0];
    const docsStory = document.querySelector<HTMLElement>('.docs-story');
    if (docsStory) {
      docsStory.style.backgroundColor = theme.colors.background[0];
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <IconsProvider />
      <div>
        <Button onClick={handleSwitchTheme} variant="ghost" size="small">
          Switch theme
        </Button>
        <Story />
      </div>
    </ThemeProvider>
  );
};
