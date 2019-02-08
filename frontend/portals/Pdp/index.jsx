import React from 'react';
import { RouteContext } from '@shopgate/pwa-common/context';
import { hex2bin } from '@shopgate/pwa-common/helpers/data';
import Label from '../../components/Label';
import connect from './connector';

const Connected = connect(Label);

export default () => (
  <RouteContext.Consumer>
    { ({ params }) => <Connected productId={hex2bin(params.productId)} /> }
  </RouteContext.Consumer>
);
