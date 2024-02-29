
abstract class _File{
   
   
}
class Pdf_File extends _File {
    
}
class Excel_File extends _File {
    
}


abstract class Writer {
 file:_File;
    constructor(){
       this.file= this.CreateFile();
    }
    WriteToFile(text:string):void
    {
       //Writing operations
    }
    abstract CreateFile():_File;
}


class PdfWriter extends Writer{
    CreateFile(): _File {
        return new Pdf_File();
    }

}
class ExcelWriter extends Writer{
    CreateFile(): _File {
        return new Excel_File();
    }

}




