import { NextResponse } from "next/server";
import { supabase } from "@/services/supabaseClient";

export async function POST(req: Request) {
  try {
    const { embedding, limit = 5, threshold = 0.7 } = await req.json();

    if (!embedding || !Array.isArray(embedding)) {
      return NextResponse.json(
        { error: "Valid embedding array is required" },
        { status: 400 }
      );
    }

    // Buscar chunks similares usando a função RPC do Supabase
    const { data, error } = await supabase.rpc("match_document_chunks", {
      query_embedding: embedding,
      match_threshold: threshold,
      match_count: limit,
    });

    if (error) {
      console.error("Supabase RPC error:", error);
      return NextResponse.json(
        { error: "Failed to search documents" },
        { status: 500 }
      );
    }

    // Enriquecer resultados com informações do documento
    const enrichedResults = await Promise.all(
      (data || []).map(async (chunk: any) => {
        // Buscar informações do documento
        const { data: docData } = await supabase
          .from("documents")
          .select("name, is_deletable")
          .eq("id", chunk.document_id)
          .single();

        return {
          id: chunk.id,
          documentId: chunk.document_id,
          documentName: docData?.name || "Unknown",
          chunkText: chunk.chunk_text,
          similarity: chunk.similarity,
          metadata: chunk.metadata,
          isKnowledgeBase: !docData?.is_deletable,
        };
      })
    );

    // Ordenar por similaridade (maior primeiro)
    enrichedResults.sort((a, b) => b.similarity - a.similarity);

    return NextResponse.json({
      results: enrichedResults,
      count: enrichedResults.length,
    });
  } catch (error: any) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
