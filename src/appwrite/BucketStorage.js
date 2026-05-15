import conf from "../conf/conf.js";
import { Client, ID, Storage } from "appwrite";

export class StorageService {
  client = new Client();
  bucket;

  constructor() {
    this.client
      .setProject(conf.appwriteProjectId)
      .setEndpoint(conf.appwriteUrl);

    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

    getFileView(fileId) {
    try {
       return this.bucket.getFileView(
        conf.appwriteBucketId,
        fileId
    );
    } catch (error) {
      console.log("Appwrite service :: getFilePreview :: error", error);
      return "";
    }
  }
}

const storageService = new StorageService();

export default storageService;