import React, {Component} from 'react';
import {renderers} from '@rndm/render';
import {noop, get} from 'lodash';

const createTouchable = (Input) => (
  class extends Component {

    constructor(props) {
      super(props);
      const {onPress, onLongPress} = this.props;
      const functionChain = get(renderers, 'RNDM.functionChain', noop);
      this.state = {
        onPress: functionChain(onPress),
        onLongPress: functionChain(onLongPress),
      };
    }

    render() {
      return <Input {...this.props} {...this.state} />;
    }
  }
);

export default createTouchable;
