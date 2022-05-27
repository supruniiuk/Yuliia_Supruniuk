import { token } from "../constants/dropbox.constants";
import axios, { AxiosResponse } from "axios";
import { FilesConfiguration } from "../constants/fileConfigurations";

export class DropboxFileController {
  filesConfiguration: FilesConfiguration;

  constructor() {
    this.filesConfiguration = new FilesConfiguration(token);
  }

  async upload(image: string): Promise<AxiosResponse> {
    let response = null;

    try {
      response = await axios(this.filesConfiguration.uploadConfig(image));
    } catch (error) {
      console.error(error);
    }

    return response;
  }

  async getMeta(image): Promise<AxiosResponse> {
    let response = null;

    try {
      response = await axios(this.filesConfiguration.getMetaConfigs(image));
    } catch (error) {
      console.error(error);
    }

    return response;
  }

  async delete(image): Promise<AxiosResponse> {
    let response = null;

    try {
      response = await axios(this.filesConfiguration.deleteConfigs(image));
    } catch (error) {
      console.error(error);
    }

    return response;
  }
}
