export function OrganizationSchema() {
  const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Lumina Summit Growth", url: "https://luminasummitgrowth.com", description: "Founder-led growth systems practice for established local service businesses.", founder: { "@type": "Person", name: "Luis Hernandez" }, areaServed: "United States", knowsAbout: ["Local search", "Conversion-focused websites", "Lead follow-up systems", "Growth strategy"] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
