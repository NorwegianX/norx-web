import * as PropTypes from 'prop-types';
import classnames from 'classnames';

const HorizontalSeperator = ({ className }) => {
  return (
    <div
      className={classnames(
        'flex flex-row h-px w-full flex-grow bg-black mt-2 mb-2',
        className
      )}
    ></div>
  );
};

HorizontalSeperator.propTypes = {
  className: PropTypes.string,
};

export default HorizontalSeperator;
