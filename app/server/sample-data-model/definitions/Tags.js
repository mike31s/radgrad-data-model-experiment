defineTags = function() {

  let sampleTags = [
    {
      name: "Software Engineering",
      slug: "software-engineering",
      description: "The systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software",
      tagType: "cs-disciplines"
    },
    {
      name: "Psychology",
      slug: "psychology",
      description: "The scientific study of the human mind and its functions, especially those affecting behavior in a given context",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Silicon Valley",
      slug: "silicon-valley",
      description: "the southern portion of the San Francisco Bay Area, centering on the Santa Clara valley.",
      tagType: "locations"
    },
    {
      name: "Data Scientist",
      slug: "data-scientist",
      description: "Combine statistics, data mining, and predictive analytics to gain insight from large data sets.",
      tagType: "professional-goals"
    },
    {
      name: "NSA Employee",
      slug: "nsa-employee",
      description: "Work for the DoD and provide signals intelligence.",
      tagType: "professional-goals"
    },
    {
      name: "Entrepreneur",
      slug: "entrepreneur",
      description: "Work for yourself by creating a unique business plan.",
      tagType: "professional-goals"
    },
    {
      name: "Bioinformatics",
      slug: "bioinformatics",
      description: "Combine statistics, biology, and predictive analytics to gain insight from large data sets relating to the human body.",
      tagType: "cs-disciplines"
    },
    {
      name: "Computer Engineering",
      slug: "ceng",
      description: "The study of computer related technologies including electrophysics, hardware and software.",
      tagType: "cs-disciplines"
    }
  ];

  _.each(sampleTags, RadGrad.tag.define);
};