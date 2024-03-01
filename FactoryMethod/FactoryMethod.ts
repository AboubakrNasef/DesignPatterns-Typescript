abstract class _File {
  text: string = "";
}
class Pdf_File extends _File {}
class Excel_File extends _File {}

abstract class Writer {
  file: _File;
  constructor() {
    this.file = this.CreateFile();
  }
  WriteToFile(text: string): void {
    this.file.text = text;
  }

  protected abstract CreateFile(): _File;
}

class PdfWriter extends Writer {
  protected override CreateFile(): _File {
    return new Pdf_File();
  }
}
class ExcelWriter extends Writer {
  protected override CreateFile(): _File {
    return new Excel_File();
  }
}

export { ExcelWriter, PdfWriter, Writer, _File, Pdf_File, Excel_File };
