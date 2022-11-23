
module.exports = {
  users: require("./users.model"),
  ac: require("./ac.model"), 
  jobCategories: require("./categories.model"),
  jobs: require("./jobs.model"),
  interviews: require("./interviewschedule.model"),
  zoommeetings: require("./zoommeeting.model"),
  recruitments: require("./recruitment.model"),
  employees: require("./employees.model"),
  departments: require('./departments.model'),
  quotes: require('./quotes.model'),
  tickers: require('./tickers.model'),
  feedbacks: require("./feedbacks.model"),
  lexicons: require('./lexicon.model'),
  permissions: require('./permissions.model'),
  roles: require('./roles.model'),
  userverifications : require('./userverification.model'),
  services: require('./services.model'),
  individualServiceProviders: require('./individualserverprovider.model'),
  businessServiceProviders: require('./businessserviceprovider.model'),
  businessPhoneBooks: require('./businessphonebook.model'),
  termsconditions: require('./termsconditions.model'),
  serviceCategories: require('./servicecategories.model'),
  stores: require('./store.model'),
  productCategories: require('./productcategories.model'),
  products: require('./products.model'),
  variants: require('./variants.model'),
  productAttributes: require('./productAttributes.model'),
  customers: require('./customers.model'),
  orders: require('./orders.model'),
  diseases: require('./diseases.model'),
  
  appointmentRequests: require('./appointmentRequest.model'),
  developmentNotes: require('./developmentNotes.model'),
  appointments: require('./appointments.model'),
  doctorReservations: require('./doctorReservations.model'),
  doctorNotes: require('./doctorNotes.model'),
  medicinePrescriptions: require('./medicinePrescriptions.model'),
  testPrescriptions: require('./testPrescriptions.model'),
  medicalCards: require('./medicalCards.model'),

  //DAS
  tasks: require('./tasks.model'),
  taskCategories: require('./tasksCategory.model'),
  jobBids: require('./jobBids.model'),
  taskers: require('./taskers.model'),
  taskerSkills: require('./taskerSkills.model'),
  taskfeedbacks: require('./taskfeedbacks.model'),
  taskerCompanies: require('./taskerCompanies.model'),
  individualTaskers: require('./individualTaskers.model'),
  industries: require('./industries.model'),
  assessmentAttempts: require('./assessmentAttempts.model'),
  questions: require('./questions.model'),
  assessments: require('./assessments.model'),
  taskerSkillsList: require('./taskerSkillsList.model')
  

}
