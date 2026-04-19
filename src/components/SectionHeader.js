function SectionHeader({ eyebrow, title, supportingText, split = false }) {
    return (
        <div className={`section-heading${split ? ' split-heading' : ''}`}>
            <div>
                <p className="eyebrow">{eyebrow}</p>
                <h2>{title}</h2>
            </div>
            {supportingText ? <p className="section-supporting-text">{supportingText}</p> : null}
        </div>
    );
}

export default SectionHeader;