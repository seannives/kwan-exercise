export const isComplete = state => state.assignment.is_complete;
export const getAssignments = state => state.assignments;
export const getAssignmentById = (state, assignmentId) => state.assignments[assignmentId];
