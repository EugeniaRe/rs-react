import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading_background}>
      <div className={styles.loading} data-testid="loading"></div>
    </div>
  );
};

export default Loading;
