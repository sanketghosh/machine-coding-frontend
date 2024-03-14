import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
    {
      name: "quiz app",
      href: "/quiz-app",
    },
    {
      name: "date picker",
      href: "/date-picker",
    },
    {
      name: "dynamic time picker",
      href: "/dynamic-time-picker",
    },
    {
      name: "async tags forms",
      href: "/async-tags-forms",
    },
  ];

  return (
    <main className="space-y-6 px-10 py-7">
      <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
        React Machine Coding Projects
      </h1>
      <div className="flex flex-col space-y-2">
        {projects.map((item, idx) => (
          <Link
            key={item.href}
            to={item.href}
            className="max-w-fit text-base capitalize transition-colors hover:text-blue-500 lg:text-lg"
          >
            {idx + 1}. {item.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
