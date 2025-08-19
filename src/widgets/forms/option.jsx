export default function Option({ children, className = '', ...props }) {
  return (
    <option className={`text-[15px] ${className}`} {...props}>
      {children}
    </option>
  );
}
