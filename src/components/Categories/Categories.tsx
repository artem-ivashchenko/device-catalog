import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getPhones } from '../../api/products';
import { CategoriesType, categories } from './utils';
import './categories.scss';
import { ImageComponent } from '../ImageComponent';

export const Categories: React.FC = () => {
  const [phonesLength, setPhonesLength] = useState(0);
  const [tabletsLength] = useState(0);
  const [accessoriesLength] = useState(0);
  const [hasError, setHasError] = useState(false);

  function getModelsLength(modifier: CategoriesType) {
    switch (modifier) {
      case CategoriesType.phone:
        return phonesLength;
      case CategoriesType.tablet:
        return tabletsLength;
      case CategoriesType.accessories:
        return accessoriesLength;
      default:
        throw new Error('Could not count products...');
    }
  }

  useEffect(() => {
    getPhones()
      .then((result) => {
        if (!result) {
          throw new Error();
        }

        setPhonesLength(result.length);
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  return (
    <div className="categories">
      <h1 className="categories__title">Shop by category</h1>

      <div className="categories__links" data-cy="categoryLinksContainer">
        {categories.map(({
          name, modifier, image, link,
        }) => (
          <Link to={link} className="categories__link" key={link}>
            <div
              className={`categories__link-image-container
              categories__link-image-container--${CategoriesType[modifier]}`}
            >
              <ImageComponent classes="categories__link-image" src={image} alt={name} withoutBg />
            </div>

            <h3 className="categories__link-title">{name}</h3>

            <p className="categories__models">
              {`${
                hasError ? '???' : getModelsLength(modifier)
              } models`}

            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};