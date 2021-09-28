//  The useViewport Hook: all the data and logic is kept in a single location, and only one resize event listener is added for the entire application.
//  useViewport Hook by sharing a single-window resize event listener amongst all the components that use the Hook.
import * as React from 'react';
import { ViewportContext } from '../component/ViewportContex'

const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);
  return { width, height };
};

export default useViewport;
