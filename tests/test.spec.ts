import { DropboxFileController } from "../сontrollers/dropboxController";
import { apiUrl, contentUrl } from "../constants/dropbox.constants";

const dropboxFileController = new DropboxFileController();

describe("Upload file to DropBox", () => {
  it("upload", async () => {
    const res = await dropboxFileController.upload("cat.jpg");
    expect(res.status).toBe(200);
  });
});

describe("Get file meta data from Dropbox", () => {
  it("get", async () => {
    const res = await dropboxFileController.getMeta("cat.jpg");
    expect(res.status).toBe(200);
  });
});

describe("Delete file from Dropbox", () => {
  it("delete", async () => {
    const res = await dropboxFileController.delete("cat.jpg");
    expect(res.status).toBe(200);
  });
});
