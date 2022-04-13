import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Welcome</strong>
      <p>You're at Home Page</p>
    </div>
  );
};

export default ExploreContainer;
