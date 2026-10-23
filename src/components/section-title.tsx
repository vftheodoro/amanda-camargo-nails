export function SectionTitle({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`section-title ${center ? "text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p className="section-description">{children}</p> : null}
    </div>
  );
}
