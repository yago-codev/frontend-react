import React, { useState } from 'react';

import Container from '../../components/Container';

const Post: React.FC = () => {
  const [title] = useState('Conteúdo da postagem');
  
  return (
    <Container title={title} />
  );
};

export default Post;