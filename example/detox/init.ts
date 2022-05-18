import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import fs from 'fs';
import jestExpect from 'expect';

const toMatchImageSnapshot = configureToMatchImageSnapshot({});

function readFileAndToMatchImageSnapshot(filePath: string, ...args: any[]) {
  // @ts-ignore
  return toMatchImageSnapshot.call(this, fs.readFileSync(filePath), ...args);
}

jestExpect.extend({
  toMatchImageSnapshot: readFileAndToMatchImageSnapshot,
});
