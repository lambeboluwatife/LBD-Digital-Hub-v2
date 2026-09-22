export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  
  return (
    <div className="flex-1 py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-8">Case Study: {resolvedParams.slug}</h1>
      <p className="text-on-surface-variant font-body-lg">
        Detailed breakdown of the problem, solution, and impact.
      </p>
    </div>
  )
}
