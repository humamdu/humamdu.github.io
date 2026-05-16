import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen section-container pt-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">Project Case Study</p>
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">{project.description}</p>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Solution</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {project.solutions.map((solution) => (
                <li key={solution}>{solution}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.links.live || project.links.github || project.links.portfolio ? (
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <div className="space-y-2">
              {project.links.live && (
                <a href={project.links.live} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noreferrer">Live site</a>
              )}
              {project.links.github && (
                <a href={project.links.github} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noreferrer">Source code</a>
              )}
              {project.links.portfolio && (
                <a href={project.links.portfolio} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noreferrer">Portfolio reference</a>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  )
}
