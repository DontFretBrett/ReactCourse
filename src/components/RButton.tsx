interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  onClick: () => void;
}

const RButton = ({ children, color = 'primary', onClick }: Props) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default RButton;
