defineCourses = function() {
  let sampleCourses = [
    {
      name: "Program Structure",
      slug: "ics212",
      number: "ICS 212",
      description: "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages.",
      tags: ["software-engineering"]
    },
    {
      name: "nonICS 100-level course",
      slug: "nonICS-1xx",
      number: "nonICS 1xx",
      description: "Any non ICS course at the 100 level.",
      tags: []
    },
    {
      name: "Algorithms",
      slug: "ics311",
      number: "ICS 311",
      description: "Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods.",
      tags: ["software-engineering", "silicon-valley"]
    },
    {
      name: "Pizza 101",
      slug: "ics999",
      number: "ICS 999",
      description: "Learn about everybody's favorite food",
      tags: [ "silicon-valley"]
    },
    {
      name: "Software Engineering",
      slug: "ics314",
      number: "ICS 314",
      description: "Use a variety of software engineering tools and techniques to design real world software applications.",
      tags: ["software-engineering", "silicon-valley"]
    },
    {
      name: "Program Structure",
      slug: "ics211",
      number: "ICS 211",
      description: "Learn how to program in C.",
      tags: ["software-engineering"]
    },
    {
      name: "Software Engineering 2",
      slug: "ics414",
      number: "ICS 414",
      description: "Continue where ICS 314 left off and build the greatest web application of all time.",
      tags: ["software-engineering", "silicon-valley"]
    }
  ];

  _.each(sampleCourses, RadGrad.course.define);
};
