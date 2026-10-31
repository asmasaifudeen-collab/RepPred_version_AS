import React from 'react';
import { Database, ShieldCheck, CheckCircle2, XCircle, ArrowRight, Layers, Box, Dna, Sparkles, Share2, FileCode, Check } from 'lucide-react';

interface DataViewProps {
  embedded?: boolean;
}

export const DataView: React.FC<DataViewProps> = ({ embedded = false }) => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', color: '#11110F' }}>
      {/* 1. SECTION INTRODUCTION */}
      <div style={{ marginBottom: '28px' }}>
        <div
          style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: '#11110F',
            background: '#D8FF4F',
            display: 'inline-block',
            padding: '2px 8px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '8px',
            fontFamily: 'monospace'
          }}
        >
          DATA FOUNDATION &amp; PROVENANCE
        </div>
        <h2
          style={{
            fontSize: embedded ? '2rem' : '2.2rem',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            margin: '0 0 10px 0',
            color: '#11110F'
          }}
        >
          Explore the data behind the benchmark
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            color: '#52504a',
            margin: 0,
            lineHeight: 1.5,
            maxWidth: '1000px'
          }}
        >
          RePred is grounded in experimentally measured protein-stability mutations and experimentally resolved wild-type structures.
        </p>
      </div>

      {/* 2. KEY DATASET STATISTIC CARDS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}
      >
        {/* Card 1: 3,438 Mutations */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #11110F',
            borderRadius: '6px',
            padding: '20px',
            boxShadow: '2px 2px 0px #11110F'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#52504a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Experimental Mutations
            </span>
            <Dna size={18} color="#10b981" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#11110F', fontFamily: 'monospace', lineHeight: 1.1, marginBottom: '6px' }}>
            3,438
          </div>
          <div style={{ fontSize: '0.8rem', color: '#6F6D67', lineHeight: 1.4 }}>
            Curated single-point mutations with experimental &Delta;&Delta;G stability assays in FireProt DB.
          </div>
        </div>

        {/* Card 2: 3,433 Structurally Mapped */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #11110F',
            borderRadius: '6px',
            padding: '20px',
            boxShadow: '2px 2px 0px #11110F'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#52504a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Structurally Mapped
            </span>
            <Layers size={18} color="#4f46e5" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#4f46e5', fontFamily: 'monospace', lineHeight: 1.1, marginBottom: '6px' }}>
            3,433
          </div>
          <div style={{ fontSize: '0.8rem', color: '#6F6D67', lineHeight: 1.4 }}>
            Deterministically aligned to experimental WT residue coordinates (5 boundary unmapped).
          </div>
        </div>

        {/* Card 3: 100 WT Structures */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #11110F',
            borderRadius: '6px',
            padding: '20px',
            boxShadow: '2px 2px 0px #11110F'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#52504a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Experimental WT PDBs
            </span>
            <Box size={18} color="#d97706" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#11110F', fontFamily: 'monospace', lineHeight: 1.1, marginBottom: '6px' }}>
            100
          </div>
          <div style={{ fontSize: '0.8rem', color: '#6F6D67', lineHeight: 1.4 }}>
            High-resolution wild-type crystal structures &bull; Zero synthetic or predicted PDB coordinates.
          </div>
        </div>

        {/* Card 4: 5 Representations */}
        <div
          style={{
            background: '#11110F',
            border: '1px solid #11110F',
            borderRadius: '6px',
            padding: '20px',
            color: '#F8F7F2',
            boxShadow: '2px 2px 0px #11110F'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D8FF4F', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Representation Paradigms
            </span>
            <Sparkles size={18} color="#D8FF4F" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#D8FF4F', fontFamily: 'monospace', lineHeight: 1.1, marginBottom: '6px' }}>
            5
          </div>
          <div style={{ fontSize: '0.8rem', color: '#a3a199', lineHeight: 1.4 }}>
            Sequence (252D), ESM-2 (1280D), WT 3D (131D), Contact Map (107D), and Graph GNN.
          </div>
        </div>
      </div>

      {/* 3. BIOLOGICAL DATA PROVENANCE PIPELINE */}
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #11110F',
          borderRadius: '6px',
          padding: '24px',
          marginBottom: '32px',
          boxShadow: '2px 2px 0px #11110F'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: '#11110F' }}>
              How the Data Becomes the Benchmark
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#5a5852', margin: '4px 0 0 0' }}>
              The end-to-end biological and computational workflow transforming raw assay measurements into evaluated representations.
            </p>
          </div>
          <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', fontWeight: 800, background: '#F3EFE6', border: '1px solid #11110F', padding: '3px 8px', borderRadius: '4px' }}>
            WORKFLOW PIPELINE
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '12px', alignItems: 'stretch' }}>
          {/* Step 1 */}
          <div style={{ background: '#F8F7F3', border: '1px solid #D8D5CC', padding: '14px', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'monospace' }}>STAGE 1 &bull; SOURCE</div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#11110F', marginTop: '4px' }}>FireProt DB</div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#52504a', marginTop: '8px', borderTop: '1px solid #ECEAE4', paddingTop: '6px' }}>
              Curation of experimental single-point stability measurements.
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ background: '#F8F7F3', border: '1px solid #D8D5CC', padding: '14px', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'monospace' }}>STAGE 2 &bull; MAPPING</div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#11110F', marginTop: '4px' }}>PDB Alignment</div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#52504a', marginTop: '8px', borderTop: '1px solid #ECEAE4', paddingTop: '6px' }}>
              Mapping mutation positions to atomic 3D residue coordinates.
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ background: '#F8F7F3', border: '1px solid #D8D5CC', padding: '14px', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#4f46e5', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'monospace' }}>STAGE 3 &bull; STRUCTURES</div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#11110F', marginTop: '4px' }}>WT Structures</div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#52504a', marginTop: '8px', borderTop: '1px solid #ECEAE4', paddingTop: '6px' }}>
              Filtering for high-resolution wild-type crystal structures only.
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ background: '#F8F7F3', border: '1px solid #D8D5CC', padding: '14px', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#d97706', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'monospace' }}>STAGE 4 &bull; EXTRACTION</div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#11110F', marginTop: '4px' }}>Feature Extraction</div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#52504a', marginTop: '8px', borderTop: '1px solid #ECEAE4', paddingTop: '6px' }}>
              Extracting 5 distinct deterministic representation paradigms.
            </div>
          </div>

          {/* Step 5 */}
          <div style={{ background: '#11110F', color: '#F8F7F2', border: '1px solid #11110F', padding: '14px', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#D8FF4F', fontWeight: 800, textTransform: 'uppercase', fontFamily: 'monospace' }}>STAGE 5 &bull; BENCHMARK</div>
              <div style={{ fontSize: '1rem', fontWeight: 900, color: '#D8FF4F', marginTop: '4px' }}>Benchmark Protocol</div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#a3a199', marginTop: '8px', borderTop: '1px solid #2A2925', paddingTop: '6px' }}>
              Controlled evaluation across held-out test &amp; cross-protein splits.
            </div>
          </div>
        </div>
      </div>

      {/* 4. REPRESENTATION DATA SOURCES DETAIL CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        <div className="editorial-card-light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Dna size={16} color="#4f46e5" />
            <span style={{ fontSize: '0.75rem', color: '#4f46e5', fontWeight: 800, textTransform: 'uppercase' }}>1. Sequence (252D)</span>
          </div>
          <div style={{ fontSize: '0.825rem', color: '#5a5852', marginTop: '8px', lineHeight: 1.5 }}>
            <strong>Source:</strong> <code>combined_fireprot.csv</code><br />
            <strong>Extractor:</strong> <code>src/representations/sequence.py</code><br />
            <strong>Dimensions:</strong> 252D engineered biophysical features
          </div>
        </div>

        <div className="editorial-card-light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="#d97706" />
            <span style={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 800, textTransform: 'uppercase' }}>2. ESM-2 8M (1280D)</span>
          </div>
          <div style={{ fontSize: '0.825rem', color: '#5a5852', marginTop: '8px', lineHeight: 1.5 }}>
            <strong>Source:</strong> Real FireProt Sequences<br />
            <strong>Extractor:</strong> <code>src/representations/esm.py</code><br />
            <strong>Output:</strong> <code>results/esm_embeddings_8m.pt</code>
          </div>
        </div>

        <div className="editorial-card-light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Box size={16} color="#10b981" />
            <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase' }}>3. WT 3D (131D)</span>
          </div>
          <div style={{ fontSize: '0.825rem', color: '#5a5852', marginTop: '8px', lineHeight: 1.5 }}>
            <strong>Source:</strong> 100 Experimental WT PDBs<br />
            <strong>Mapping:</strong> <code>results/pdb_mapping.csv</code><br />
            <strong>Output:</strong> <code>results/structural_features.csv</code>
          </div>
        </div>

        <div className="editorial-card-light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Share2 size={16} color="#e11d48" />
            <span style={{ fontSize: '0.75rem', color: '#e11d48', fontWeight: 800, textTransform: 'uppercase' }}>4. Contact Map (107D)</span>
          </div>
          <div style={{ fontSize: '0.825rem', color: '#5a5852', marginTop: '8px', lineHeight: 1.5 }}>
            <strong>Source:</strong> 100 Experimental WT PDBs<br />
            <strong>Contact:</strong> C&alpha;&ndash;C&alpha; &le; 8.0 &Aring;<br />
            <strong>Output:</strong> <code>results/contact_map_features.csv</code>
          </div>
        </div>
      </div>

      {/* 5. DATA INTEGRITY CHECKLIST PANEL */}
      <div
        style={{
          background: '#11110F',
          color: '#F8F7F2',
          borderRadius: '6px',
          padding: '24px',
          border: '1px solid #11110F',
          boxShadow: '2px 2px 0px #11110F'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
          <ShieldCheck size={20} color="#D8FF4F" />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: '#F8F7F2' }}>
            Data Integrity Audit Checklist
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#F8F7F2', background: '#1c1b18', padding: '8px 12px', borderRadius: '4px' }}>
            <CheckCircle2 size={15} color="#D8FF4F" /> Real FireProt Data
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#F8F7F2', background: '#1c1b18', padding: '8px 12px', borderRadius: '4px' }}>
            <CheckCircle2 size={15} color="#D8FF4F" /> Experimental WT PDBs Only
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#F8F7F2', background: '#1c1b18', padding: '8px 12px', borderRadius: '4px' }}>
            <XCircle size={15} color="#e11d48" /> Synthetic Biological Data (NONE)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#F8F7F2', background: '#1c1b18', padding: '8px 12px', borderRadius: '4px' }}>
            <XCircle size={15} color="#e11d48" /> Synthetic PDB Coordinates (NONE)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#F8F7F2', background: '#1c1b18', padding: '8px 12px', borderRadius: '4px' }}>
            <XCircle size={15} color="#e11d48" /> AlphaFold / ESMFold (NOT USED)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#F8F7F2', background: '#1c1b18', padding: '8px 12px', borderRadius: '4px' }}>
            <XCircle size={15} color="#e11d48" /> Random Mutations (NONE)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#F8F7F2', background: '#1c1b18', padding: '8px 12px', borderRadius: '4px' }}>
            <XCircle size={15} color="#e11d48" /> Fabricated &Delta;&Delta;G Values (NONE)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#F8F7F2', background: '#1c1b18', padding: '8px 12px', borderRadius: '4px' }}>
            <XCircle size={15} color="#e11d48" /> Test-Set Tuning / Leakage (NONE)
          </div>
        </div>

        <div style={{ marginTop: '16px', fontSize: '0.75rem', color: '#a3a199', lineHeight: 1.5, borderTop: '1px solid #2A2925', paddingTop: '12px' }}>
          *Note: References to <code>random_state=42</code> in machine-learning scripts represent standard deterministic algorithm initialization settings for Scikit-Learn and PyTorch, NOT synthetic biological data generation.
        </div>
      </div>
    </div>
  );
};
