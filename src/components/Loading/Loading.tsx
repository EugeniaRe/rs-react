import './Loading.css';
interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
  if (isLoading) {
    return (
      <div className="loading_background">
        <div className="loading"></div>
      </div>
    );
  }
};

export default Loading;
