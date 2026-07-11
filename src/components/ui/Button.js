import Link from 'next/link';
import styles from './Button.module.css';
import Icon from './Icon';

export default function Button({
  children,
  href,
  variant = 'primary',
  size,
  icon = 'arrowRight',
  showIcon = true,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    size && styles[size],
    fullWidth && styles.full,
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {children}
      {showIcon && <Icon name={icon} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
