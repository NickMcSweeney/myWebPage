// do not modify keys, if you do you gotta change the references throughout rest of files
// values can be set to whatever the back end folks decide to use
const CONSTANTS = {};

CONSTANTS.PROJECT_STATUS = {
  complete: "complete",
  approval: "quote",
  approved: "quote_approved",
  matecat: "matecat_processing",
  ready: "ready_for_work",
  waiting: "waiting_for_jobs",
  
  needsAssignment: "needs_assignment",
  inProgress: "in_progress",
  
  translationNeedsAssignment: "translation_needs_assignment",
  translationInProgress: "translation_in_progress",
  proofreadingNeedsAssignment: "proofreading_needs_assignment",
  proofreadingInProgress: "proofreading_in_progress",
  formattingNeedsAssignment: "formatting_needs_assignment",
  formattingInProgress: "formatting_in_progress",
  qualityNeedsAssignment: "quality_needs_assignment",
  qualityInProgress: "quality_in_progress",
};

CONSTANTS.JOB_STATUS = {
  assignment: "assignment",
  offered: "offered",
  accepted: "accepted",
  inProgress: "in_progress",
  incomplete: "incomplete",
  needsAssignment: "needs_assignment",
  fulfilled: "fulfilled",
  abandoned: "abandoned",
  failed: "failed",
  repeating: "repeating",
};

CONSTANTS.JOB_TYPE = {
  approval: "approval",
  translation: "translation",
  formatting: "dtp",
  quality: "qc",
  proofreading: "proofreading"
};

CONSTANTS.TARGET_STATUS = {
  inProgress: "in-progress",
  assignment: "needs-assignments",
  awaitingOffers: "awaiting-offers",
  approval: "quote",
  approved: "quote_approved",
  deadline: "deadline",
  overdue: "overdue",
  complete: "complete",
  qualityFailed: "quality-failed",
  
  translationNeedsAssignment: "translation_needs_assignment",
  translationInProgress: "translation_in_progress",
  translationProcessing: "translation_processing",
  proofreadingNeedsAssignment: "proofreading_needs_assignment",
  proofreadingInProgress: "proofreading_in_progress",
  proofreadingProcessing: "proofreading_processing",
  formattingNeedsAssignment: "dtp_needs_assignment",
  formattingInProgress: "dtp_in_progress",
  formattingProcessing: "dtp_processing",
  qualityNeedsAssignment: "qc_needs_assignment",
  qualityInProgress: "qc_in_progress",
  qualityProcessing: "qc_processing",
};

CONSTANTS.OFFER_STATUS = {
  accepted: "accepted",
  rejected: "rejected",
  offered: "offered",
};

CONSTANTS.TASK_TYPES = {
  question: "question",
  quality: "quality",
  deadlineApproaching: "deadline-approaching",
  deadlineConflict: "deadline-conflict",
  deadlinePastDue: "deadline-past-due",
  offer: "offer",
  review: "review",
  new: "new",
  finished: "finished",
};

CONSTANTS.TASK_ACTIONS = {
  respond: "respond",
  viewProject: "view-project",
  forward: "forward",
  done: "done",
  requestExtension: "request-extension",
  prefillMessage: "prefill-message",
  reassignVendor: "reassign-vendor",
  requestUpdate: "request-update",
  newOffer: "new-offer",
  certify: "certify",
  noCertifyNeeded: "no-certify-needed",
  createClientAccount: "create-client-account",
  createProject: "create-project",
}

CONSTANTS.TASK_STATUS = {
  urgent: "urgent",
  lookout: "lookout",
  healthy: "healthy",
  complete: "complete",
};

CONSTANTS.CONTENT_TYPES = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "text/rtf": "rtf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};

module.exports = CONSTANTS;
