const mergePdfs = async (p1, p2) => {
    // Dynamically import the PDFMerger class
    const PDFMergerModule = await import('pdf-merger-js');
    const PDFMerger = PDFMergerModule.default;
  
    // Create a new instance of PDFMerger for each merge operation
    const merger = new PDFMerger();
  
    // Merge all pages from the first PDF
    await merger.add(p1);
  
    // Merge only page 2 from the second PDF
    await merger.add(p2);
  
    // Save the merged PDF with a unique name based on the current timestamp
    const timestamp = new Date().getTime();
    const outputPath = `public/${timestamp}.pdf`;
    await merger.save(outputPath);
  
    // Return the timestamp as a unique identifier for the merged PDF
    return timestamp;
  };
  
  module.exports = { mergePdfs };
  