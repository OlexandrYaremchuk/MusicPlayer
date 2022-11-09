import React from 'react';
import renderer from 'react-test-renderer';

import CreatePlaylist from '..\src\component\CreatePlaylist.js';

describe('<CreatePlaylist />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<CreatePlaylist />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });