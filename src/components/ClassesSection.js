import SectionHeader from './SectionHeader';

function ClassesSection({ classes }) {
    return (
        <section className="content-section classes-section" id="classes">
            <SectionHeader
                eyebrow="Signature classes"
                title="Programs built to make movement feel magnetic"
            />
            <div className="class-grid">
                {classes.map((danceClass) => (
                    <article className="class-card" key={danceClass.title}>
                        <p className="class-schedule">{danceClass.schedule}</p>
                        <h3>{danceClass.title}</h3>
                        <p>{danceClass.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ClassesSection;