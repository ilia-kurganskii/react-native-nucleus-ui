import type { Expect as BaseExpect } from 'expect';
import type Detox from 'detox';
import type { MatchImageSnapshotOptions } from 'jest-image-snapshot';

type CustomMatchers<R = unknown> =
  | BaseExpect<R>
  | Detox.Expect<R>
  | {
      toMatchImageSnapshot(options?: MatchImageSnapshotOptions): R;
    };

declare module 'expect' {
  interface Expect extends CustomMatchers {}
  interface Matchers<R> extends CustomMatchers<R> {}
  interface InverseAsymmetricMatchers extends CustomMatchers {}
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}
