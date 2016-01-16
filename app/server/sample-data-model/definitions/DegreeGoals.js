defineDegreeGoals = function() {
  let sampleDegreeGoals = [
    {name: "Silicon Valley Tech", slug: "degree-goal-sv-tech", description: "TBD"},
    {name: "Ph.D. Prep", slug: "degree-goal-phd-prep", description: "TBD"},
    {name: "security", slug: "degree-goal-security", description: "TBD"},
    {name: "Network Engineer", slug: "network-engineer", description: "TBD"},
    {name: "Arm Wrestling Champion", slug: "champion", description: "TBD"}

  ];

  _.each(sampleDegreeGoals, RadGrad.degreegoal.define);
};