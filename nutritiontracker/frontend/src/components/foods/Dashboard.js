import React, { Fragment } from 'react';
import Form from './Form';
import Foods from './Foods';

export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <Foods />
        <Form />
      </Fragment>
    </div>
  )
}
