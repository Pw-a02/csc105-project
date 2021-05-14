import React from 'react';
import { useParams } from 'react-router';
import Details from '../components/detail';

const DetailsPage = () => {
  const { placeId } = useParams();

  return (
    <div>
      <Details placeId={placeId} />
    </div>
  );
};

export default DetailsPage;
