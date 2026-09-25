const VARIANTS = {
  primary:
    'border border-orange-500 bg-orange-500 text-zinc-950 hover:border-accent-text hover:bg-accent-text',
  secondary: 'border border-transparent bg-soft text-text hover:bg-border-strong/50',
  outline: 'border border-border-strong bg-transparent text-text hover:bg-soft',
};

const SIZES = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-5 text-[15px]',
};

export default function Button({ variant = 'primary', size = 'md', className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-sans font-semibold transition-[background-color,border-color,transform,opacity] duration-150 ease-out active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
