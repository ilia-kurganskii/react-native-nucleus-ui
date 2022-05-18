import { Expect as BaseExpect } from 'expect';
import { MatchImageSnapshotOptions } from 'jest-image-snapshot';

interface CustomMatchers<R = unknown> extends BaseExpect<R> {
  toMatchImageSnapshot(options?: MatchImageSnapshotOptions): R;
}

declare module 'expect' {
  interface Expect extends CustomMatchers {}
  interface Matchers<R> extends CustomMatchers<R> {}
  interface InverseAsymmetricMatchers extends CustomMatchers {}
}
