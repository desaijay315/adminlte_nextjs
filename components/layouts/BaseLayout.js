import React, { Fragment } from 'react';

const BaseLayout = (props) => {
  const { className, children } = props;

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default BaseLayout;
