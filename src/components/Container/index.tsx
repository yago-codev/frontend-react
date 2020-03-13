import React from 'react';

import { Card } from './styles';

import Table from '../Table';

interface IContainer {
  title: string;
}

const Container: React.FC<IContainer> = ({ title }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <Table />
    </Card>
  );
};

export default Container;