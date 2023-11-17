import React, { useEffect, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  classes?: string;
};

export const ImageComponent: React.FC<Props> = ({ src, alt, classes }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImgLoaded(true);
    };

    img.src = src;
  }, [src]);

  return (
    <>
      {!imgLoaded ? (
        <img
          src="img/placeholder.png"
          alt="placeholder"
          className={classes || ''}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={classes || ''}
        />
      )}
    </>
  );
};
