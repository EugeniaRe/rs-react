import s from './ErrorMessage.module.css';

const ErrorMessage = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <div className={s.error}>{message}</div>;
};

export default ErrorMessage;
