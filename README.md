# Entropy-ds

Welcome to Entropy-ds, a powerful Design System component library built with React.js, Styled Components, Rollup.js, Storybook, TypeScript, Prettier, and ESLint. This library was bootstrapped using the [create-react-ds](https://github.com/fristaildg/create-react-ds) template.

## Features

- A comprehensive collection of reusable UI components for building modern web applications.
- Built with React.js, allowing for easy integration and customization.
- Utilizes Styled Components for flexible and maintainable styling.
- Bundled with Rollup.js to optimize the library size and improve performance.
- Includes a Storybook setup for interactive component development and documentation.
- Implements TypeScript for type safety and improved developer experience.
- Integrated with Prettier for code formatting and ESLint for code linting.

## Installation

To use Entropy-ds in your project, you can install it via npm or yarn:

```bash
npm install entropy-ds
# or
yarn add entropy-ds
```

## Usage

To start using Entropy-ds components in your React application, you need to import them as follows:

```jsx
import React from 'react';
import { Button, Input } from 'entropy-ds';

function App() {
  return (
    <div>
      <Button variant="primary">Click me!</Button>
      <Card>
        <Input placeholder="Enter your name" />
      </Card>
    </div>
  );
}

export default App;
```

Make sure to wrap your application with the appropriate theme provider and any other necessary setup. Refer to the documentation for further details on the specific components and configurations available in Entropy-ds.

## Development

To contribute to the development of Entropy-ds, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/fristaildg/entropy-ds.git
   ```

2. Install the dependencies:

   ```bash
   cd entropy-ds
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:6006](http://localhost:6006) in your browser to view the Storybook documentation and interact with the components.

5. Modify the components in the `src` directory and create stories in the `stories` directory to showcase them in Storybook.

6. Run tests:

   ```bash
   npm run test
   ```

7. Build the library:

   ```bash
   npm run build
   ```

8. Publish the library to npm:

   ```bash
   npm publish
   ```

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Entropy-ds is built upon the fantastic work of the open-source community and the following libraries:

- [React.js](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Rollup.js](https://rollupjs.org/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## Contributing

Contributions are welcome! If you find any bugs or want to suggest improvements, please open an issue or submit a pull request. Make sure to follow the project's code of conduct.

## Support

For any questions or assistance, feel free to reach out to the project maintainers via GitHub issues or the official documentation.

Happy coding with Entropy-ds!