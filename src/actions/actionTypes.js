//Login & Register
export const LOGIN_ACCOUNT_REQUEST = 'LOGIN_ACCOUNT_REQUEST';
export const LOGIN_ACCOUNT_REJECTED = 'LOGIN_ACCOUNT_REJECTED';
export const LOGIN_ACCOUNT_SUCCESS = 'LOGIN_ACCOUNT_SUCCUESS';
export const REGISTER_ACCOUNT_REQUEST = 'REGISTER_ACCOUNT_REQUEST';
export const REGISTER_ACCOUNT_REJECTED = 'REGISTER_ACCOUNT_REJECTED';
export const REGISTER_ACCOUNT_SUCCESS = 'REGISTER_ACCOUNT_SUCCESS';
export const CONFIRM_EMAIL_REQUEST = 'CONFIRM_EMAIL_REQUEST';
export const CONFIRM_EMAIL_REJECTED = 'CONFIRM_EMAIL_REJECTED';
export const CONFIRM_EMAIL_SUCCESS = 'CONFIRM_EMAIL_SUCCESS';
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_REJECTED = 'FORGOT_PASSWORD_REJECTED';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_REJECTED = 'RESET_PASSWORD_REJECTED';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const ERROR_OCCCURED = 'ERROR_OCCCURED';
export const RESET_ERRORS = 'RESET_ERRORS';
export const FINISH_REGISTRATION_SUCCESS = 'FINISH_REGISTRATION_SUCCESS';
export const FINISH_REGISTRATION_REJECTED = 'FINISH_REGISTRATION_REJECTED';
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';
export const FETCH_LOGGED_USER_REQUEST = 'FETCH_LOGGED_USER_REQUEST';
export const FETCH_LOGGED_USER_SUCCESS = 'FETCH_LOGGED_USER_SUCCESS';
export const FETCH_LOGGED_USER_REJECTED = 'FETCH_LOGGED_USER_REJECTED';
export const SAVE_LOGGED_USER_REQUEST = 'SAVE_LOGGED_USER_REQUEST';
export const SAVE_LOGGED_USER_SUCCESS = 'SAVE_LOGGED_USER_SUCCESS';
export const SAVE_LOGGED_USER_REJECTED = 'SAVE_LOGGED_USER_REJECTED';
//institutions
export const FETCH_GYMS = 'FETCH_GYMS';
export const FETCH_GYMS_FULFILLED = 'FETCH_GYMS_FULFILLED';
export const FETCH_GYMS_REJECTED = 'FETCH_GYMS_REJECTED';

export const DELETE_INSTITUTION = 'DELETE_INSTITUTION';
export const DELETE_INSTITUTION_SUCCESS = 'DELETE_INSTITUTION_SUCCESS';
export const DELETE_INSTITUTION_REJECTED = 'DELETE_INSTITUTION_REJECTED';

export const FETCH_NATIONAL_FEDERATIONS = 'FETCH_NATIONAL_FEDERATIONS';
export const FETCH_NATIONAL_FEDERATIONS_FULFILLED = 'FETCH_NATIONAL_FEDERATIONS_FULFILLED';
export const FETCH_NATIONAL_FEDERATIONS_REJECTED = 'FETCH_NATIONAL_FEDERATIONS_REJECTED';

export const FETCH_CONTINENTAL_FEDERATIONS = 'FETCH_CONTINENTAL_FEDERATIONS';
export const FETCH_CONTINENTAL_FEDERATIONS_FULFILLED = 'FETCH_CONTINENTAL_FEDERATIONS_FULFILLED';
export const FETCH_CONTINENTAL_FEDERATIONS_REJECTED = 'FETCH_CONTINENTAL_FEDERATIONS_REJECTED';

export const FETCH_WORLD_FEDERATIONS = 'FETCH_WORLD_FEDERATIONS';
export const FETCH_WORLD_FEDERATIONS_FULFILLED = 'FETCH_WORLD_FEDERATIONS_FULFILLED';
export const FETCH_WORLD_FEDERATIONS_REJECTED = 'FETCH_WORLD_FEDERATIONS_REJECTED';

export const FETCH_COUNTRY_GYMS = 'FETCH_COUNTRY_GYMS';
export const FETCH_COUNTRY_GYMS_FULFILLED = 'FETCH_COUNTRY_GYMS_FULFILLED';
export const FETCH_COUNTRY_GYMS_REJECTED = 'FETCH_COUNTRY_GYMS_REJECTED';

//single institution
export const FETCH_INSTITUTION = 'FETCH_INSTITUTION';
export const FETCH_INSTITUTION_FULFILLED = 'FETCH_INSTITUTION_FULFILLED';
export const FETCH_INSTITUTION_REJECTED = 'FETCH_INSTITUTION_REJECTED';
export const SAVE_INSTITUTION = 'SAVE_INSTITUTION';
export const SAVE_INSTITUTION_SUCCESS = 'SAVE_INSTITUTION_SUCCESS';
export const SAVE_INSTITUTION_REJECTED = 'SAVE_INSTITUTION_REJECTED';
export const ADD_INSTITUTION = 'ADD_INSTITUTION';
export const RESET_INSTITUTION = 'RESET_INSTITUTION';

export const FETCH_INSTITUTION_MEMBERS = 'FETCH_INSTITUTION_MEMBERS';
export const FETCH_INSTITUTION_MEMBERS_FULFILLED = 'FETCH_INSTITUTION_MEMBERS_FULFILLED';
export const FETCH_INSTITUTION_MEMBERS_REJECTED = 'FETCH_INSTITUTION_MEMBERS_REJECTED';

//users
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';

export const FETCH_FIGTHERS = 'FETCH_FIGTHERS';
export const FETCH_FIGTHERS_FULFILLED = 'FETCH_FIGTHERS_FULFILLED';
export const FETCH_FIGTHERS_REJECTED = 'FETCH_FIGTHERS_REJECTED';
export const FETCH_JUDGES = 'FETCH_JUDGES';
export const FETCH_JUDGES_FULFILLED = 'FETCH_JUDGES_FULFILLED';
export const FETCH_JUDGES_REJECTED = 'FETCH_JUDGES_REJECTED';
export const FETCH_COACHES = 'FETCH_COACHES';
export const FETCH_COACHES_FULFILLED = 'FETCH_COACHES_FULFILLED';
export const FETCH_COACHES_REJECTED = 'FETCH_COACHES_REJECTED';
export const FETCH_DOCTORS = 'FETCH_DOCTORS';
export const FETCH_DOCTORS_FULFILLED = 'FETCH_DOCTORS_FULFILLED';
export const FETCH_DOCTORS_REJECTED = 'FETCH_DOCTORS_REJECTED';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_REJECTED = 'DELETE_USER_REJECTED';

//single user
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_REJECTED = 'SAVE_USER_REJECTED';

//Roles
export const FETCH_ROLES = 'FETCH_ROLES';
export const FETCH_ROLES_FULFILLED = 'FETCH_ROLES_FULFILLED';
export const FETCH_ROLES_REJECTED = 'FETCH_ROLES_REJECTED';
export const FETCH_PUBLIC_ROLES = 'FETCH_PUBLIC_ROLES';
export const FETCH_PUBLIC_ROLES_FULFILLED = 'FETCH_PUBLIC_ROLES_FULFILLED ';
export const FETCH_PUBLIC_ROLES_REJECTED = 'FETCH_PUBLIC_ROLES_REJECTED';
export const FETCH_CONTEST_ROLES = 'FETCH_CONTEST_ROLES';
export const FETCH_CONTEST_ROLES_FULFILLED = 'FETCH_CONTEST_ROLES_FULFILLED ';
export const FETCH_CONTEST_ROLES_REJECTED = 'FETCH_CONTEST_ROLES_REJECTED';

//user roles
export const FETCH_USER_ROLES = 'FETCH_USER_ROLES';
export const ADD_USER_ROLE = 'ADD_USER_ROLE';
export const CANCEL_ADD_USER_ROLE = 'CANCEL_ADD_USER_ROLE';
export const SET_REQUESTED_ROLE = 'SET_REQUESTED_ROLE';
export const FETCH_USER_ROLES_FULFILLED = 'FETCH_USER_ROLES_FULFILLED';
export const FETCH_USER_ROLES_REJECTED = 'FETCH_USER_ROLES_REJECTED';
export const FETCH_AVAILABLE_FEDERATIONS = 'FETCH_AVAILABLE_FEDERATIONS';
export const FETCH_AVAILABLE_FEDERATIONS_FULFILLED = 'FETCH_AVAILABLE_FEDERATIONS_FULFILLED';
export const FETCH_AVAILABLE_FEDERATIONS_REJECTED = 'FETCH_AVAILABLE_FEDERATIONS_REJECTED';

export const SAVE_USER_ROLE = 'SAVE_USER_ROLE_REQUEST';
export const SAVE_USER_ROLE_SUCCESS = 'SAVE_USER_ROLE_SUCCESS';
export const SAVE_USER_ROLE_REJECTED = 'SAVE_USER_ROLE_REJECTED';

//roles requests
export const FETCH_ROLES_REQUESTS = 'FETCH_ROLES_REQUESTS';
export const FETCH_ROLES_REQUESTS_FULFILLED = 'FETCH_ROLES_REQUESTS_FULFILLED';
export const FETCH_ROLES_REQUESTS_REJECTED = 'FETCH_ROLES_REQUESTS_REJECTED';
export const ACCEPT_ROLE_REQUEST = 'ACCEPT_ROLE_REQUEST';
export const ACCEPT_ROLE_REQUEST_SUCCESS = 'ACCEPT_ROLE_REQUEST_SUCCESS';
export const ACCEPT_ROLE_REQUEST_REJECTED = 'ACCEPT_ROLE_REQUEST_REJECTED';
export const REJECT_ROLE_REQUEST = 'REJECT_ROLE_REQUEST';
export const REJECT_ROLE_REQUEST_SUCCESS = 'REJECT_ROLE_REQUEST_SUCCESS';
export const REJECT_ROLE_REQUEST_REJECTED = 'REJECT_ROLE_REQUEST_REJECTED';

//Contest
export const SAVE_CONTEST = 'SAVE_CONTEST';
export const SAVE_CONTEST_SUCCESS = 'SAVE_CONTEST_SUCCESS';
export const SAVE_CONTEST_REJECTED = 'SAVE_CONTEST_REJECTED';
export const RESET_CONTEST = 'RESET_CONTEST';

export const REMOVE_CONTEST = 'REMOVE_CONTEST';
export const REMOVE_CONTEST_SUCCESS = 'REMOVE_CONTEST_SUCCESS';
export const REMOVE_CONTEST_REJECTED = 'REMOVE_CONTEST_REJECTED';

export const FETCH_SINGLE_CONTEST = 'FETCH_SINGLE_CONTEST_REQUEST';
export const FETCH_SINGLE_CONTEST_FULFILLED = 'FETCH_SINGLE_CONTEST_FULFILLED';
export const FETCH_SINGLE_CONTEST_REJECTED = 'FETCH_SINGLE_CONTEST_REJECTED';

export const FETCH_CONTESTS = 'FETCH_CONTESTS';
export const FETCH_CONTESTS_FULFILLED = 'FETCH_CONTESTS_FULFILLED';
export const FETCH_CONTESTS_REJECTED = 'FETCH_CONTESTS_REJECTED';

export const FETCH_CONTEST_CANDIDATES = 'FETCH_CONTEST_CANDIDATES';
export const FETCH_CONTEST_CANDIDATES_FULFILLED = 'FETCH_CONTEST_CANDIDATES_FULFILLED';
export const FETCH_CONTEST_CANDIDATES_REJECTED = 'FETCH_CONTEST_CANDIDATES_REJECTED';

export const ADD_NEW_CONTEST = 'ADD_NEW_CONTEST';
export const ADD_CONTEST_REQUEST = 'ADD_CONTEST_REQUEST';
export const CANCEL_CONTEST_REQUEST = 'CANCEL_CONTEST_REQUEST';
export const EDIT_CONTEST_REQUEST = 'EDIT_CONTEST_REQUEST';
export const SAVE_CONTEST_REQUEST = 'SAVE_CONTEST_REQUEST';
export const SAVE_CONTEST_REQUEST_SUCCESS = 'SAVE_CONTEST_REQUEST_SUCCESS';
export const SAVE_CONTEST_REQUEST_REJECTED = 'SAVE_CONTEST_REQUEST_REJECTED';

export const FETCH_CONTEST_REQUESTS = 'FETCH_CONTEST_REQUESTS';
export const FETCH_CONTEST_REQUESTS_FULFILLED = 'FETCH_CONTEST_REQUESTS_FULFILLED';
export const FETCH_CONTEST_REQUESTS_REJECTED = 'FETCH_CONTEST_REQUESTS_REJECTED';

export const FETCH_CONTEST_JUDGES = 'FETCH_CONTEST_JUDGES';
export const FETCH_CONTEST_JUDGES_FULFILLED = 'FETCH_CONTEST_JUDGES_FULFILLED';
export const FETCH_CONTEST_JUDGES_REJECTED = 'FETCH_CONTEST_JUDGES_REJECTED';

export const FETCH_INSTITUTION_CONTEST_REQUESTS = 'FETCH_INSTITUTION_CONTEST_REQUESTS';
export const FETCH_INSTITUTION_CONTEST_REQUESTS_FULFILLED = 'FETCH_INSTITUTION_CONTEST_REQUESTS_FULFILLED';
export const FETCH_INSTITUTION_CONTEST_REQUESTS_REJECTED = 'FETCH_INSTITUTION_CONTEST_REQUESTS_REJECTED';

export const ACCEPT_CONTEST_REQUEST = 'ACCEPT_CONTEST_REQUEST';
export const ACCEPT_CONTEST_REQUEST_SUCCESS = 'ACCEPT_CONTEST_REQUEST_SUCCESS';
export const ACCEPT_CONTEST_REQUEST_REJECTED = 'ACCEPT_CONTEST_REQUEST_REJECTED';
export const REJECT_CONTEST_REQUEST = 'REJECT_CONTEST_REQUEST';
export const REJECT_CONTEST_REQUEST_SUCCESS = 'REJECT_CONTEST_REQUEST_SUCCESS';
export const REJECT_CONTEST_REQUEST_REJECTED = 'REJECT_CONTEST_REQUEST_REJECTED';
export const REMOVE_CONTEST_REQUEST = 'REMOVE_CONTEST_REQUEST';
export const REMOVE_CONTEST_REQUEST_SUCCESS = 'REMOVE_CONTEST_REQUEST_SUCCESS';
export const REMOVE_CONTEST_REQUEST_REJECTED = 'REMOVE_CONTEST_REQUEST_REJECTED';

export const FETCH_CONTEST_CATEGORIES_WITH_FIGHTERS = 'FETCH_CONTEST_CATEGORIES_WITH_FIGHTERS';
export const FETCH_CONTEST_CATEGORIES_WITH_FIGHTERS_SUCCESS = 'FETCH_CONTEST_CATEGORIES_WITH_FIGHTERS_SUCCESS';
export const CONTEST_CANCEL_FETCHING = 'CONTEST_CANCEL_FETCHING';

export const FETCH_CONTEST_FIGHTS = 'FETCH_CONTEST_FIGHTS';
export const FETCH_CONTEST_FIGHTS_FULFILLED = 'FETCH_CONTEST_FIGHTS_FULFILLED';

export const CONTEST_ALLOCATE_JUGDE = 'CONTEST_ALLOCATE_JUGDE';
export const CONTEST_ALLOCATE_JUGDE_SUCCESS = 'CONTEST_ALLOCATE_JUGDE_SUCCESS';
export const CONTEST_ALLOCATE_JUGDE_REJECTED = 'CONTEST_ALLOCATE_JUGDE_REJECTED';
export const TOSSUP_JUDGES = 'TOSSUP_JUDGES';
export const TOSSUP_JUDGES_SUCCESS = 'TOSSUP_JUDGES_SUCCESS';
export const TOSSUP_JUDGES_REJECTED = 'TOSSUP_JUDGES_REJECTED';
export const SCHEDULE_FIGHTS = 'SCHEDULE_FIGHTS';
export const SCHEDULE_FIGHTS_SUCCESS = 'SCHEDULE_FIGHTS_SUCCESS';
export const SCHEDULE_FIGHTS_REJECTED = 'SCHEDULE_FIGHTS_REJECTED';

//Fight
export const FETCH_FIGHT = 'FETCH_FIGHT';
export const FETCH_FIGHT_SUCCESS = 'FETCH_FIGHT_SUCCESS';
export const FETCH_FIGHT_REJECTED = 'FETCH_FIGHT_REJECTED';

export const FETCH_FIGHTS_DRAWS = 'FETCH_FIGHTS_DRAWS';
export const FETCH_FIGHTS_DRAWS_SUCCESS = 'FETCH_FIGHTS_DRAWS_SUCCESS';
export const FETCH_FIGHTS_DRAWS_REJECTED = 'FETCH_FIGHTS_DRAWS_REJECTED';

export const FETCH_CONTEST_CATEGORY_FIGHTS = 'FETCH_CONTEST_CATEGORY_FIGHTS';
export const FETCH_CONTEST_CATEGORY_FIGHTS_SUCCESS = 'FETCH_CONTEST_CATEGORY_FIGHTS_SUCCESS';
export const FETCH_CONTEST_CATEGORY_FIGHTS_REJECTED = 'FETCH_CONTEST_CATEGORY_FIGHTS_REJECTED';

export const GENERATE_FIGHTS = 'GENERATE_FIGHTS';
export const GENERATE_FIGHTS_SUCCESS = 'GENERATE_FIGHTS_SUCCESS';
export const GENERATE_FIGHTS_REJECTED = 'GENERATE_FIGHTS_REJECTED';

export const REGENERATE_FIGHTS = 'REGENERATE_FIGHTS';
export const REGENERATE_FIGHTS_SUCCESS = 'REGENERATE_FIGHTS_SUCCESS';
export const REGENERATE_FIGHTS_REJECTED = 'REGENERATE_FIGHTS_REJECTED';

export const TOSSUP_CONTEST_FIGHTS = 'TOSSUP_CONTEST_FIGHTS';
export const TOSSUP_CONTEST_FIGHTS_SUCCESS = 'TOSSUP_CONTEST_FIGHTS_SUCCESS';
export const TOSSUP_CONTEST_FIGHTS_REJECTED = 'TOSSUP_CONTEST_FIGHTS_REJECTED';

export const MOVE_FIGHTER = 'MOVE_FIGHTER';
export const MOVE_FIGHTER_SUCCESS = 'MOVE_FIGHTER_SUCCESS';
export const MOVE_FIGHTER_REJECTED = 'MOVE_FIGHTER_REJECTED';

export const DRAG_FIGHT = 'DRAG_FIGHT';
export const MOVE_FIGHT = 'MOVE_FIGHT';
export const MOVE_FIGHT_SUCCESS = 'MOVE_FIGHT_SUCCESS';
export const MOVE_FIGHT_REJECTED = 'MOVE_FIGHT_REJECTED';

export const SHOW_ERROR = 'SHOW_ERROR';
export const SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE';
export const DISMISS_ERROR = 'DISMISS_ERROR';
export const DISMISS_NOTIFICATIONS = 'DISMISS_NOTIFICATIONS';

//documents

export const SEND_DOCUMENTS = 'SEND_DOCUMENTS';
export const SEND_DOCUMENTS_SUCCESS = 'SEND_DOCUMENTS_SUCCESS';
export const SEND_DOCUMENTS_REJECTED = 'SEND_DOCUMENTS_REJECTED';
export const GET_DOCUMENTS = 'GET_DOCUMENTS';
export const GET_DOCUMENTS_SUCCESS = 'GET_DOCUMENTS_SUCCESS';
export const GET_DOCUMENTS_REJECTED = 'GET_DOCUMENTS_REJECTED';