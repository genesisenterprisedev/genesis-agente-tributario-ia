module.exports = [
"[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_pdfjs-dist_build_pdf_mjs_74288fa9._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-ssr] (ecmascript)");
    });
});
}),
"[project]/utils/textChunking.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/utils_textChunking_ts_093288d8._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/utils/textChunking.ts [app-ssr] (ecmascript)");
    });
});
}),
];