import { ExcelWriter, Excel_File, PdfWriter, Pdf_File } from "./FactoryMethod";

it("test Pdf Writer file type and text", () => {
  const pdfWriter = new PdfWriter();
  pdfWriter.WriteToFile("helloPdf");
  expect(pdfWriter.file).toBeInstanceOf(Pdf_File);
  expect(pdfWriter.file.text).toBe("helloPdf");
});

it("test Pdf Writer file type and text", () => {
  const pdfWriter = new ExcelWriter();
  pdfWriter.WriteToFile("helloExcel");
  expect(pdfWriter.file).toBeInstanceOf(Excel_File);
  expect(pdfWriter.file.text).toBe("helloExcel");
});
