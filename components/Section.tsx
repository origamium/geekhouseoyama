type SectionProps = Readonly<{
    children: React.ReactNode;
    className?: string;
}>

export const Section = ({ children }: SectionProps) => {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            {children}
        </section>
    )
}
