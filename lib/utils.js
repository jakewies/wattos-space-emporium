import memoize from 'memoize-one';

export const getClasses = memoize(inventory =>
  Object.keys(
    inventory.reduce((accum, spaceship) => {
      const shipClass = spaceship.class;
      if (!accum[shipClass]) {
        accum[shipClass] = spaceship;
      }

      return accum;
    }, {})
  )
);

export const getManufacturers = memoize(inventory =>
  Object.keys(
    inventory.reduce((accum, spaceship) => {
      const shipManufacturer = spaceship.manufacturer;

      if (!accum[shipManufacturer]) {
        accum[shipManufacturer] = spaceship;
      }

      return accum;
    }, {})
  )
);
