import '../styles/ShinyText.css';

interface ShinyTextProps {
  text: any;
  disabled?: boolean;
  speed?: number;
  className?: string;
  href?: string;
}

const ShinyText = ({ text, disabled = false, speed = 5, className = '', href }: ShinyTextProps) => {
  const animationDuration = `${speed}s`;

  return (
    <a
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
      href={href}
    >
      {text}
    </a>
  );
};

export default ShinyText;
