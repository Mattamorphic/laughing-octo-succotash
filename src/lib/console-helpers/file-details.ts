/**
 * @file FileDetails class
 * @author Mattamorphic
 */
import fs from 'fs'

export default class FileDetails {
  private filename: string;
  private exists: boolean;
  private contents: string;
  private mtime: number;

  constructor (filename: string) {
    this.filename = filename;
    this.exists = fs.existsSync(filename);
    this.contents = null;
    this.mtime = this.getMtime();
  }

  public getFilename(): string {
    return this.filename;
  }

  public doesExist(): boolean {
    return this.exists;
  }

  public getContents(): string {
    if (!this.exists) {
      return '';
    }
    // If the contents is null of the modified time has changed
    if (this.contents === null || this.mtime !== this.getMtime()) {
      this.contents = fs.readFileSync(this.filename, 'utf8');
    }
    return this.contents;
  }

  private getMtime(): number {
    if (!this.exists) {
      return null;
    }
    const stats = fs.statSync(this.filename);
    return stats.mtime.getTime();
  }
}
