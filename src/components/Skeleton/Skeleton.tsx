import './Skeleton.css';
const Skeleton = ({ children, isLoading }: { children: React.ReactNode; isLoading: boolean }) => {
  if (!isLoading) return children;
  return <div className="clutch-skeleton">{children}</div>;
};

export default Skeleton;
