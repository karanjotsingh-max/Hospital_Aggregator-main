import React from 'react';
import Card from './Card';

const Cardlist = ({ hospitals }) => {
  return (
    <div>
      {
        hospitals.map((hospital,i) => {
          return (
            <Card
              key={i}
              id={hospital.id}
              hospname={hospital.hospname}
              hospspec={hospital.hospspec}
              district={hospital.district}
              hospAddress={hospital.hospAddress}
              ownership={hospital.ownership}
              year={hospital.year}
              email = {hospital.email}
              website={hospital.website}
              mobile={hospital.mobile}
              aboutus={hospital.aboutus}
              showButton={hospital.showButton}
              showDetails={hospital.showDetails}
              showapproveStatus={hospital.showapproveStatus}
              showrejectStatus={hospital.showrejectStatus}
              imagelink={hospital.imagelink}
              username = {hospital.username}
              />
          );
        })
      }
    </div>
  );
}

export default Cardlist;