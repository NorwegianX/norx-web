import * as PropTypes from 'prop-types';
import classnames from 'classnames';

const VerticalSeperator = ({ className }) => {
  return (
    <div
      className={classnames(
        'flex flex-col w-px flex-grow bg-black ml-2 mr-2',
        className
      )}
    ></div>
  );
};

VerticalSeperator.propTypes = {
  className: PropTypes.string,
};

export default VerticalSeperator;
