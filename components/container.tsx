import * as PropTypes from 'prop-types';
import classnames from 'classnames';

const Container = ({ children, className }) => {
  return <div className={classnames('container', className)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
