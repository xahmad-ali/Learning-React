import React from "react";

function Screen1({array={}}) {
    console.log(array)
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. Its easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{array.name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {array.post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Screen1;
