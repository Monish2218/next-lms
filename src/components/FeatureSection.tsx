import { BookOpen, Users, Award } from 'lucide-react'

const features = [
  {
    name: 'Diverse Course Catalog',
    description: 'Access a wide range of courses across various disciplines, tailored to meet your learning needs.',
    icon: BookOpen,
  },
  {
    name: 'Expert Instructors',
    description: 'Learn from industry professionals and experienced educators who are passionate about sharing their knowledge.',
    icon: Users,
  },
  {
    name: 'Certificates of Completion',
    description: 'Earn recognized certificates upon course completion to showcase your newly acquired skills.',
    icon: Award,
  },
]

export function FeatureSection() {
  return (
    <div className="py-12 bg-white dark:bg-black">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Our Features</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}