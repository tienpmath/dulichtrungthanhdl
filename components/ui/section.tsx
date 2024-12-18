type SectionProps = {
  className?: string;
  id?: string;
  children: React.ReactNode;
  tag?: "section" | "div";
  headerClassName?: string;
  title?: string;
  description?: string;
  descriptionClassName?: string;
  rightElement?: React.ReactNode;
};
export default function Section({
  children,
  id,
  tag = "section",
  title,
  className = "text-orange-600 ext-xl capitalize !leading-8 md:!text-2xl lg:!leading-[48px] 4xl:!leading-[48px] 4xl:!text-3xl",
  descriptionClassName = "font-normal capitalize leading-6 text-secondary 4xl:text-lg",
  description,

  rightElement,
}: SectionProps) {
  const Component = tag;
  return (
    <Component className={className} id={id}>
      {title && (
        <header className="flex justify-between capitalize">
          <div>
            <h2>{title}</h2>

            {description && (
              <h3 className={descriptionClassName}>{description}</h3>
            )}
          </div>
          {rightElement && <div>{rightElement}</div>}
        </header>
      )}
      {children}
    </Component>
  );
}
