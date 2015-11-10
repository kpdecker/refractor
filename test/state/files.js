import reducer, {loadOriginal} from '../../src/state/files';

import {expect} from 'chai';

describe('files state', function() {
  describe('reducers', function() {
    it('should reset on load original', function() {
      expect(reducer(undefined, loadOriginal('file!')))
          .to.eql({original: 'file!'});
    });
    it('should ignore other actions', function() {
      expect(reducer({foo: 'bar'}, {})).to.eql({foo: 'bar'});
    });
  });
});
