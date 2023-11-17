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
        <div
          className={classes || ''}
          style={{
            background: 'linear-gradient(180deg, rgba(254,254,254,1) 0%, rgba(186,186,186,1) 100%)',
          }}
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
