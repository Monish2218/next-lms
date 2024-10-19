import prisma from "@/lib/db";

export default async function Home() {
  const courses = await prisma.course.findMany();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <ul>
        {courses.map((course)=>{
          return (
            <li key={course.id}>{course.title}</li>
          );
        })}
        </ul>
      </main>
    </div>
  );
}
