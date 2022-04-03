import RootPath from "./Config";
import Delete from "./Delete";
import Get from "./Get";
import Post from "./Post";
import Put from "./Put";

// Get
const getUserProfile = async () =>
  await Get(`${await RootPath("Backend_Interaction")}/profile`);
const getUserProgramming = async () =>
  await Get(`${await RootPath("Backend_Interaction")}/programming`);
const getUserSoftware = async () =>
  await Get(`${await RootPath("Backend_Interaction")}/software`);
const getUserEducations = async () =>
  await Get(`${await RootPath("Backend_Interaction")}/educations`);
const getUserWorkExperiences = async () =>
  await Get(`${await RootPath("Backend_Interaction")}/workExperiences`);
const getUserCertificateSeminar = async () =>
  await Get(`${await RootPath("Backend_Interaction")}/certificateSeminar`);
const getUserHobbies = async () =>
  await Get(`${await RootPath("Backend_Interaction")}/hobbies`);
const getUserSocialMedia = async () =>
  await Get(`${await RootPath("Backend_Interaction")}/socialMedia`);

// POST
const postUserData = async (path = "", data = {}) =>
  await Post(`${await RootPath("Backend_Interaction")}/${path}`, data);

// PUT
const putUserData = async (path = "", id = "", data = {}) =>
  await Put(`${await RootPath("Backend_Interaction")}/${path}/${id}`, data);

// DELETE
const deleteUserData = async (path, id) =>
  await Delete(`${await RootPath("Backend_Interaction")}/${path}/${id}`);

// API
const API = {
  getUserProfile,
  getUserProgramming,
  getUserSoftware,
  getUserEducations,
  getUserWorkExperiences,
  getUserCertificateSeminar,
  getUserHobbies,
  getUserSocialMedia,
  postUserData,
  putUserData,
  deleteUserData,
};

export default API;
