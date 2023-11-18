import React, { useEffect, useState } from 'react';
import './imageComponent.scss';

type Props = {
  src: string;
  alt: string;
  classes?: string;
  withoutBg?: boolean
};

export const ImageComponent: React.FC<Props> = ({
  src, alt, classes, withoutBg,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.src = src;

    img.onload = () => {
      setImgLoaded(true);
    };
  }, [src]);

  return (
    <>
      {!imgLoaded ? (
        !withoutBg && (
          <div className={`image-component ${classes}`} />
        )
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={classes || ''}
        />
      )}
    </>
  );
};
