import { token } from "../constants/constants";
import {
  deleteFile,
  getFileData,
  postFile,
} from "../constants/routes.constants";
import axios, { AxiosResponse } from "axios";

export class DropboxFileController {
  route: string;

  constructor() {
    this.route = "2/files";
  }

  async upload(url, imagePath): Promise<AxiosResponse> {
    const path = `${url}/${this.route}/${postFile}`;
    let response = null;

    try {
      response = await axios({
        method: "post",
        url: path,
        headers: {
          "Content-Type": "application/octet-stream",
          Authorization: `Bearer ${token}`,
          "Dropbox-API-Arg": `{"mode":"add","path":"/${imagePath}","mute":false,"autorename":true}`,
        },
        data: {
          binary: `../files/${imagePath}`,
        },
      });
    } catch (error) {
      console.error(error);
    }

    return response;
  }

  async getMeta(url, imagePath): Promise<AxiosResponse> {
    const path = `${url}/${this.route}/${getFileData}`;
    let response = null;

    try {
      response = await axios({
        method: "post",
        url: path,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          path: `/${imagePath}`,
        },
      });
    } catch (error) {
      console.error(error);
    }

    return response;
  }

  async delete(url, imagePath): Promise<AxiosResponse> {
    const path = `${url}/${this.route}/${deleteFile}`;
    let response = null;

    try {
      response = await axios({
        method: "post",
        url: path,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: {
          path: `/${imagePath}`,
        },
      });
    } catch (error) {
      console.error(error);
    }

    return response;
  }
}
