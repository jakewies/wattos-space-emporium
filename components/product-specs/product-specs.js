import React from 'react';
import styled from 'styled-components';
import Spec from './spec';
import Detail from '../detail';

function ProductSpecs({ product }) {
  const {
    name: model,
    manufacturer,
    id,
    cost_in_credits: credits,
    class: shipClass,
    techspecs
  } = product;

  return (
    <>
      <Top>
        <Detail label="Manufacturer" value={manufacturer} />
        <Detail label="Class" value={shipClass} />
        <Detail label="Credits" value={credits} />
      </Top>
      <Bottom>
        <ImageWrapper>
          <img
            src={`/static/images/products/${id}/thumbnail.jpg`}
            alt={model}
          />
        </ImageWrapper>
        <SpecWrapper>
          {techspecs.length && <Spec label="Length" value={techspecs.length} />}
          {techspecs.maxaccel && (
            <Spec label="Max Acelleration" value={techspecs.maxaccel} />
          )}
          {techspecs.maxatmosphericspeed && (
            <Spec
              label="Max Atmospheric Speed"
              value={techspecs.maxatmosphericspeed}
            />
          )}
          {techspecs.hull && <Spec label="Hull" value={techspecs.hull} />}
          {techspecs.sensor && <Spec label="Sensor" value={techspecs.sensor} />}
          {techspecs.targeting && (
            <Spec label="Targeting" value={techspecs.targeting} />
          )}
          {techspecs.shielding && (
            <Spec label="Shielding" value={techspecs.shielding} />
          )}
          {techspecs.armament && (
            <Spec label="Armament" value={techspecs.armament} />
          )}
          {techspecs.communications && (
            <Spec label="Communications" value={techspecs.communications} />
          )}
          {techspecs.MGLT && <Spec label="MGLT" value={techspecs.MGLT} />}
        </SpecWrapper>
      </Bottom>
    </>
  );
}

export default ProductSpecs;

const mobileBreakpoint = '850px';

const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  > div {
    margin-bottom: 1.5rem;
  }

  > div:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${mobileBreakpoint}) {
    flex-direction: row;

    > div {
      margin-bottom: 0;
      margin-right: 8rem;
    }

    > div:last-child {
      margin-right: 0;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;

  @media (min-width: ${mobileBreakpoint}) {
    flex-direction: row;
    max-width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 2rem;

  > img {
    width: 100%;
  }

  @media (min-width: ${mobileBreakpoint}) {
    width: 40%;
    margin-bottom: 0;
    margin-right: 2rem;

    > img {
      width: 100%;
      max-width: 450px;
    }
  }
`;

const SpecWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 1.5rem;
  }

  > div:last-child {
    margin-bottom: 0;
  }
`;
