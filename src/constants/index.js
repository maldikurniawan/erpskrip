const host = "http://192.168.1.29:8000";
const api = "/api";

export const baseurl = `${host}${api}`;
export const API_URL_login = `${baseurl}/auth/`;
export const API_URL_janji = `${baseurl}/detailpembuatjanji/`;
export const API_URL_janjiupdate = `${baseurl}/detailpembuatjanjiupdate/`;
export const API_URL_review = `${baseurl}/review/`;