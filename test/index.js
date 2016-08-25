import { assert } from 'chai';

import clipt from '../src';

describe('Clipt Tests', () => {
  it('ClipperLib Is Available', () => {
      assert.isNotNull(clipt.ClipperLib);
  });
});