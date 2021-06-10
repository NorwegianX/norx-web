import classnames from 'classnames';
import NextImage from 'next/image';
import * as PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

interface ImageArgs {
  src: string;
  width: string;
  height: string;
  layout: 'intrinsic' | 'fixed' | 'responsive';
  placeholder: string;
  className: string;
  imageClasses: string;
}
// Inspired by https://github.com/joe-bell/plaiceholder/tree/main/examples/next and https://github.com/kpfromer/portfolio/blob/main/components/Img/index.tsx
const Image = ({
  src,
  width,
  height,
  layout = 'intrinsic',
  placeholder,
  className,
  imageClasses,
  ...rest
}: ImageArgs) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const onLoad = useCallback(
    imageLoaded => {
      // https://github.com/vercel/next.js/discussions/18386
      if (imageLoaded.target.srcset) {
        setImageLoaded(true);
      }
    },
    [imageLoaded]
  );

  return (
    <div className={classnames(className, 'relative', 'overflow-hidden')}>
      {placeholder && (
        <img
          aria-hidden="true"
          alt=""
          src={placeholder}
          className={classnames(
            'absolute',
            'inset-0',
            'w-full',
            'h-full',
            'object-cover',
            'object-center',
            imageLoaded ? 'opacity-0' : 'opacity-1',
            'transition-opacity duration-500 ease-out'
          )}
          style={{
            filter: 'blur(12px)',
          }}
        />
      )}
      <div
        className={classnames(
          imageLoaded ? 'opacity-1' : 'opacity-0',
          'transition-opacity duration-300 ease-out'
        )}
      >
        // OPTIMIZE Fix type issue connected to layout=
        <NextImage
          {...rest}
          className={imageClasses}
          src={src}
          onLoad={onLoad}
          width={layout !== 'fill' && width}
          height={layout !== 'fill' && height}
          layout={layout}
        />
      </div>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  layout: PropTypes.oneOf(['intrinsic', 'fixed', 'responsive']),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  imageClasses: PropTypes.string,
};

export default Image;
