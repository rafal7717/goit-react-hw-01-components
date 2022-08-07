import styles from './Wrapper.module.scss';

export const Wrapper = ({ children }) => {
  const { wrapper } = styles;

  return <div className={wrapper}>{children}</div>;
};
