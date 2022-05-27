import { apiUrl, contentUrl } from "./dropbox.constants";
import { deleteFile, getFileData, postFile } from "./routes.constants";

export class FilesConfiguration {
  token: string;
  route: string;

  constructor(token: string) {
    this.token = token;
    this.route = "2/files";
  }

  uploadConfig(image: string) {
    const path = `${contentUrl}/${this.route}/${postFile}`;

    return {
      method: "post",
      url: path,
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: `Bearer ${this.token}`,
        "Dropbox-API-Arg": `{"mode":"add","path":"/${image}","mute":false,"autorename":true}`,
      },
      data: {
        binary: `../files/${image}`,
      },
    };
  }

  getMetaConfigs(image: string) {
    const path = `${apiUrl}/${this.route}/${getFileData}`;

    return {
      method: "post",
      url: path,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      data: {
        path: `/${image}`,
      },
    };
  }

  deleteConfigs(image: string) {
    const path = `${apiUrl}/${this.route}/${deleteFile}`;

    return {
      method: "post",
      url: path,
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
      data: {
        path: `/${image}`,
      },
    };
  }
}
