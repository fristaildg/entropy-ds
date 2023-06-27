const fs = require('fs');
const path = require('path');
const {
  indexTemplate,
  componentTemplate,
  storyTemplate,
} = require('./file-templates');
const chalk = require('chalk');
const { program } = require('commander');
const createFromModel = require('./model');

program
  .usage('[OPTIONS]...')
  .argument('[string]', 'Name of the component')
  .option('-m, --model <string>', 'Name of the existing component the new component will be based on')
  .parse(process.argv);

const componentName = program.args[0];
const model = program.opts().model;

const createFolder = () => {
  return fs.mkdirSync(
    path.join(process.cwd(), 'src/components', componentName),
    { recursive: true },
  );
};

const createFile =
  (folder) =>
  ({ path, content }) => {
    const componentFolder = folder;

    fs.writeFile(`${componentFolder}/${path}`, content, (error) => {
      if (error) console.log(error);
    });
  };

const generateComponent = async () => {
  if (model) {
    return createFromModel(model, componentName);
  }
  const folder = createFolder();
  const createFileInFolder = createFile(folder);
  const filesToCreate = [
    {
      path: 'index.ts',
      content: indexTemplate(componentName),
    },
    {
      path: `${componentName}.tsx`,
      content: componentTemplate(componentName),
    },
    {
      path: `${componentName}.stories.tsx`,
      content: storyTemplate(componentName),
    },
  ];

  filesToCreate.forEach(({ path, content }) => {
    createFileInFolder({ path, content });
  });
};

generateComponent();

console.log(chalk.green.bold(`${componentName} created!`));
