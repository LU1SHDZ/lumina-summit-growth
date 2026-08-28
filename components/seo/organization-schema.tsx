export function OrganizationSchema() {
  const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Lumina Summit Growth", url: "https://luminasummitgrowth.com", description: "AI-powered growth agency for local service businesses.", areaServed: "United States" };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
