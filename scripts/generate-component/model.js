const fs = require('fs');
const path = require('path');

const createFromModel = (model, componentName) => {
  const newComponentDirectory = path.join(
    process.cwd(),
    `src/components/${componentName}`,
  );
  const modelDirectory = path.join(process.cwd(), `src/components/${model}`);
  const modelFiles = fs.readdirSync(modelDirectory);

  return fs.cp(
    modelDirectory,
    newComponentDirectory,
    { recursive: true },
    (error) => {
      if (error) {
        console.log(error);
      }
      modelFiles.forEach((file) => {
        if (file === 'index.ts' || !file.includes(model)) return;
        fs.renameSync(
          path.join(newComponentDirectory, file),
          path.join(newComponentDirectory, file.replace(model, componentName)),
        );
      });
    },
  );
};

module.exports = createFromModel;
