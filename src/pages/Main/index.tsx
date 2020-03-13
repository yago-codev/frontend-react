import React, { useState } from 'react';

import Container from '../../components/Container';

const Main: React.FC = () => {
  const [title] = useState('Últimas postagens');

  return (
    <Container title={title} />
  );
};

export default Main;