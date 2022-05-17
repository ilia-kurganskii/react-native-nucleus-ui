import fs from 'fs';
import pixelmatch from 'pixelmatch';
const PNG = require('pngjs').PNG;

export async function compareScreenshot(
  testName: string,
  matcher: Detox.NativeMatcher,
  dirName: string
) {
  const actualFilePath = await element(matcher).takeScreenshot(
    `${testName}.png`
  );
  fs.mkdirSync(`${dirName}/__screenshots__`, {
    recursive: true,
  });
  const expectedFilePath = `${dirName}/__screenshots__/${testName}.png`;
  if (fs.existsSync(expectedFilePath)) {
    const expectedImage = PNG.sync.read(fs.readFileSync(expectedFilePath));
    const actualImage = PNG.sync.read(fs.readFileSync(actualFilePath));
    const { width, height } = expectedImage;
    const diff = new PNG({ width, height });
    const number = pixelmatch(
      expectedImage.data,
      actualImage.data,
      diff.data,
      width,
      height,
      {
        threshold: 0.1,
      }
    );
    if (number > 0) {
      fs.writeFileSync(
        `${dirName}/__screenshots__/${testName}.diff.png`,
        PNG.sync.write(diff)
      );
    }
  } else {
    fs.renameSync(actualFilePath, expectedFilePath);
  }
}
