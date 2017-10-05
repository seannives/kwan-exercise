export const getAssignments = state => state.assignments;
export const getAssignmentById = (state, assignmentId) => state.assignments[assignmentId];

/* TODO:
- get assignment completeness by assignment id
- get grade by assignment id
- get quiz (including questinos and existing student answers) by assignment id

then...
- student action to answer question
- teacher action to grade question

*/
