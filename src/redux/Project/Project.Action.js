// actions.js
import * as actionTypes from "./ActionTypes";
import api, { API_BASE_URL } from "@/Api/api";

// Action for fetching projects
export const fetchProjects = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_PROJECTS_REQUEST });
    try {
      const response = await api.get("/api/projects");
      console.log("fetch Projects ", response.data);
      dispatch({
        type: actionTypes.FETCH_PROJECTS_SUCCESS,
        projects: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_PROJECTS_FAILURE,
        error: error.message,
      });
    }
  };
};

// Action for creating a project
export const createProject = (projectData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_PROJECT_REQUEST });
    try {
      const response = await api.post(
        `${API_BASE_URL}/api/projects`,
        projectData
      );
      dispatch({
        type: actionTypes.CREATE_PROJECT_SUCCESS,
        project: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};

// Action for updating a project
export const updateProject = ({projectId, updatedData}) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_PROJECT_REQUEST });
    try {
      const response = await api.put(
        `${API_BASE_URL}/api/projects/${projectId}`,
        updatedData
      );
      dispatch({
        type: actionTypes.UPDATE_PROJECT_SUCCESS,
        project: response.data,
      });
    } catch (error) {
        console.log("catch error ",error)
      dispatch({
        type: actionTypes.UPDATE_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchProjectById = (id) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.FETCH_PROJECT_BY_Id_REQUEST });
      try {
        const response = await api.get(`/api/projects/${id}`);
        console.log("fetch Projects by id", response.data);
        dispatch({
          type: actionTypes.FETCH_PROJECT_BY_Id_SUCCESS,
          projectDetails: response.data,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.FETCH_PROJECT_BY_Id_FAILURE,
          error: error.message,
        });
      }
    };
  };

// Action for deleting a project
export const deleteProject = (projectId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_PROJECT_REQUEST });
    try {
      await api.delete(`/api/projects/${projectId}`);
      dispatch({ type: actionTypes.DELETE_PROJECT_SUCCESS, projectId });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};
