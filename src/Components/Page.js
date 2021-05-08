import React from 'react';
import styled from 'styled-components';

import Metadata from 'Components/Metadata';
import { Container } from 'Components/Common';
import { background } from 'Components/Common/colors';

const PageWrapper = styled.div`
  background: ${background};
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Page = ({ metadata, children }) => {
  const { path, title, description } = metadata;
  return (
    <PageWrapper>
      <Container>
        <Metadata
          path={path}
          title={title}
          description={description}
        />
        <>{children}</>
      </Container>
    </PageWrapper>
  );
};

export default Page;
