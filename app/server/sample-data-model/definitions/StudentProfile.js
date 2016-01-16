defineStudentProfile = function() {
  let acID = RadGrad.user.findBySlug("anthonychriste")._id;

  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID
    }
  ];

  let sampleOpportunityInstanceIDs = _.map(sampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let sampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceData,
    studentID: acID
  });

  RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(acID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Fall", 2018));

  //---------------------------------------------------------New user 1

  let acID2 = RadGrad.user.findBySlug("kobebryant")._id;

  let sampleWorkInstanceData2 = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID2},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID2}
  ];

  let sampleWorkInstanceIDs2 = _.map(sampleWorkInstanceData2, RadGrad.workinstance.define);

  let sampleCourseInstanceData2 = [
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics311", verified: false, grade: "B", studentID: acID2},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID2, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics999", verified: true, grade: "A", studentID: acID2},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics314", verified: true, grade: "A", studentID: acID2}
  ];

  let sampleCourseInstanceIDs2 = _.map(sampleCourseInstanceData2, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData2 = [
    {semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "hack15",
      verified: true,
      hrswk: 10,
      studentID: acID2},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID2
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "itma-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID2
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "ieee-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID2
    }
  ];

  let sampleOpportunityInstanceIDs2 = _.map(sampleOpportunityInstanceData2, RadGrad.opportunityinstance.define);

  let sampleDegreePlan2 = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs2,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs2,
    workInstanceIDs: sampleWorkInstanceData2,
    studentID: acID2
  });

  RadGrad.user.setDegreePlanID(acID2, sampleDegreePlan2);
  RadGrad.user.setDegreeGoalIDs(acID2, [RadGrad.slug.getEntityID("champion", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID2, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID2, "http://cdn1.theodysseyonline.com/files/2015/12/05/6358493125468533551700185372_8-kobe-bryant-legacy-reasons-why-kobe-bryant-should-retire.jpg");
  RadGrad.user.setAboutMe(acID2, "I AM the Lakers");
  RadGrad.user.setSemesterID(acID2, RadGrad.semester.get("Fall", 2018));


  //-------------------------------------------------------------------New user 2


  let acID3 = RadGrad.user.findBySlug("lukeskywalker")._id;

  let sampleWorkInstanceData3 = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID3},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID3}
  ];

  let sampleWorkInstanceIDs3 = _.map(sampleWorkInstanceData3, RadGrad.workinstance.define);

  let sampleCourseInstanceData3 = [
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics211", verified: false, grade: "B", studentID: acID3},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics414", verified: false, grade: "B", studentID: acID3},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics999", verified: true, grade: "A", studentID: acID3},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics314", verified: true, grade: "A", studentID: acID3}
  ];

  let sampleCourseInstanceIDs3 = _.map(sampleCourseInstanceData3, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData3 = [
    {semesterID: RadGrad.semester.get("Fall", 2015),
      opportunity: "hack15",
      verified: true,
      hrswk: 10,
      studentID: acID3},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID3
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "itma-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID3
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "ieee-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID3
    }
  ];

  let sampleOpportunityInstanceIDs3 = _.map(sampleOpportunityInstanceData3, RadGrad.opportunityinstance.define);

  let sampleDegreePlan3 = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs3,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs3,
    workInstanceIDs: sampleWorkInstanceData3,
    studentID: acID3
  });

  RadGrad.user.setDegreePlanID(acID3, sampleDegreePlan3);
  RadGrad.user.setDegreeGoalIDs(acID3, [RadGrad.slug.getEntityID("network-engineer", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID3, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID3, "https://nyoobserver.files.wordpress.com/2015/10/1-cs-k9azrfj6ju9sgti7btw.jpeg?quality=80");
  RadGrad.user.setAboutMe(acID3, "I know how to use the force");
  RadGrad.user.setSemesterID(acID3, RadGrad.semester.get("Fall", 2014));

};

