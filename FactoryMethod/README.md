# Simple Factory Method

## Overview

The Factory Method Pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. It defines an abstract method in the superclass for creating objects, which subclasses implement to produce objects of specific types.

## Sequence diagram

```mermaid
sequenceDiagram
Client->>PdfWriter: WriteToFile(text)

PdfWriter->>PdfWriter: CreateFile()

PdfWriter->>Pdf_File: Create new Pdf_File

PdfWriter->>Pdf_File: Set text attribute

PdfWriter-->>Client: Pdf_File instance



Client->>ExcelWriter: WriteToFile(text)

ExcelWriter->>ExcelWriter: CreateFile()

ExcelWriter->>Excel_File: Create new Excel_File

ExcelWriter->>Excel_File: Set text attribute

ExcelWriter-->>Client: Excel_File instance




```
