export default function LinkInline({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      role="link"
      className="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"
      target="_blank"
    >
      {children}
    </a>
  );
}